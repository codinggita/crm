const express = require('express');
const User = require('../Models/User'); // User model

const router = express.Router();

// POST route to add data for Admin, Client, or Supplier
router.post('/', async (req, res) => {
    try {
        const { 
            companyName, 
            uniqueRegistrationCode, 
            firstName, 
            lastName, 
            email, 
            phoneNumber, 
            password, 
            confirmPassword, 
            userType 
        } = req.body;
        
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        // Ensure the userType is valid (Admin, Client, Supplier)
        if (!['Admin', 'Client', 'Supplier'].includes(userType)) {
            return res.status(400).json({ message: "Invalid user type" });
        }

        const newUser = new User({
            companyName,
            uniqueRegistrationCode,
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
            confirmPassword,
            userType
        });
        
        await newUser.save();
        res.status(201).json({ message: `${userType} registered successfully`, user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// GET route to fetch all users (Admin, Client, or Supplier)
router.get('/', async (req, res) => {
    try {
        const { userType } = req.query;  // Get userType from query parameters
        
        let users;
        if (userType) {
            // Fetch users of a specific type (Admin, Client, Supplier)
            users = await User.find({ userType });
        } else {
            // Fetch all users
            users = await User.find();
        }
        
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// Optional: GET route to fetch a specific user by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

module.exports = router;
