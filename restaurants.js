// ========== RESTAURANT DATA (20+ Restaurants) ==========
const restaurants = [
    // Street Food
    {
        id: 1,
        name: "Sharma Ji Ki Kachori",
        cuisine: "Street Food • Kachori",
        category: "street-food",
        rating: 4.5,
        reviewCount: 342,
        location: "Old Delhi, Near Chandni Chowk",
        deliveryTime: "25-35 min",
        deliveryFee: 20,
        image: "https://images.unsplash.com/photo-1625937287334-9c5bd9e59003?w=400&h=250&fit=crop"
    },
    {
        id: 2,
        name: "Bombay Chaiwala",
        cuisine: "Cafe • Street Food",
        category: "street-food",
        rating: 4.3,
        reviewCount: 218,
        location: "Connaught Place",
        deliveryTime: "20-30 min",
        deliveryFee: 15,
        image: "https://images.unsplash.com/photo-1567925084989-9d6f2f5f8b4a?w=400&h=250&fit=crop"
    },
    {
        id: 3,
        name: "Gangaram Chaat Bhandar",
        cuisine: "Street Food • Chaat",
        category: "street-food",
        rating: 4.8,
        reviewCount: 789,
        location: "Chandni Chowk",
        deliveryTime: "30-40 min",
        deliveryFee: 20,
        image: "https://images.unsplash.com/photo-1606491956689-2ea11e9e9f8c?w=400&h=250&fit=crop"
    },
    {
        id: 4,
        name: "Kuremal Mohan Lal Kulfi",
        cuisine: "Street Food • Dessert",
        category: "street-food",
        rating: 4.7,
        reviewCount: 456,
        location: "Chawri Bazar, Delhi",
        deliveryTime: "20-30 min",
        deliveryFee: 15,
        image: "https://images.unsplash.com/photo-1584278860047-22db9ff82e5c?w=400&h=250&fit=crop"
    },
    {
        id: 5,
        name: "Jain Chaat Bhandar",
        cuisine: "Street Food • Chaat",
        category: "street-food",
        rating: 4.4,
        reviewCount: 234,
        location: "Lajpat Nagar",
        deliveryTime: "20-30 min",
        deliveryFee: 15,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=250&fit=crop"
    },
    {
        id: 6,
        name: "Bittu Tikki Wala",
        cuisine: "Street Food • Tikki",
        category: "street-food",
        rating: 4.6,
        reviewCount: 567,
        location: "Karol Bagh",
        deliveryTime: "25-35 min",
        deliveryFee: 20,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=250&fit=crop"
    },

    // Punjabi
    {
        id: 7,
        name: "Amritsari Kulcha Hut",
        cuisine: "Punjabi • Kulcha",
        category: "punjabi",
        rating: 4.6,
        reviewCount: 456,
        location: "Rajouri Garden",
        deliveryTime: "30-40 min",
        deliveryFee: 25,
        image: "https://images.unsplash.com/photo-1597223557154-721c1cecc4bc?w=400&h=250&fit=crop"
    },
    {
        id: 8,
        name: "Biryani Baigan",
        cuisine: "Mughlai • Biryani",
        category: "punjabi",
        rating: 4.7,
        reviewCount: 634,
        location: "Jamia Nagar",
        deliveryTime: "35-45 min",
        deliveryFee: 30,
        image: "https://images.unsplash.com/photo-1563379091339-03b21a4c7e77?w=400&h=250&fit=crop"
    },
    {
        id: 9,
        name: "Paratha Junction",
        cuisine: "North Indian • Paratha",
        category: "punjabi",
        rating: 4.3,
        reviewCount: 245,
        location: "Kamla Nagar",
        deliveryTime: "25-35 min",
        deliveryFee: 20,
        image: "https://images.unsplash.com/photo-1625943553852-781c0dd4c7c5?w=400&h=250&fit=crop"
    },
    {
        id: 10,
        name: "Kesar Da Dhaba",
        cuisine: "Punjabi • Dhaba",
        category: "punjabi",
        rating: 4.5,
        reviewCount: 789,
        location: "Amritsar (Delivery in Delhi)",
        deliveryTime: "40-50 min",
        deliveryFee: 35,
        image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=400&h=250&fit=crop"
    },
    {
        id: 11,
        name: "Butter Chicken Factory",
        cuisine: "Mughlai • Butter Chicken",
        category: "punjabi",
        rating: 4.6,
        reviewCount: 892,
        location: "Connaught Place",
        deliveryTime: "30-40 min",
        deliveryFee: 25,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=250&fit=crop"
    },
    {
        id: 12,
        name: "Pind Balluchi",
        cuisine: "Punjabi • Rural Theme",
        category: "punjabi",
        rating: 4.4,
        reviewCount: 567,
        location: "Rajouri Garden",
        deliveryTime: "35-45 min",
        deliveryFee: 30,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=250&fit=crop"
    },

    // South Indian
    {
        id: 13,
        name: "Madhuram Sweets",
        cuisine: "South Indian • Sweets",
        category: "south-indian",
        rating: 4.4,
        reviewCount: 389,
        location: "Lajpat Nagar",
        deliveryTime: "25-35 min",
        deliveryFee: 20,
        image: "https://images.unsplash.com/photo-1589301760014-2c6fc4f4c8f6?w=400&h=250&fit=crop"
    },
    {
        id: 14,
        name: "Sagar Ratna",
        cuisine: "South Indian • Vegetarian",
        category: "south-indian",
        rating: 4.5,
        reviewCount: 678,
        location: "Defence Colony",
        deliveryTime: "25-35 min",
        deliveryFee: 20,
        image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=250&fit=crop"
    },
    {
        id: 15,
        name: "Naivedyam",
        cuisine: "South Indian • Authentic",
        category: "south-indian",
        rating: 4.6,
        reviewCount: 445,
        location: "Hauz Khas",
        deliveryTime: "30-40 min",
        deliveryFee: 25,
        image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=250&fit=crop"
    },
    {
        id: 16,
        name: "Dosa Plaza",
        cuisine: "South Indian • Fusion",
        category: "south-indian",
        rating: 4.2,
        reviewCount: 345,
        location: "Vasant Kunj",
        deliveryTime: "25-35 min",
        deliveryFee: 20,
        image: "https://images.unsplash.com/photo-1589301760014-2c6fc4f4c8f6?w=400&h=250&fit=crop"
    },

    // Chinese
    {
        id: 17,
        name: "Momos Point",
        cuisine: "Chinese • Tibetan",
        category: "chinese",
        rating: 4.5,
        reviewCount: 567,
        location: "Hauz Khas",
        deliveryTime: "20-30 min",
        deliveryFee: 15,
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=250&fit=crop"
    },
    {
        id: 18,
        name: "Mainland China",
        cuisine: "Chinese • Fine Dining",
        category: "chinese",
        rating: 4.7,
        reviewCount: 892,
        location: "Select Citywalk, Saket",
        deliveryTime: "35-45 min",
        deliveryFee: 35,
        image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=250&fit=crop"
    },
    {
        id: 19,
        name: "Bercos",
        cuisine: "Chinese • Indo-Chinese",
        category: "chinese",
        rating: 4.4,
        reviewCount: 567,
        location: "Connaught Place",
        deliveryTime: "30-40 min",
        deliveryFee: 25,
        image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=250&fit=crop"
    },
    {
        id: 20,
        name: "Yo! China",
        cuisine: "Chinese • Quick Service",
        category: "chinese",
        rating: 4.3,
        reviewCount: 456,
        location: "Rajouri Garden",
        deliveryTime: "25-35 min",
        deliveryFee: 20,
        image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=250&fit=crop"
    },
    {
        id: 21,
        name: "Wow! Momo",
        cuisine: "Chinese • Momos",
        category: "chinese",
        rating: 4.4,
        reviewCount: 789,
        location: "Multiple Locations",
        deliveryTime: "20-30 min",
        deliveryFee: 15,
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=250&fit=crop"
    },
    {
        id: 22,
        name: "KFC",
        cuisine: "Fast Food • Chinese",
        category: "chinese",
        rating: 4.2,
        reviewCount: 1234,
        location: "Connaught Place",
        deliveryTime: "20-30 min",
        deliveryFee: 25,
        image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=400&h=250&fit=crop"
    }
];

