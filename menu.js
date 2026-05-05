// ========== RESTAURANT DATA WITH MENU ITEMS ==========
const restaurantsWithMenu = {
    1: {  // Sharma Ji Ki Kachori
        name: "Sharma Ji Ki Kachori",
        image: "https://images.unsplash.com/photo-1625937287334-9c5bd9e59003?w=400&h=250&fit=crop",
        location: "Old Delhi, Near Chandni Chowk",
        rating: 4.5,
        deliveryFee: 20,
        deliveryTime: "25-35 min",
        menu: [
            { id: 101, name: "Pyaz Kachori", price: 80, description: "Crispy kachori with onion filling", isVeg: true },
            { id: 102, name: "Aloo Kachori", price: 70, description: "Potato stuffed kachori", isVeg: true },
            { id: 103, name: "Samosa", price: 25, description: "Crispy triangular snack", isVeg: true },
            { id: 104, name: "Jalebi", price: 60, description: "Sweet spiral shaped dessert", isVeg: true },
            { id: 105, name: "Chai", price: 20, description: "Masala tea", isVeg: true }
        ]
    },
    2: {  // Bombay Chaiwala
        name: "Bombay Chaiwala",
        image: "https://images.unsplash.com/photo-1567925084989-9d6f2f5f8b4a?w=400&h=250&fit=crop",
        location: "Connaught Place",
        rating: 4.3,
        deliveryFee: 15,
        deliveryTime: "20-30 min",
        menu: [
            { id: 201, name: "Masala Chai", price: 25, description: "Spiced tea", isVeg: true },
            { id: 202, name: "Vada Pav", price: 40, description: "Mumbai special burger", isVeg: true },
            { id: 203, name: "Pav Bhaji", price: 90, description: "Mixed vegetable curry with bread", isVeg: true },
            { id: 204, name: "Bun Maska", price: 35, description: "Butter bread with chai", isVeg: true },
            { id: 205, name: "Cutting Chai", price: 15, description: "Small strong tea", isVeg: true }
        ]
    },
    3: {  // Gangaram Chaat Bhandar
        name: "Gangaram Chaat Bhandar",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=250&fit=crop",
        location: "Chandni Chowk",
        rating: 4.8,
        deliveryFee: 20,
        deliveryTime: "30-40 min",
        menu: [
            { id: 301, name: "Aloo Tikki", price: 50, description: "Crispy potato patty with chutney", isVeg: true },
            { id: 302, name: "Gol Gappe", price: 40, description: "6 pieces with spicy water", isVeg: true },
            { id: 303, name: "Papdi Chaat", price: 60, description: "Crispy papdi with yogurt", isVeg: true },
            { id: 304, name: "Dahi Bhalla", price: 55, description: "Lentil dumplings in yogurt", isVeg: true },
            { id: 305, name: "Chole Bhature", price: 90, description: "Spicy chickpeas with fried bread", isVeg: true }
        ]
    },
    4: {  // Pind Balluchi
        name: "Pind Balluchi",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=250&fit=crop",
        location: "Rajouri Garden",
        rating: 4.6,
        deliveryFee: 30,
        deliveryTime: "35-45 min",
        menu: [
            { id: 401, name: "Butter Chicken", price: 350, description: "Creamy tomato based curry", isVeg: false },
            { id: 402, name: "Dal Makhani", price: 220, description: "Black lentils slow cooked", isVeg: true },
            { id: 403, name: "Naan", price: 40, description: "Tandoor baked bread", isVeg: true },
            { id: 404, name: "Paneer Tikka", price: 280, description: "Grilled cottage cheese", isVeg: true },
            { id: 405, name: "Gulab Jamun", price: 80, description: "Sweet milk dumplings", isVeg: true }
        ]
    }
};

// Get restaurant id from URL
function getRestaurantId() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'));
}

// Load restaurant info and menu
function loadRestaurantMenu() {
    const restaurantId = getRestaurantId();
    const restaurant = restaurantsWithMenu[restaurantId];
    
    if (!restaurant) {
        window.location.href = 'restaurants.html';
        return;
    }
    
    // Display restaurant header
    document.getElementById('restaurantHeader').innerHTML = `
        <div class="container">
            <div class="restaurant-info-header">
                <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-banner-img">
                <div class="restaurant-info-text">
                    <h1>${restaurant.name}</h1>
                    <p>⭐ ${restaurant.rating} | 📍 ${restaurant.location}</p>
                    <p>⏱️ ${restaurant.deliveryTime} | 🚚 ₹${restaurant.deliveryFee} delivery</p>
                </div>
            </div>
        </div>
    `;
    
    // Display menu items
    const container = document.getElementById('menuItemsContainer');
    container.innerHTML = restaurant.menu.map(item => `
        <div class="menu-card">
            <div class="menu-card-content">
                <div class="menu-info">
                    <h3>${item.name}</h3>
                    <p class="menu-description">${item.description}</p>
                    <p class="menu-price">₹${item.price}</p>
                    ${item.isVeg ? '<span class="veg-badge">🌱 Veg</span>' : '<span class="nonveg-badge">🍖 Non-Veg</span>'}
                </div>
                <button class="add-to-cart-menu-btn" onclick='addToCartMenu({
                    id: ${item.id},
                    name: "${item.name}",
                    price: ${item.price},
                    restaurantName: "${restaurant.name}",
                    restaurantId: ${restaurantId},
                    image: "${restaurant.image}",
                    deliveryFee: ${restaurant.deliveryFee},
                    deliveryTime: "${restaurant.deliveryTime}"
                })'>
                    🛒 Add to Cart • ₹${item.price}
                </button>
            </div>
        </div>
    `).join('');
}

// Add to cart from menu page
function addToCartMenu(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const existing = cart.find(cartItem => cartItem.id === item.id);
    
    if (existing) {
        existing.quantity++;
        showToast(`${item.name} quantity increased to ${existing.quantity}`);
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: 1,
            restaurantName: item.restaurantName,
            image: item.image,
            deliveryFee: item.deliveryFee,
            deliveryTime: item.deliveryTime
        });
        showToast(`${item.name} added to cart! 🎉`);
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Show toast notification
function showToast(message) {
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
    `;
    toast.textContent = message;
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// Update cart count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('#cartCount');
    cartCountElements.forEach(el => {
        if (el) el.textContent = totalItems;
    });
}

// Load when page opens
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    loadRestaurantMenu();
});