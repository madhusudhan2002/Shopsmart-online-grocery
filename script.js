const sections = document.querySelectorAll('.page-section');
const navLinks = document.querySelectorAll('.nav-link');
const authLink = document.getElementById('auth-link');
const authFormTitle = document.getElementById('auth-form-title');
const authMessage = document.getElementById('auth-message');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const showRegisterBtn = document.getElementById('show-register');
const showLoginBtn = document.getElementById('show-login');
const siteTitle = document.getElementById('site-title');

let currentUser = null; 
let cart = JSON.parse(localStorage.getItem('shopSmartCart')) || [];

// Helper to show a specific section
function showSection(id) {
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
        }
    });
    if (id === 'login-section' && currentUser) {
        authLink.textContent = 'Logout';
    } else if (!currentUser) {
        authLink.textContent = 'Login/Register';
    }
}

// Update cart count in header
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('shopSmartCart', JSON.stringify(cart));
    updateCartCount();
}

// Render star ratings
function renderStars(rating, maxStars = 5) {
    let starsHtml = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= maxStars; i++) {
        if (i <= fullStars) {
            starsHtml += `<i class="fa-solid fa-star active"></i>`;
        } else if (hasHalfStar && i === fullStars + 1) {
            starsHtml += `<i class="fa-solid fa-star-half-stroke active"></i>`;
        } else {
            starsHtml += `<i class="fa-regular fa-star"></i>`;
        }
    }
    return `<span class="rating-stars">${starsHtml}</span>`;
}

// --- Initial Setup ---
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    showSection('products-section'); 
    const storedUser = localStorage.getItem('shopSmartUser');
    if (storedUser) {
        currentUser = JSON.parse(storedUser);
        authLink.textContent = `Hi, ${currentUser.fullName} (Logout)`;
    }
});

// --- Navigation Handling ---
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        showSection(targetId);
        if (targetId === 'cart-section') {
            renderCart();
        }
        if (targetId === 'checkout-section') {
            renderCheckoutSummary();
        }
    });
});

siteTitle.addEventListener('click', (e) => {
    e.preventDefault();
    showSection('products-section'); 
});

authLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentUser) {
        localStorage.removeItem('shopSmartUser');
        currentUser = null;
        authMessage.className = 'message success';
        authMessage.textContent = 'Logged out successfully.';
        setTimeout(() => authMessage.textContent = '', 3000);
        showSection('login-section'); 
        authLink.textContent = 'Login/Register';
    } else {
        showSection('login-section');
    }
});

// --- 2. Login/Register Logic ---
showRegisterBtn.addEventListener('click', () => {
    loginForm.classList.remove('active');
    registerForm.classList.add('active');
    authFormTitle.textContent = 'Register for ShopSmart';
    authMessage.textContent = '';
});

showLoginBtn.addEventListener('click', () => {
    registerForm.classList.remove('active');
    loginForm.classList.add('active');
    authFormTitle.textContent = 'Login to ShopSmart';
    authMessage.textContent = '';
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    if (email === 'user@example.com' && password === 'password123') {
        currentUser = { id: 'mockuser1', fullName: 'Mock User', email: email };
        localStorage.setItem('shopSmartUser', JSON.stringify(currentUser));
        authMessage.className = 'message success';
        authMessage.textContent = 'Login successful! Redirecting...';
        authLink.textContent = `Hi, ${currentUser.fullName} (Logout)`;
        setTimeout(() => {
            authMessage.textContent = '';
            showSection('products-section');
            loginForm.reset();
            registerForm.reset();
        }, 1500);
    } else {
        authMessage.className = 'message error';
        authMessage.textContent = 'Invalid email or password.';
    }
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fullName = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    if (localStorage.getItem('shopSmartUser') && JSON.parse(localStorage.getItem('shopSmartUser')).email === email) {
        authMessage.className = 'message error';
        authMessage.textContent = 'User with this email already exists.';
        return;
    }

    currentUser = { id: 'mockuser_new_' + Date.now(), fullName: fullName, email: email };
    localStorage.setItem('shopSmartUser', JSON.stringify(currentUser));
    authMessage.className = 'message success';
    authMessage.textContent = 'Registration successful! You are now logged in.';
    authLink.textContent = `Hi, ${currentUser.fullName} (Logout)`;
    setTimeout(() => {
        authMessage.textContent = '';
        showSection('products-section');
        loginForm.reset();
        registerForm.reset();
    }, 1500);
});
const productListDiv = document.getElementById('product-list');
const categoryFilter = document.getElementById('category-filter');
const sortBy = document.getElementById('sort-by');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

