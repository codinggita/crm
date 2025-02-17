const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    uniqueRegistrationCode: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
    userType: { type: String, required: true, enum: ['Admin', 'Client', 'Supplier'] }
});

module.exports = mongoose.model('User', userSchema);
