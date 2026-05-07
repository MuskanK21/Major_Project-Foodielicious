const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// POST /api/orders — Naya order place karo
router.post('/', async (req, res) => {
    try {
        const { items, restaurantId, restaurantName, deliveryFee, userId, deliveryAddress } = req.body;

        if (!items || items.length === 0) {
            return res.status(400).json({ success: false, message: 'Cart khali hai!' });
        }

        const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const total = subtotal + (deliveryFee || 0);

        const order = await Order.create({
            userId:          userId || 'guest',
            restaurantId,
            restaurantName,
            items,
            subtotal,
            deliveryFee:     deliveryFee || 0,
            total,
            deliveryAddress: deliveryAddress || '',
        });

        res.status(201).json({ success: true, data: order, message: 'Order place ho gaya! 🎉' });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});

// GET /api/orders — Sabhi orders (user ke liye)
router.get('/', async (req, res) => {
    try {
        const { userId } = req.query;
        const filter = userId ? { userId } : {};
        const orders = await Order.find(filter).sort({ createdAt: -1 });
        res.json({ success: true, data: orders });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// GET /api/orders/:id — Ek order ki detail
router.get('/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ success: false, message: 'Order nahi mila' });
        res.json({ success: true, data: order });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// GET /api/orders/by-orderid/:orderId — orderId se dhundho
router.get('/by-orderid/:orderId', async (req, res) => {
    try {
        const order = await Order.findOne({ orderId: req.params.orderId });
        if (!order) return res.status(404).json({ success: false, message: 'Order nahi mila' });
        res.json({ success: true, data: order });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// PUT /api/orders/:id/status — Order status update karo
router.put('/:id/status', async (req, res) => {
    try {
        const { status } = req.body;
        const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
        if (!order) return res.status(404).json({ success: false, message: 'Order nahi mila' });
        res.json({ success: true, data: order, message: `Status update: ${status}` });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});

module.exports = router;
