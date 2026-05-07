const mongoose = require('mongoose');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
    name:     { type: String, required: true },
    email:    { type: String, required: true, unique: true, lowercase: true },
    phone:    { type: String, default: '' },
    password: { type: String, required: true },
    address:  { type: String, default: '' },
    role:     { type: String, enum: ['user', 'admin'], default: 'user' },
}, { timestamps: true });

// Simple password hash using Node built-in crypto (no bcrypt needed)
UserSchema.pre('save', function(next) {
    if (!this.isModified('password')) return next();
    this.password = crypto.createHash('sha256').update(this.password).digest('hex');
    next();
});

UserSchema.methods.matchPassword = function(enteredPassword) {
    const hashed = crypto.createHash('sha256').update(enteredPassword).digest('hex');
    return this.password === hashed;
};

module.exports = mongoose.model('User', UserSchema);
