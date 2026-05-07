const mongoose = require('mongoose');

const OrderItemSchema = new mongoose.Schema({
    menuItemId:  { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
    name:        { type: String, required: true },
    price:       { type: Number, required: true },
    quantity:    { type: Number, required: true },
});

const OrderSchema = new mongoose.Schema({
    orderId:        { type: String, unique: true },
    userId:         { type: String, default: 'guest' },
    restaurantId:   { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
    restaurantName: { type: String },
    items:          [OrderItemSchema],
    subtotal:       { type: Number, required: true },
    deliveryFee:    { type: Number, required: true },
    total:          { type: Number, required: true },
    status:         { type: String, enum: ['placed', 'confirmed', 'preparing', 'out_for_delivery', 'delivered', 'cancelled'], default: 'placed' },
    paymentMethod:  { type: String, default: 'Cash on Delivery' },
    deliveryAddress:{ type: String, default: '' },
    estimatedTime:  { type: String, default: '30-45 min' },
}, { timestamps: true });

// Auto-generate orderId before saving
OrderSchema.pre('save', function(next) {
    if (!this.orderId) {
        this.orderId = 'ORD' + Date.now() + Math.floor(Math.random() * 1000);
    }
    next();
});

module.exports = mongoose.model('Order', OrderSchema);
