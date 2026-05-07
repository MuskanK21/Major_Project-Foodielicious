const express = require('express');
const router  = express.Router();

// In-memory cart store (production mein Redis use karo)
// Key: sessionId, Value: cart array
const cartStore = {};

function getCart(sessionId) {
    return cartStore[sessionId] || [];
}
function saveCart(sessionId, cart) {
    cartStore[sessionId] = cart;
}

// GET /api/cart/:sessionId
router.get('/:sessionId', (req, res) => {
    const cart = getCart(req.params.sessionId);
    const total = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    res.json({ success: true, data: cart, total });
});

// POST /api/cart/:sessionId — Item add karo
router.post('/:sessionId', (req, res) => {
    const { id, name, price, isVeg, restaurantId, restaurantName, image } = req.body;
    let cart = getCart(req.params.sessionId);

    const existing = cart.find(i => i.id === id);
    if (existing) {
        existing.quantity++;
        saveCart(req.params.sessionId, cart);
        return res.json({ success: true, message: `${name} ki quantity badh gayi`, data: cart });
    }

    cart.push({ id, name, price, quantity: 1, isVeg, restaurantId, restaurantName, image });
    saveCart(req.params.sessionId, cart);
    res.status(201).json({ success: true, message: `${name} cart mein add ho gaya! 🎉`, data: cart });
});

// PUT /api/cart/:sessionId/:itemId — Quantity update karo
router.put('/:sessionId/:itemId', (req, res) => {
    const { quantity } = req.body;
    let cart = getCart(req.params.sessionId);
    const itemId = parseInt(req.params.itemId);

    const item = cart.find(i => i.id === itemId);
    if (!item) return res.status(404).json({ success: false, message: 'Item nahi mila' });

    if (quantity <= 0) {
        cart = cart.filter(i => i.id !== itemId);
    } else {
        item.quantity = quantity;
    }

    saveCart(req.params.sessionId, cart);
    res.json({ success: true, data: cart });
});

// DELETE /api/cart/:sessionId/:itemId — Item hataao
router.delete('/:sessionId/:itemId', (req, res) => {
    let cart = getCart(req.params.sessionId);
    cart = cart.filter(i => i.id !== parseInt(req.params.itemId));
    saveCart(req.params.sessionId, cart);
    res.json({ success: true, message: 'Item hata diya', data: cart });
});

// DELETE /api/cart/:sessionId — Pura cart clear karo
router.delete('/:sessionId', (req, res) => {
    saveCart(req.params.sessionId, []);
    res.json({ success: true, message: 'Cart saaf ho gaya' });
});

module.exports = router;
