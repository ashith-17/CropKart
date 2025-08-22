const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['participant','mentor','admin'], default: 'participant' }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