// ========== DOM ELEMENTS ==========
const restaurantsGrid = document.getElementById('restaurantsGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterBtns = document.querySelectorAll('.filter-btn');

// ========== STATE ==========
let currentFilter = 'all';
let currentSearch = '';

// ========== RENDER FUNCTION ==========
function renderRestaurants() {
    let filtered = [...restaurants];
    
    // Apply filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(r => r.category === currentFilter);
    }
    
    // Apply search
    if (currentSearch.trim()) {
        const searchTerm = currentSearch.toLowerCase();
        filtered = filtered.filter(r => 
            r.name.toLowerCase().includes(searchTerm) ||
            r.cuisine.toLowerCase().includes(searchTerm)
        );
    }
    
    // No results
    if (filtered.length === 0) {
        restaurantsGrid.innerHTML = '<div class="no-results">😕 No restaurants found. Try another search!</div>';
        return;
    }
    
    // Render cards
    restaurantsGrid.innerHTML = filtered.map(restro => `
        <a href="menu.html?id=${restro.id}" class="restro-card">
            <img src="${restro.image}" alt="${restro.name}" class="restro-image">
            <div class="restro-info">
                <h3 class="restro-name">${restro.name}</h3>
                <p class="restro-cuisine">${restro.cuisine}</p>
                <div class="restro-rating">
                    <span class="star">★</span>
                    <span class="rating-value">${restro.rating}</span>
                    <span class="review-count">(${restro.reviewCount} reviews)</span>
                </div>
                <div class="restro-location">📍 ${restro.location}</div>
                <div class="restro-delivery">🚚 ${restro.deliveryTime} • ₹${restro.deliveryFee} delivery</div>
            </div>
        </a>
    `).join('');
}