function renderProductList(products) {
    productListDiv.innerHTML = ''; 
    if (products.length === 0) {
        productListDiv.innerHTML = '<p>No products found matching your criteria.</p>';
        return;
    }

    products.forEach(product => {
        const defaultVariant = product.variants[0]; 
        if (!defaultVariant) {
            console.warn(`Product ${product.name} (ID: ${product.id}) has no variants and won't be displayed.`);
            return;
        }

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.setAttribute('data-id', product.id);
        const displayImage = product.image || (defaultVariant.images && defaultVariant.images.length > 0 ? defaultVariant.images[0] : 'https://via.placeholder.com/150/CCCCCC/FFFFFF?text=No+Image');

        productCard.innerHTML = `
            <img src="${displayImage}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description.substring(0, 70)}...</p>
            <p class="price">Starting from ₹${defaultVariant.price.toFixed(2)} (${defaultVariant.name})</p>
            ${product.averageRating > 0 ? renderStars(product.averageRating) + ` (${product.reviews.length})` : '<span>No reviews yet</span>'}
            <button class="btn secondary add-to-cart-quick" data-product-id="${product.id}" data-variant-id="${defaultVariant.id}">Add to Cart</button>
        `;
        productListDiv.appendChild(productCard);
    });
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-to-cart-quick')) {
                const productId = e.target.dataset.productId;
                const variantId = e.target.dataset.variantId;
                handleAddToCartQuick(productId, variantId);
                e.stopPropagation(); 
                return;
            }
            const productId = card.getAttribute('data-id');
            openProductDetailModal(productId);
        });
    });
}

function filterAndSortProducts() {
    let filteredProducts = [...productsData];
    const category = categoryFilter.value;
    const sortOption = sortBy.value;
    const searchTerm = searchInput.value.toLowerCase();
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === category);
    }
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(p =>
            p.name.toLowerCase().includes(searchTerm) ||
            p.description.toLowerCase().includes(searchTerm)
        );
    }
    if (sortOption === 'name-asc') {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'price-asc') {
        filteredProducts.sort((a, b) => (a.variants[0]?.price || 0) - (b.variants[0]?.price || 0));
    } else if (sortOption === 'price-desc') {
        filteredProducts.sort((a, b) => (b.variants[0]?.price || 0) - (a.variants[0]?.price || 0));
    } else if (sortOption === 'rating-desc') {
        filteredProducts.sort((a, b) => (b.averageRating || 0) - (a.averageRating || 0));
    }

    renderProductList(filteredProducts);
}

categoryFilter.addEventListener('change', filterAndSortProducts);
sortBy.addEventListener('change', filterAndSortProducts);
searchButton.addEventListener('click', filterAndSortProducts);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        filterAndSortProducts();
    }
});
renderProductList(productsData);


// --- 9. Product Detail Modal & Specifications ---
const productDetailModal = document.getElementById('product-detail-modal');
const modalProductContent = document.getElementById('modal-product-content');
const modalCloseButton = document.querySelector('.modal .close-button');
let currentImageIndex = 0; 
let currentProductInModal = null; 
let currentSelectedVariant = null;
function updateMainImage(imagesArray, index) {
    const modalProductImage = document.getElementById('modalProductImage'); 
    if (modalProductImage) {
        modalProductImage.src = imagesArray[index] || 'https://via.placeholder.com/400/CCCCCC/FFFFFF?text=No+Image'; 
        currentImageIndex = index; 
        const dots = document.querySelectorAll('#modalThumbnailDots .dot');
        dots.forEach(dot => dot.classList.remove('active-dot')); 
        if (dots[index]) {
            dots[index].classList.add('active-dot'); 
        }
    } else {
        console.error("modalProductImage element not found. Image carousel cannot update.");
    }
}
function rebuildThumbnailDots(imagesArray) {
    const modalThumbnailDotsContainer = document.getElementById('modalThumbnailDots');
    if (!modalThumbnailDotsContainer) {
        console.error("modalThumbnailDots element not found. Cannot rebuild dots.");
        return;
    }

    modalThumbnailDotsContainer.innerHTML = ''; 
    imagesArray.forEach((imgSrc, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.setAttribute('data-index', index); 
        if (index === currentImageIndex) { 
            dot.classList.add('active-dot');
        }
        dot.addEventListener('click', function() {
            updateMainImage(imagesArray, parseInt(this.dataset.index)); 
        });
        modalThumbnailDotsContainer.appendChild(dot);
    });
}

