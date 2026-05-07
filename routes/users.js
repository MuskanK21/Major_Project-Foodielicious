const express = require('express');
const router  = express.Router();
const User    = require('../models/User');
const crypto  = require('crypto');

function generateToken(userId) {
    // Simple token — production mein JWT use karo (npm install jsonwebtoken)
    return crypto.createHash('sha256').update(userId + Date.now()).digest('hex');
}

// POST /api/users/register — Naya account banao
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: 'Naam, email aur password zaroori hai' });
        }

        const exists = await User.findOne({ email });
        if (exists) {
            return res.status(400).json({ success: false, message: 'Yeh email pehle se registered hai' });
        }

        const user = await User.create({ name, email, password, phone });
        const token = generateToken(user._id.toString());

        res.status(201).json({
            success: true,
            message: 'Account ban gaya! 🎉',
            data: { _id: user._id, name: user.name, email: user.email, token }
        });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});

// POST /api/users/login — Login karo
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user || !user.matchPassword(password)) {
            return res.status(401).json({ success: false, message: 'Email ya password galat hai' });
        }

        const token = generateToken(user._id.toString());
        res.json({
            success: true,
            message: 'Login ho gaye! 🎉',
            data: { _id: user._id, name: user.name, email: user.email, token }
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// GET /api/users/profile/:id — Profile dekho
router.get('/profile/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) return res.status(404).json({ success: false, message: 'User nahi mila' });
        res.json({ success: true, data: user });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// PUT /api/users/profile/:id — Profile update karo
router.put('/profile/:id', async (req, res) => {
    try {
        const { name, phone, address } = req.body;
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { name, phone, address },
            { new: true }
        ).select('-password');
        res.json({ success: true, data: user, message: 'Profile update ho gayi' });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
});

module.exports = router;
