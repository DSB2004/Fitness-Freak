const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name: { type: String },
    Email: { type: String, required: true, unique: true },
    Password: { type: String },
    Photo: { type: String }
});

const User = mongoose.model('User', userSchema);
module.exports = User;