// --- Main Modal Function ---
async function openProductDetailModal(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }

    currentProductInModal = product;
    currentSelectedVariant = product.variants && product.variants.length > 0 ? product.variants[0] : null;

    if (!currentSelectedVariant) {
        console.error('No variants found for product:', productId);
        modalProductContent.innerHTML = `<p>Error: No variants available for this product.</p>`;
        productDetailModal.classList.add('active');
        return;
    }
    const initialImages = currentSelectedVariant.images && currentSelectedVariant.images.length > 0 ? currentSelectedVariant.images : ['https://via.placeholder.com/400/CCCCCC/FFFFFF?text=No+Image'];
    currentImageIndex = 0; 
    let variantsHtml = '';
    if (product.variants && product.variants.length > 0) {
        product.variants.forEach((variant, index) => {
            const isSelected = variant.id === currentSelectedVariant.id ? 'selected' : '';
            variantsHtml += `
                <button class="variant-btn ${isSelected}"
                        data-variant-id="${variant.id}"
                        data-product-id="${product.id}"
                        data-variant-index="${index}"
                        ${variant.stock === 0 ? 'disabled' : ''}>
                    ${variant.name} - ₹${variant.price.toFixed(2)}
                    ${variant.stock === 0 ? ' (Out of Stock)' : ''}
                </button>
            `;
        });
    } else {
        variantsHtml = `<p>No specific weight/quantity options available.</p>`;
    }

    // Offers HTML (using your renderOffers function)
    const offersHtml = renderOffers(product.id);
    let specsHtml = '';
    if (product.specifications && Object.keys(product.specifications).length > 0) {
        specsHtml = `
            <div class="specifications-section">
                <h3>Specifications</h3>
                <table class="specifications-table">
                    <tbody>
                        ${Object.entries(product.specifications).map(([key, value]) => `
                            <tr>
                                <th>${key.replace(/_/g, ' ')}</th>
                                <td>${typeof value === 'object' && value !== null
                                    ? `<ul>${Object.entries(value).map(([subKey, subValue]) => `<li><strong>${subKey.replace(/_/g, ' ')}:</strong> ${subValue}</li>`).join('')}</ul>`
                                    : Array.isArray(value)
                                    ? value.join(', ')
                                    : value
                                }</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }

    // Reviews HTML
    let reviewsHtml = '';
    reviewsHtml = `
        <div class="reviews-section">
            <h3>Ratings & Reviews (${product.reviews.length} reviews)</h3>
            <div class="average-rating-display">
                Average Rating: ${renderStars(product.averageRating)} ${product.averageRating.toFixed(1)} / 5
            </div>
            <div id="product-reviews-list">
                ${product.reviews.length > 0 ?
                    product.reviews.map(review => `
                        <div class="review-item">
                            <p><span class="reviewer-name">${review.userName}</span> rated ${renderStars(review.rating)} <span class="review-date">${new Date(review.date).toLocaleDateString('en-IN')}</span></p>
                            <p class="review-comment">${review.comment}</p>
                        </div>
                    `).join('')
                    : '<p>No reviews yet for this product. Be the first to review!</p>'
                }
            </div>

            <div class="review-form">
                <h3>Submit Your Review</h3>
                <form id="submit-review-form">
                    <div class="form-group">
                        <label>Your Rating:</label>
                        <div class="star-rating" id="review-star-selection">
                            <i class="fa-regular fa-star" data-rating="1"></i>
                            <i class="fa-regular fa-star" data-rating="2"></i>
                            <i class="fa-regular fa-star" data-rating="3"></i>
                            <i class="fa-regular fa-star" data-rating="4"></i>
                            <i class="fa-regular fa-star" data-rating="5"></i>
                        </div>
                        <input type="hidden" id="selected-review-rating" value="0">
                    </div>
                    <div class="form-group">
                        <label for="review-comment">Your Comment (optional):</label>
                        <textarea id="review-comment" rows="4"></textarea>
                    </div>
                    <button type="submit" class="btn secondary">Post Review</button>
                </form>
                <div id="review-message" class="message"></div>
            </div>
        </div>
    `;

    // Render Similar Items and Bought Together
    const similarItemsHtml = renderSimilarItems(product.id);
    const boughtTogetherHtml = renderBoughtTogether(product.id);
    modalProductContent.innerHTML = `
        <div class="product-detail-modal-inner-content">
            <div class="product-image-modal">
                <img id="modalProductImage" src="${initialImages[0]}" alt="${product.name}">
                <div class="modal-gallery-nav">
                    <span class="nav-arrow left-arrow" data-direction="prev">&#10094;</span>
                    <span class="nav-arrow right-arrow" data-direction="next">&#10095;</span>
                </div>
                <div id="modalThumbnailDots" class="modal-thumbnail-dots">
                    </div>
            </div>

            <div class="product-details-info">
                <h2>${product.name}</h2>
                <p class="modal-description">${product.description}</p>

                <div class="variant-options">
                    <h3>Select Weight/Quantity:</h3>
                    <div id="variant-buttons">
                        ${variantsHtml}
                    </div>
                </div>

                <p class="modal-price">₹<span id="modalCurrentPrice">${currentSelectedVariant.price.toFixed(2)}</span></p>
                <p>Availability: <span id="modalCurrentAvailability" style="color: ${currentSelectedVariant.stock > 0 ? 'green' : 'red'}; font-weight: bold;">
                    ${currentSelectedVariant.stock > 0 ? `In Stock (${currentSelectedVariant.stock} units)` : 'Out of Stock'}
                </span></p>

                <button class="btn primary add-to-cart-btn-modal" ${currentSelectedVariant.stock === 0 ? 'disabled' : ''}>
                    Add to Cart
                </button>

                ${offersHtml}
                ${specsHtml}
                ${reviewsHtml}
                ${similarItemsHtml}
                ${boughtTogetherHtml}
            </div>
        </div>
    `;
    const modalCurrentPriceSpan = document.getElementById('modalCurrentPrice');
    const modalCurrentAvailabilitySpan = document.getElementById('modalCurrentAvailability');
    const modalAddToCartButton = modalProductContent.querySelector('.add-to-cart-btn-modal');
    const variantButtons = modalProductContent.querySelectorAll('.variant-btn');
    const modalNavArrows = modalProductContent.querySelectorAll('.nav-arrow');

    // Event listener for variant selection buttons
    variantButtons.forEach(button => {
        button.addEventListener('click', function() {
            variantButtons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
            const selectedVariantId = this.dataset.variantId;
            currentSelectedVariant = product.variants.find(v => v.id === selectedVariantId);

            if (currentSelectedVariant) {
                modalCurrentPriceSpan.textContent = currentSelectedVariant.price.toFixed(2);
                modalCurrentAvailabilitySpan.textContent = `${currentSelectedVariant.stock > 0 ? `In Stock (${currentSelectedVariant.stock} units)` : 'Out of Stock'}`;
                modalCurrentAvailabilitySpan.style.color = currentSelectedVariant.stock > 0 ? 'green' : 'red';
                modalAddToCartButton.disabled = currentSelectedVariant.stock === 0;
                if (currentSelectedVariant.images && currentSelectedVariant.images.length > 0) {
                    rebuildThumbnailDots(currentSelectedVariant.images);
                    updateMainImage(currentSelectedVariant.images, 0); 
                } else {
                    rebuildThumbnailDots(['https://via.placeholder.com/400/CCCCCC/FFFFFF?text=No+Image']);
                    updateMainImage(['https://via.placeholder.com/400/CCCCCC/FFFFFF?text=No+Image'], 0);
                }
            }
        });
    });

    // Event listeners for carousel navigation arrows
    modalNavArrows.forEach(arrow => {
        arrow.addEventListener('click', function() {
            const direction = this.dataset.direction;
            const imagesArray = currentSelectedVariant.images && currentSelectedVariant.images.length > 0 ? currentSelectedVariant.images : ['https://via.placeholder.com/400/CCCCCC/FFFFFF?text=No+Image']; // Use images of current variant

            if (imagesArray.length <= 1) return; 

            if (direction === 'next') {
                currentImageIndex = (currentImageIndex + 1) % imagesArray.length;
            } else if (direction === 'prev') {
                currentImageIndex = (currentImageIndex - 1 + imagesArray.length) % imagesArray.length;
            }
            updateMainImage(imagesArray, currentImageIndex); 
        });
    });
    rebuildThumbnailDots(initialImages); 
    modalAddToCartButton.addEventListener('click', handleAddToCartModal); 
    const reviewStars = document.querySelectorAll('#review-star-selection .fa-star');
    const selectedReviewRatingInput = document.getElementById('selected-review-rating');
    reviewStars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.dataset.rating);
            selectedReviewRatingInput.value = rating;
            reviewStars.forEach((s, index) => {
                s.classList.toggle('active', index < rating);
                s.classList.remove('fa-regular', 'fa-solid'); 
                s.classList.add('fa-solid'); 
            });
        });
        star.addEventListener('mouseover', () => {
            const rating = parseInt(star.dataset.rating);
            reviewStars.forEach((s, index) => {
                s.classList.toggle('active', index < rating);
                s.classList.remove('fa-regular', 'fa-solid');
                s.classList.add('fa-solid');
            });
        });
        star.addEventListener('mouseout', () => {
            const currentRating = parseInt(selectedReviewRatingInput.value);
            reviewStars.forEach((s, index) => {
                s.classList.toggle('active', index < currentRating);
                s.classList.remove('fa-regular', 'fa-solid');
                s.classList.add(index < currentRating ? 'fa-solid' : 'fa-regular');
            });
        });
    });
    const submitReviewForm = document.getElementById('submit-review-form');
    if (submitReviewForm) {
        submitReviewForm.removeEventListener('submit', handleReviewSubmission); 
        submitReviewForm.addEventListener('submit', handleReviewSubmission);
    }
    const addBothBtn = document.getElementById('add-both-to-cart-btn');
    if (addBothBtn) {
        addBothBtn.removeEventListener('click', handleAddBoughtTogether); 
        addBothBtn.addEventListener('click', handleAddBoughtTogether);
    }
    document.querySelectorAll('.recommendations-section .add-to-cart-quick').forEach(button => {
        button.removeEventListener('click', (e) => { 
            const productId = e.target.dataset.productId;
            const variantId = e.target.dataset.variantId;
            handleAddToCartQuick(productId, variantId);
            e.stopPropagation();
        });
        button.addEventListener('click', (e) => {
            const productId = e.target.dataset.productId;
            const variantId = e.target.dataset.variantId;
            handleAddToCartQuick(productId, variantId);
            e.stopPropagation(); 
        });
    });

    productDetailModal.classList.add('active'); 
}