// ========== EVENT LISTENERS ==========
searchBtn.addEventListener('click', () => {
    currentSearch = searchInput.value;
    renderRestaurants();
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        currentSearch = searchInput.value;
        renderRestaurants();
    }
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderRestaurants();
    });
});

// ========== CART FUNCTIONS (Complete) ==========

// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Update cart count in header
function updateCartCount() {
    const cartCountElements = document.querySelectorAll('#cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElements.forEach(el => {
        if (el) el.textContent = totalItems;
    });
}

// Add item to cart
function addToCart(restaurant) {
    const existing = cart.find(item => item.id === restaurant.id);
    
    if (existing) {
        existing.quantity++;
        showToast(`${restaurant.name} quantity increased to ${existing.quantity}`);
    } else {
        cart.push({ 
            id: restaurant.id,
            name: restaurant.name,
            price: restaurant.price,
            quantity: 1,
            image: restaurant.image,
            location: restaurant.location,
            deliveryFee: restaurant.deliveryFee,
            deliveryTime: restaurant.deliveryTime
        });
        showToast(`${restaurant.name} added to cart! 🎉`);
    }
    
    saveCart();
}

// Remove item completely from cart
function removeFromCart(id) {
    const item = cart.find(i => i.id === id);
    if (item) {
        cart = cart.filter(item => item.id !== id);
        saveCart();
        showToast(`${item.name} removed from cart`);
        if (window.location.pathname.includes('cart.html')) {
            displayCartItems();
        }
    }
}

// Update quantity (increase/decrease)
function updateQuantity(id, change) {
    const itemIndex = cart.findIndex(i => i.id === id);
    
    if (itemIndex !== -1) {
        const newQuantity = cart[itemIndex].quantity + change;
        
        if (newQuantity <= 0) {
            removeFromCart(id);
        } else {
            cart[itemIndex].quantity = newQuantity;
            saveCart();
            if (window.location.pathname.includes('cart.html')) {
                displayCartItems();
            }
        }
    }
}

