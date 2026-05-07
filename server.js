const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ===== MIDDLEWARE =====
app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:5500', '*'],
    credentials: true
}));
app.use(express.json());
app.use(express.static('../frontend')); // Serve frontend files

// ===== DATABASE CONNECTION =====
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/foodelicious';

mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.log('❌ MongoDB Error:', err.message));

// ===== ROUTES =====
app.use('/api/restaurants', require('./routes/restaurants'));
app.use('/api/menu',        require('./routes/menu'));
app.use('/api/cart',        require('./routes/cart'));
app.use('/api/orders',      require('./routes/orders'));
app.use('/api/users',       require('./routes/users'));

// ===== ROOT ROUTE =====
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: '../frontend' });
});

// ===== ERROR HANDLER =====
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: 'Server Error', error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Foodelicious server running on http://localhost:${PORT}`);
});