modalCloseButton.addEventListener('click', () => {
    productDetailModal.classList.remove('active');
    currentProductInModal = null;
    currentSelectedVariant = null;
    document.getElementById('review-message').textContent = ''; 
    document.getElementById('submit-review-form').reset(); 
    document.getElementById('selected-review-rating').value = '0'; 
    document.querySelectorAll('#review-star-selection .fa-star').forEach(s => { 
        s.classList.remove('fa-solid', 'active');
        s.classList.add('fa-regular');
    });
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === productDetailModal) {
        productDetailModal.classList.remove('active');
        currentProductInModal = null;
        currentSelectedVariant = null;
        document.getElementById('review-message').textContent = ''; 
        document.getElementById('submit-review-form').reset();
        document.getElementById('selected-review-rating').value = '0'; 
        document.querySelectorAll('#review-star-selection .fa-star').forEach(s => { 
            s.classList.remove('fa-solid', 'active');
            s.classList.add('fa-regular');
        });
    }
});


// --- 8. Offers Display ---
function renderOffers(productId) {
    const product = productsData.find(p => p.id === productId);
    let applicableOffers = offersData.filter(offer =>
        (offer.appliesToProductId === productId) ||
        (product && offer.appliesToCategory === product.category) ||
        (offer.appliesToProductId === undefined && offer.appliesToCategory === undefined) 
    );

    if (applicableOffers.length === 0) {
        return '<li>No specific offers available for this product.</li>';
    }

    return applicableOffers.map(offer => `
        <li>
            <strong>${offer.name}:</strong> ${offer.description}
            ${offer.couponCode ? ` (Coupon: <strong>${offer.couponCode}</strong>)` : ''}
        </li>
    `).join('');
}