// Clear entire cart
function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        saveCart();
        if (window.location.pathname.includes('cart.html')) {
            displayCartItems();
        }
        showToast('Cart cleared');
    }
}

// Get cart total amount
function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Display cart items on cart page
function displayCartItems() {
    const container = document.getElementById('cartItemsContainer');
    const totalContainer = document.getElementById('cartTotal');
    
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                🛒 Your cart is empty!
                <br><br>
                <a href="restaurants.html" class="browse-btn">Browse Restaurants</a>
            </div>
        `;
        if (totalContainer) totalContainer.innerHTML = '';
        return;
    }
    
    let subtotal = 0;
    let totalDelivery = 0;
    
    container.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        totalDelivery += item.deliveryFee;
        
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/80x80?text=Food'">
                
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p class="item-price">₹${item.price} each</p>
                    <p class="item-location">📍 ${item.location}</p>
                    <p class="item-delivery">🚚 Delivery: ₹${item.deliveryFee} • ⏱️ ${item.deliveryTime}</p>
                </div>
                
                <div class="cart-item-actions">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                    <span class="qty-number">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">🗑️ Remove</button>
                </div>
                
                <div class="cart-item-total">
                    ₹${itemTotal}
                </div>
            </div>
        `;
    }).join('');
    
    const grandTotal = subtotal + totalDelivery;
    
    if (totalContainer) {
        totalContainer.innerHTML = `
            <div class="cart-summary">
                <h3>Order Summary</h3>
                <div class="summary-row">
                    <span>Subtotal (${cart.reduce((s,i) => s + i.quantity, 0)} items)</span>
                    <span>₹${subtotal}</span>
                </div>
                <div class="summary-row">
                    <span>Delivery Charges</span>
                    <span>₹${totalDelivery}</span>
                </div>
                <div class="summary-row total">
                    <span>Total Amount</span>
                    <span>₹${grandTotal}</span>
                </div>
                <button class="place-order-btn" onclick="placeOrder()">
                    🍽️ Place Order • ₹${grandTotal}
                </button>
                <button class="clear-cart-btn" onclick="clearCart()">
                    🗑️ Clear Cart
                </button>
            </div>
        `;
    }
}

// Place order function
function placeOrder() {
    if (cart.length === 0) {
        alert('❌ Your cart is empty! Add some items first.');
        return;
    }
    
    const orderId = 'ORD' + Date.now();
    const total = getCartTotal() + cart.reduce((sum, i) => sum + i.deliveryFee, 0);
    
    const order = {
        orderId: orderId,
        items: [...cart],
        subtotal: getCartTotal(),
        deliveryFee: cart.reduce((sum, i) => sum + i.deliveryFee, 0),
        total: total,
        timestamp: new Date().toLocaleString(),
        status: 'Confirmed'
    };
    
    // Save to order history
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Clear cart
    cart = [];
    saveCart();
    
    // Show success message
    alert(`✅ ORDER PLACED SUCCESSFULLY!\n\nOrder ID: ${orderId}\nTotal: ₹${total}\n\nYour food will arrive in 30-40 minutes. 🍕\n\nThank you for ordering with Foodelicious!`);
    
    // Refresh cart page if on cart page
    if (window.location.pathname.includes('cart.html')) {
        displayCartItems();
    } else {
        // Optional: redirect to cart page
        window.location.href = 'cart.html';
    }
}

// Show notification toast
function showToast(message) {
    // Check if toast container exists
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 9999;
        `;
        document.body.appendChild(toastContainer);
    }
    
    const toast = document.createElement('div');
    toast.style.cssText = `
        background: #4caf50;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        margin-top: 10px;
        animation: slideIn 0.3s ease;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        cursor: pointer;
    `;
    toast.textContent = message;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// Add animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    if (document.getElementById('cartItemsContainer')) {
        displayCartItems();
    }
});