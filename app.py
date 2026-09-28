import base64
import mimetypes
import re
from pathlib import Path

import streamlit as st
import streamlit.components.v1 as components


# ============================================================
# ShopSmart - original HTML/CSS/JS frontend inside Streamlit
# ============================================================

st.set_page_config(
    page_title="ShopSmart Groceries",
    page_icon="🛒",
    layout="wide",
    initial_sidebar_state="collapsed",
)

BASE = Path(__file__).resolve().parent
HTML_FILE = BASE / "index.html"
CSS_FILE = BASE / "style.css"
DATA_FILE = BASE / "data.js"
JS_FILE = BASE / "script.js"
IMAGE_DIR = BASE / "images"

required = [HTML_FILE, CSS_FILE, DATA_FILE, JS_FILE, IMAGE_DIR]
missing = [str(p.relative_to(BASE)) for p in required if not p.exists()]

if missing:
    st.error("Missing original ShopSmart files:")
    for item in missing:
        st.write(f"- {item}")
    st.stop()


# ------------------------------------------------------------
# Convert only the images needed for the product cards to
# base64. The original project contains ~12 MB of images; putting
# every image into the iframe makes Streamlit Cloud very slow.
# ------------------------------------------------------------
def inline_required_images(data_text: str) -> str:
    paths = []

    # Main product images: "image": "images/..."
    for match in re.finditer(
        r'"image"\s*:\s*"(images/[^"\\]+)"',
        data_text,
    ):
        paths.append(match.group(1))

    # First image from each variant image array.
    for match in re.finditer(
        r'images\s*:\s*\[(.*?)\]',
        data_text,
        flags=re.DOTALL,
    ):
        values = re.findall(
            r"['\"](images/[^'\"]+)['\"]",
            match.group(1),
        )
        if values:
            paths.append(values[0])

    # Preserve order while removing duplicates.
    unique_paths = list(dict.fromkeys(paths))

    for rel in unique_paths:
        path = BASE / rel
        if not path.exists():
            continue

        mime = mimetypes.guess_type(str(path))[0] or "application/octet-stream"
        encoded = base64.b64encode(path.read_bytes()).decode("ascii")
        data_url = f"data:{mime};base64,{encoded}"
        data_text = data_text.replace(rel, data_url)

    return data_text


# ------------------------------------------------------------
# Replace the original localhost:5000 authentication calls.
# This keeps the original UI but makes login/register work in
# Streamlit Cloud using browser localStorage.
# ------------------------------------------------------------
def patch_auth(js: str) -> str:
    # Remove the old debugging/initial register listener.
    js = re.sub(
        r'// --- Initial Setup ---.*?\n\}\);\s*\n',
        '',
        js,
        flags=re.DOTALL,
    )

    # Replace original login handler.
    login_pattern = (
        r"loginForm\.addEventListener\('submit', async \(e\) => \{.*?"
        r"\n\}\);"
    )

    login_replacement = r"""
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value.trim().toLowerCase();
    const password = document.getElementById('login-password').value;

    const users = JSON.parse(localStorage.getItem('shopSmartUsers') || '{}');
    const user = users[email];

    if (user && user.password === btoa(unescape(encodeURIComponent(password)))) {
        currentUser = user;
        localStorage.setItem('shopSmartUser', JSON.stringify(currentUser));

        authMessage.className = 'message success';
        authMessage.textContent = 'Login successful!';
        authLink.textContent = `Hi, ${currentUser.name || currentUser.fullName || 'User'} (Logout)`;

        setTimeout(() => showSection('products-section'), 500);
    } else {
        authMessage.className = 'message error';
        authMessage.textContent = 'Invalid email or password.';
    }
});"""

    js, login_count = re.subn(
        login_pattern,
        login_replacement,
        js,
        count=1,
        flags=re.DOTALL,
    )

    # Replace BOTH original register handlers if present.
    register_pattern = (
        r"registerForm\.addEventListener\('submit', async \(e\) => \{.*?"
        r"\n\}\);"
    )

    register_replacement = r"""
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim().toLowerCase();
    const password = document.getElementById('register-password').value;

    if (!name || !email || !password) {
        authMessage.className = 'message error';
        authMessage.textContent = 'Please fill all fields.';
        return;
    }

    const users = JSON.parse(localStorage.getItem('shopSmartUsers') || '{}');

    if (users[email]) {
        authMessage.className = 'message error';
        authMessage.textContent = 'An account with this email already exists.';
        return;
    }

    users[email] = {
        id: 'local_' + Date.now(),
        name: name,
        fullName: name,
        email: email,
        password: btoa(unescape(encodeURIComponent(password)))
    };

    localStorage.setItem('shopSmartUsers', JSON.stringify(users));

    authMessage.className = 'message success';
    authMessage.textContent = 'Registered successfully! Please login.';

    registerForm.reset();

    setTimeout(() => showLoginBtn.click(), 700);
});"""

    # Replace up to two copies, because the original script contains two.
    js, register_count = re.subn(
        register_pattern,
        register_replacement,
        js,
        count=2,
        flags=re.DOTALL,
    )

    # Restore a logged-in user after refresh.
    setup = r"""
// Streamlit deployment authentication restore.
const savedShopSmartUser = JSON.parse(localStorage.getItem('shopSmartUser') || 'null');
if (savedShopSmartUser) {
    currentUser = savedShopSmartUser;
    authLink.textContent = `Hi, ${currentUser.name || currentUser.fullName || 'User'} (Logout)`;
}
"""

    js = setup + "\n" + js

    return js


# ------------------------------------------------------------
# Build the original page as a single self-contained HTML file.
# ------------------------------------------------------------
html = HTML_FILE.read_text(encoding="utf-8")
css = CSS_FILE.read_text(encoding="utf-8")
data = inline_required_images(
    DATA_FILE.read_text(encoding="utf-8")
)
js = patch_auth(
    JS_FILE.read_text(encoding="utf-8")
)

body_match = re.search(
    r"<body[^>]*>(.*?)</body>",
    html,
    flags=re.DOTALL | re.IGNORECASE,
)

if not body_match:
    st.error("Could not read the <body> from index.html")
    st.stop()

body = body_match.group(1)

# Remove external local script/style references because they are
# embedded below. Keep Font Awesome CDN for the original icons.
body = re.sub(
    r'<script[^>]+src=["\']data\.js["\'][^>]*>\s*</script>',
    '',
    body,
    flags=re.IGNORECASE,
)
body = re.sub(
    r'<script[^>]+src=["\']script\.js["\'][^>]*>\s*</script>',
    '',
    body,
    flags=re.IGNORECASE,
)

page = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ShopSmart Groceries</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
<style>
{css}
</style>
</head>
<body>
{body}
<script>
{data}
</script>
<script>
{js}
</script>
</body>
</html>"""


# The original site is tall, so give the embedded page enough room.
components.html(
    page,
    height=1150,
    scrolling=True,
)