// --- 4. Ratings & 5. Reviews Logic ---
function handleReviewSubmission(e) {
    e.preventDefault();
    const reviewMessageDiv = document.getElementById('review-message');

    if (!currentUser) {
        reviewMessageDiv.className = 'message error';
        reviewMessageDiv.textContent = 'You must be logged in to submit a review.';
        return;
    }

    const rating = parseInt(document.getElementById('selected-review-rating').value);
    const comment = document.getElementById('review-comment').value.trim();

    if (rating === 0) {
        reviewMessageDiv.className = 'message error';
        reviewMessageDiv.textContent = 'Please select a rating.';
        return;
    }

    // Mock: Add review directly to the product's data
    const product = currentProductInModal;
    if (!product) {
        reviewMessageDiv.className = 'message error';
        reviewMessageDiv.textContent = 'Error: No product selected for review.';
        return;
    }

    const existingReview = product.reviews.find(r => r.userId === currentUser.id);

    if (existingReview) {
        reviewMessageDiv.className = 'message error';
        reviewMessageDiv.textContent = 'You have already reviewed this product.';
        return;
    }

    const newReview = {
        id: product.reviews.length + 1, 
        userId: currentUser.id,
        userName: currentUser.fullName,
        rating: rating,
        comment: comment,
        date: new Date().toISOString().slice(0, 10) 
    };

    product.reviews.push(newReview);
    const totalRating = product.reviews.reduce((sum, r) => sum + r.rating, 0);
    product.averageRating = totalRating / product.reviews.length;

    reviewMessageDiv.className = 'message success';
    reviewMessageDiv.textContent = 'Review submitted successfully!';
    setTimeout(() => {
        openProductDetailModal(product.id);
    }, 1000);
}
function renderSimilarItems(currentProductId) {
    const mainProduct = productsData.find(cp => cp.id === currentProductId);
    if (!mainProduct) return '';

    const similarProducts = productsData.filter(p =>
        p.category === mainProduct.category && p.id !== currentProductId && p.variants.length > 0 
    ).slice(0, 3); 

    if (similarProducts.length === 0) {
        return ''; 
    }

    return `
        <div class="recommendations-section">
            <h3>Similar items to consider</h3>
            <div class="product-grid" style="grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));">
                ${similarProducts.map(product => `
                    <div class="product-card" data-id="${product.id}">
                        <img src="${product.image || (product.variants[0]?.images[0] || 'https://via.placeholder.com/150/CCCCCC/FFFFFF?text=No+Image')}" alt="${product.name}">
                        <div class="card-content">
                            <h3>${product.name}</h3>
                            ${product.averageRating > 0 ? `<p class="rating-stars">${renderStars(product.averageRating)} (${product.reviews.length})</p>` : ''}
                            <p class="price">₹${product.variants[0].price.toFixed(2)}</p>
                            <button class="btn secondary add-to-cart-quick" data-product-id="${product.id}" data-variant-id="${product.variants[0].id}">Add</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}


// Function to render "Frequently Bought Together"
function renderBoughtTogether(currentProductId) {
    const mainProduct = productsData.find(p => p.id === currentProductId);
    const mainVariant = mainProduct?.variants[0]; 

    const boughtTogetherItems = boughtTogetherData[currentProductId] || [];

    if (!mainProduct || !mainVariant || boughtTogetherItems.length === 0) {
        return ''; 
    }

    let totalCombinedPrice = mainVariant.price;

    const itemsHtml = boughtTogetherItems.map((item, index) => {
        const product = productsData.find(p => p.id === item.productId);
        const variant = product?.variants.find(v => v.id === item.variantId);

        if (!product || !variant) return '';

        totalCombinedPrice += variant.price;

        return `
            ${index === 0 ? '' : '<span class="plus-icon">+</span>'}
            <div class="bought-together-item">
                <img src="${product.image || (variant.images[0] || 'https://via.placeholder.com/150/CCCCCC/FFFFFF?text=No+Image')}" alt="${product.name}">
                <h4>${product.name} (${variant.name})</h4>
                <p class="item-price">₹${variant.price.toFixed(2)}</p>
            </div>
        `;
    }).join('');

    return `
        <div class="recommendations-section">
            <h3>Frequently bought together</h3>
            <div class="bought-together-container">
                <div class="bought-together-item">
                    <img src="${mainProduct.image || (mainVariant.images[0] || 'https://via.placeholder.com/150/CCCCCC/FFFFFF?text=No+Image')}" alt="${mainProduct.name}">
                    <h4>This item: ${mainProduct.name} (${mainVariant.name})</h4>
                    <p class="item-price">₹${mainVariant.price.toFixed(2)}</p>
                </div>
                ${itemsHtml}
            </div>
            <div class="total-price-checkout">
                <span class="total-label">Total price:</span>
                <span class="total-value">₹${totalCombinedPrice.toFixed(2)}</span>
                <button id="add-both-to-cart-btn" class="add-both-to-cart-btn">Add both to Cart</button>
            </div>
        </div>
    `;
}

