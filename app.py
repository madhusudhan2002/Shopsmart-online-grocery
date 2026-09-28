import base64
import mimetypes
import re
from pathlib import Path

import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(page_title="ShopSmart Groceries", page_icon="🛒", layout="wide")
BASE = Path(__file__).parent
HTML_FILE = BASE / "index.html"
CSS_FILE = BASE / "style.css"
DATA_FILE = BASE / "data.js"
JS_FILE = BASE / "script.js"
IMAGE_DIR = BASE / "images"
required = [HTML_FILE, CSS_FILE, DATA_FILE, JS_FILE, IMAGE_DIR]
missing = [p.name for p in required if not p.exists()]
if missing:
    st.error("Missing original ShopSmart files: " + ", ".join(missing))
    st.stop()

def inline_images(data_text):
    paths = sorted(set(re.findall(r"images/[^'\"\\]+", data_text)), key=len, reverse=True)
    for rel in paths:
        path = BASE / rel
        if not path.exists():
            continue
        mime = mimetypes.guess_type(str(path))[0] or "application/octet-stream"
        encoded = base64.b64encode(path.read_bytes()).decode("ascii")
        data_text = data_text.replace(rel, f"data:{mime};base64,{encoded}")
    return data_text

def patch_auth(js):
    js = re.sub(r'// --- Initial Setup ---\s*document\.addEventListener\("DOMContentLoaded", \(\) => \{.*?\n\}\);\s*\n', '', js, flags=re.S)
    pattern = r"loginForm\.addEventListener\('submit', async \(e\) => \{.*?\n\}\);\s*\n\s*registerForm\.addEventListener\('submit', async \(e\) => \{.*?\n\}\);\s*\n\s*const productListDiv"
    replacement = """const localUsers = JSON.parse(localStorage.getItem('shopSmartUsers') || '{}');
const savedUser = JSON.parse(localStorage.getItem('shopSmartUser') || 'null');
if (savedUser) {
    currentUser = savedUser;
    authLink.textContent = `Hi, ${currentUser.name || currentUser.fullName || 'User'} (Logout)`;
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim().toLowerCase();
    const password = document.getElementById('login-password').value;
    const user = localUsers[email];
    const encoded = btoa(unescape(encodeURIComponent(password)));
    if (user && user.password === encoded) {
        currentUser = user;
        localStorage.setItem('shopSmartUser', JSON.stringify(currentUser));
        authMessage.className = 'message success';
        authMessage.textContent = 'Login successful!';
        authLink.textContent = `Hi, ${currentUser.name || currentUser.fullName || 'User'} (Logout)`;
        setTimeout(() => showSection('products-section'), 600);
    } else {
        authMessage.className = 'message error';
        authMessage.textContent = 'Invalid email or password.';
    }
});

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
    if (localUsers[email]) {
        authMessage.className = 'message error';
        authMessage.textContent = 'An account with this email already exists.';
        return;
    }
    const user = {
        id: 'local_' + Date.now(),
        name: name,
        fullName: name,
        email: email,
        password: btoa(unescape(encodeURIComponent(password)))
    };
    localUsers[email] = user;
    localStorage.setItem('shopSmartUsers', JSON.stringify(localUsers));
    authMessage.className = 'message success';
    authMessage.textContent = 'Registered successfully! Please login.';
    registerForm.reset();
    setTimeout(() => showLoginBtn.click(), 700);
});

const productListDiv"""
    js, count = re.subn(pattern, replacement, js, flags=re.S)
    if count != 1:
        raise RuntimeError("Could not locate original login/register block in script.js")
    return js

html = HTML_FILE.read_text(encoding="utf-8")
css = CSS_FILE.read_text(encoding="utf-8")
data = inline_images(DATA_FILE.read_text(encoding="utf-8"))
js = patch_auth(JS_FILE.read_text(encoding="utf-8"))
match = re.search(r"<body>(.*)</body>", html, flags=re.S | re.I)
if not match:
    st.error("Could not read index.html")
    st.stop()
body = match.group(1)
body = re.sub(r"\s*<script[^>]*src=[^>]+></script>\s*", "\n", body, flags=re.I)
page = """<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>ShopSmart Groceries</title><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"><style>""" + css + """</style></head><body>""" + body + """<script>""" + data + """</script><script>""" + js + """</script></body></html>"""
components.html(page, height=1050, scrolling=True)