// Handler for "Add both to Cart" button in FBT section
function handleAddBoughtTogether() {
    if (!currentUser) {
        alert('Please login to add items to cart.');
        showSection('login-section');
        return;
    }

    const mainProduct = currentProductInModal;
    const mainVariant = currentSelectedVariant; 

    if (!mainProduct || !mainVariant) {
        alert('Could not determine main product for "Add both to Cart".');
        return;
    }

    const itemsToAdd = [];
    itemsToAdd.push({ productId: mainProduct.id, variantId: mainVariant.id });
    const boughtTogetherItems = boughtTogetherData[mainProduct.id] || [];
    boughtTogetherItems.forEach(item => {
        itemsToAdd.push({ productId: item.productId, variantId: item.variantId });
    });

    let successCount = 0;
    let failureCount = 0;
    let outOfStockItems = [];

    itemsToAdd.forEach(itemInfo => {
        const product = productsData.find(p => p.id === itemInfo.productId);
        const variant = product?.variants.find(v => v.id === itemInfo.variantId);

        if (!product || !variant) {
            failureCount++;
            return;
        }

        if (variant.stock === 0) {
            outOfStockItems.push(`${product.name} (${variant.name})`);
            failureCount++;
            return;
        }

        const existingCartItem = cart.find(cartI => cartI.variantId === variant.id);
        if (existingCartItem) {
            if (existingCartItem.quantity < variant.stock) {
                existingCartItem.quantity++;
                successCount++;
            } else {
                outOfStockItems.push(`${product.name} (${variant.name}) - Max stock reached`);
                failureCount++;
            }
        } else {
            cart.push({
                productId: product.id,
                variantId: variant.id,
                name: product.name,
                variantName: variant.name,
                image: product.image || (variant.images[0] || 'https://via.placeholder.com/150/CCCCCC/FFFFFF?text=No+Image'),
                price: variant.price,
                quantity: 1
            });
            successCount++;
        }
    });

    saveCart();
    renderCart(); 

    let message = '';
    if (successCount > 0) {
        message += `${successCount} item(s) added to cart. `;
    }
    if (outOfStockItems.length > 0) {
        message += `Note: ${outOfStockItems.join(', ')} could not be added due to stock limits.`;
    }
    if (message) {
        alert(message.trim());
    } else {
        alert('No items were added to cart. Check stock and your cart.');
    }
    productDetailModal.classList.remove('active'); 
}

// --- Cart Logic ---
function handleAddToCartQuick(productId, variantId) {
    if (!currentUser) {
        alert('Please login to add items to cart.');
        showSection('login-section');
        return;
    }
    const product = productsData.find(p => p.id === productId);
    const variant = product?.variants.find(v => v.id === variantId);

    if (!product || !variant) {
        alert('Error: Product or variant not found.');
        return;
    }

    if (variant.stock === 0) {
        alert('Sorry, this item is out of stock!');
        return;
    }

    const existingCartItem = cart.find(item => item.variantId === variantId);

    if (existingCartItem) {
        if (existingCartItem.quantity < variant.stock) {
            existingCartItem.quantity++;
            alert(`Added another ${product.name} (${variant.name}) to cart.`);
        } else {
            alert(`You have reached maximum stock for ${product.name} (${variant.name}) in your cart.`);
        }
    } else {
        cart.push({
            productId: product.id,
            variantId: variant.id,
            name: product.name,
            variantName: variant.name,
            image: product.image || (variant.images[0] || 'https://via.placeholder.com/150/CCCCCC/FFFFFF?text=No+Image'),
            price: variant.price,
            quantity: 1
        });
        alert(`${product.name} (${variant.name}) added to cart!`);
    }
    saveCart();
}

function handleAddToCartModal() {
    if (!currentUser) {
        alert('Please login to add items to cart.');
        showSection('login-section');
        return;
    }
    if (!currentSelectedVariant) {
        alert('Please select a product variant first!');
        return;
    }

    const product = currentProductInModal;
    const variant = currentSelectedVariant;

    if (variant.stock === 0) {
        alert('Sorry, this item is out of stock!');
        return;
    }

    const existingCartItem = cart.find(item => item.variantId === variant.id);

    if (existingCartItem) {
        if (existingCartItem.quantity < variant.stock) {
            existingCartItem.quantity++;
            alert(`Added another ${product.name} (${variant.name}) to cart.`);
        } else {
            alert(`You have reached maximum stock for ${product.name} (${variant.name}) in your cart.`);
        }
    } else {
        cart.push({
            productId: product.id,
            variantId: variant.id,
            name: product.name,
            variantName: variant.name,
            image: product.image || (variant.images[0] || 'https://via.placeholder.com/150/CCCCCC/FFFFFF?text=No+Image'),
            price: variant.price,
            quantity: 1
        });
        alert(`${product.name} (${variant.name}) added to cart!`);
    }
    saveCart();
    productDetailModal.classList.remove('active'); 
}

function renderCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');
    let total = 0;

    cartItemsDiv.innerHTML = '';
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const productInStore = productsData.find(p => p.id === item.productId);
            const variantInStore = productInStore?.variants.find(v => v.id === item.variantId);
            const maxStock = variantInStore ? variantInStore.stock : item.quantity; 
            if (item.quantity > maxStock) {
                item.quantity = maxStock;
                alert(`Quantity for ${item.name} (${item.variantName}) adjusted to max available stock (${maxStock}).`);
            }

            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            cartItemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name} (${item.variantName})</h4>
                    <p>Price: ₹${item.price.toFixed(2)}</p>
                </div>
                <div class="cart-item-actions">
                    <input type="number" min="1" value="${item.quantity}" data-variant-id="${item.variantId}" class="cart-qty-input" max="${maxStock}">
                    <p>Subtotal: ₹${itemTotal.toFixed(2)}</p>
                    <button class="btn remove-from-cart-btn" data-variant-id="${item.variantId}">Remove</button>
                </div>
            `;
            cartItemsDiv.appendChild(cartItemDiv);
        });

        // Add event listeners for quantity change
        document.querySelectorAll('.cart-qty-input').forEach(input => {
            input.addEventListener('change', (e) => {
                const variantId = e.target.dataset.variantId;
                const newQuantity = parseInt(e.target.value);
                const cartItem = cart.find(item => item.variantId === variantId);
                const product = productsData.find(p => p.id === cartItem.productId);
                const variant = product?.variants.find(v => v.id === variantId);

                const maxStock = variant ? variant.stock : 0; 

                if (newQuantity <= 0) {
                    cart = cart.filter(item => item.variantId !== variantId);
                    alert(`${cartItem.name} removed from cart.`);
                } else if (newQuantity > maxStock) {
                    alert(`Cannot add more than available stock (${maxStock}) for ${cartItem.name}.`);
                    e.target.value = maxStock; 
                    cartItem.quantity = maxStock;
                } else {
                    cartItem.quantity = newQuantity;
                }
                saveCart();
                renderCart(); 
            });
        });

        // Add event listeners for remove button
        document.querySelectorAll('.remove-from-cart-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const variantId = e.target.dataset.variantId;
                const removedItem = cart.find(item => item.variantId === variantId);
                cart = cart.filter(item => item.variantId !== variantId);
                alert(`${removedItem.name} removed from cart.`);
                saveCart();
                renderCart();
            });
        });
    }
    cartTotalSpan.textContent = total.toFixed(2);
}
// --- 6. Checkout & Payment (Mock) ---
const checkoutBtn = document.getElementById('checkout-btn');
const placeOrderBtn = document.getElementById('place-order-btn');
const paymentMethodSelect = document.getElementById('payment-method');
const cardDetailsFields = document.getElementById('card-details-fields');
const upiDetailsFields = document.getElementById('upi-details-fields');
const checkoutOrderSummaryList = document.getElementById('checkout-order-summary');
const checkoutTotalSpan = document.getElementById('checkout-total');
const checkoutMessage = document.getElementById('checkout-message');

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty. Please add items before proceeding to checkout.');
        return;
    }
    if (!currentUser) {
        alert('Please login to proceed to checkout.');
        showSection('login-section'); 
        return;
    }
    renderCheckoutSummary();
    checkoutMessage.textContent = ''; 
    showSection('checkout-section');
});

paymentMethodSelect.addEventListener('change', (e) => {
    cardDetailsFields.style.display = 'none';
    upiDetailsFields.style.display = 'none';
    if (e.target.value === 'card') {
        cardDetailsFields.style.display = 'block';
    } else if (e.target.value === 'upi') {
        upiDetailsFields.style.display = 'block';
    }
});

function renderCheckoutSummary() {
    checkoutOrderSummaryList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${item.name} (${item.variantName}) x ${item.quantity}</span>
            <span>₹${itemTotal.toFixed(2)}</span>
        `;
        checkoutOrderSummaryList.appendChild(listItem);
    });
    checkoutTotalSpan.textContent = total.toFixed(2);
    let finalTotal = total;
    const generalOffers = offersData.filter(offer => offer.appliesToProductId === undefined && offer.appliesToCategory === undefined);
    generalOffers.forEach(offer => {
        if (offer.type === 'fixedAmount' && total >= offer.minimumOrderValue) {
            finalTotal -= offer.value;
            const discountItem = document.createElement('li');
            discountItem.innerHTML = `
                <span style="color: red;">${offer.name} Discount</span>
                <span style="color: red;">- ₹${offer.value.toFixed(2)}</span>
            `;
            checkoutOrderSummaryList.appendChild(discountItem);
        }
    });
    checkoutTotalSpan.textContent = Math.max(0, finalTotal).toFixed(2); 
}

// ... (your existing script.js code) ...

placeOrderBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        checkoutMessage.className = 'message error';
        checkoutMessage.textContent = 'Your cart is empty.';
        return;
    }
    if (!currentUser) {
        checkoutMessage.className = 'message error';
        checkoutMessage.textContent = 'Please login before placing order.';
        return;
    }

    const paymentMethod = paymentMethodSelect.value;
    if (paymentMethod === 'card') {
        const cardNumber = document.getElementById('card-number').value.replace(/\s/g, '');
        const cardExpiry = document.getElementById('card-expiry').value;
        const cardCvv = document.getElementById('card-cvv').value;
        if (!cardNumber || !cardExpiry || !cardCvv) {
            checkoutMessage.className = 'message error';
            checkoutMessage.textContent = 'Please fill all card details.';
            return;
        }
        // Basic validation for card number length and digits
        if (cardNumber.length < 16 || isNaN(cardNumber)) {
            checkoutMessage.className = 'message error';
            checkoutMessage.textContent = 'Invalid card number. Must be 16 digits.';
            return;
        }
        // Basic validation for expiry date format and future date
        const [month, year] = cardExpiry.split('/');
        const currentYear = new Date().getFullYear() % 100; // Get last two digits of current year
        const currentMonth = new Date().getMonth() + 1; // Get current month (1-12)

        if (!month || !year || isNaN(month) || isNaN(year) || month < 1 || month > 12 || year < currentYear || (year === currentYear && month < currentMonth)) {
            checkoutMessage.className = 'message error';
            checkoutMessage.textContent = 'Invalid expiry date. Must be MM/YY and a future date.';
            return;
        }
        // Basic validation for CVV
        if (cardCvv.length !== 3 || isNaN(cardCvv)) {
            checkoutMessage.className = 'message error';
            checkoutMessage.textContent = 'Invalid CVV. Must be 3 digits.';
            return;
        }

    } else if (paymentMethod === 'upi') {
        const upiId = document.getElementById('upi-id').value.trim();
        if (!upiId) {
            checkoutMessage.className = 'message error';
            checkoutMessage.textContent = 'Please enter UPI ID.';
            return;
        }
        // Basic UPI ID format validation
        if (!/^[a-zA-Z0-9\.\-]+@[a-zA-Z0-9\-]+$/.test(upiId)) {
            checkoutMessage.className = 'message error';
            checkoutMessage.textContent = 'Invalid UPI ID format.';
            return;
        }
    }

    // Disable the place order button to prevent multiple clicks
    placeOrderBtn.disabled = true;
    checkoutMessage.className = 'message info'; // Use 'info' for a neutral processing message
    checkoutMessage.textContent = 'Processing your order... Please wait.';

    // Simulate a network request delay (e.g., 2-3 seconds)
    setTimeout(() => {
        const isSuccess = Math.random() > 0.1; // 90% chance of success

        if (isSuccess) {
            checkoutMessage.className = 'message success';
            const orderId = `ORD${Date.now().toString().slice(-8)}`; // Generate a simple unique order ID
            checkoutMessage.textContent = `Order placed successfully! Your Order ID is ${orderId}.`;

            // Clear the cart and save
            cart = [];
            saveCart(); // This also updates the cart count in the header

            // Start the mock order tracking
            startMockOrderTracking(orderId);

            // Redirect to tracking section after a short delay
            setTimeout(() => {
                checkoutMessage.textContent = ''; // Clear message before redirect
                showSection('order-tracking-section');
                // Re-enable the button if the user navigates back later,
                // or if you want to reset the form for a new order
                placeOrderBtn.disabled = false;
            }, 3000); // Wait 3 seconds to show success message before redirecting
        } else {
            checkoutMessage.className = 'message error';
            checkoutMessage.textContent = 'Payment failed. Please try again or choose a different method.';
            placeOrderBtn.disabled = false; // Re-enable button on failure
        }
    }, 2000); // Simulate a 2-second processing delay



    checkoutMessage.className = 'message';
    checkoutMessage.textContent = 'Processing your order...';

    // Simulate API call delay
    setTimeout(() => {
        const isSuccess = Math.random() > 0.1; 

        if (isSuccess) {
            checkoutMessage.className = 'message success';
            const orderId = `ORD${Date.now().toString().slice(-8)}`;
            checkoutMessage.textContent = `Order placed successfully! Your Order ID is ${orderId}.`;
            cart = [];
            saveCart();
            renderCart(); 
            startMockOrderTracking(orderId);
            setTimeout(() => {
                checkoutMessage.textContent = '';
                showSection('order-tracking-section'); 
            }, 3000);
        } else {
            checkoutMessage.className = 'message error';
            checkoutMessage.textContent = 'Payment failed. Please try again.';
        }
    }, 2000);
});


// --- 3. Real-time Order Tracking (Mock) ---
const orderIdInput = document.getElementById('order-id-input');
const trackOrderBtn = document.getElementById('track-order-btn');
const currentOrderStatusSpan = document.getElementById('current-order-status');
const orderHistoryList = document.getElementById('order-history-list');

let mockOrderInterval = null;
let mockTrackingHistory = [];

trackOrderBtn.addEventListener('click', () => {
    const orderId = orderIdInput.value.trim();
    if (orderId) {
        startMockOrderTracking(orderId);
    } else {
        alert('Please enter an Order ID.');
    }
});

function startMockOrderTracking(orderId) {
    if (mockOrderInterval) {
        clearInterval(mockOrderInterval); 
    }
    mockTrackingHistory = []; 
    orderHistoryList.innerHTML = ''; 
    currentOrderStatusSpan.textContent = 'Initiating tracking...';
    currentOrderStatusSpan.style.color = '#007bff'; 

    const statuses = ['Pending', 'Confirmed', 'Preparing for Dispatch', 'Shipped', 'Out for Delivery', 'Delivered'];
    let statusIndex = 0;
    function updateStatus() {
        if (statusIndex < statuses.length) {
            const status = statuses[statusIndex];
            const timestamp = new Date().toLocaleTimeString('en-IN'); 
            currentOrderStatusSpan.textContent = status;
            mockTrackingHistory.push({ status, timestamp });
            const listItem = document.createElement('li');
            listItem.textContent = `${timestamp}: ${status}`;
            orderHistoryList.prepend(listItem); 
            if (status === 'Delivered') {
                clearInterval(mockOrderInterval);
                currentOrderStatusSpan.style.color = 'green';
            }
            statusIndex++;
        }
    }
    updateStatus(); 
    mockOrderInterval = setInterval(updateStatus, 5000); 
}