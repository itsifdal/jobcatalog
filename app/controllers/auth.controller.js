require('dotenv').config()

const db     = require("../models");
const User   = db.users;

// Libs
const bcrypt = require("bcrypt");
const jwt    = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

// Register
exports.register = [
    // Validate and sanitize inputs
    body('email').isEmail().withMessage('Invalid email format').normalizeEmail(),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),

    // Handle validation result
    async (req, res) => {
        const errors = validationResult(req); // Collect validation errors
        if (!errors.isEmpty()) {
            const customErrors = errors.array().map(error => ({
                message: error.msg,
                value: error.value
            }));
            return res.status(400).json(customErrors); // Return custom error format
        }

        const { email, password } = req.body;

        // Check email is exist
        const emailExist = await User.findOne({ where: { email } });
        if (emailExist) {
            return res.status(400).send({ message: 'Email already exist!' });
        }

        // Hash password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const userData = {
            email,
            password: hash,
        };

        try {
            const user = await User.create(userData); // Create new user
            res.status(201).send({
                message: 'Registration is successful!',
            });
        } catch (err) {
            res.status(500).send({
                message: `Internal Server Error, ${err.message}`,
            });
        }
    },
];

// Login
exports.login = [
    // Validate and sanitize inputs
    body('email').isEmail().withMessage('Invalid email format').normalizeEmail(),
    body('password').notEmpty().withMessage('Password is required'),

    // Handle validation result
    async (req, res) => {

        // Check for validation errors
        const errors = validationResult(req); 
        if (!errors.isEmpty()) {
            const customErrors = errors.array().map(error => ({
                message: error.msg,
                value  :   error.value
            }));
            
            // Return error
            return res.status(400).json(customErrors); 
        }

        const { email, password } = req.body;

        try {

            // Get User by the email
            const user = await User.findOne({ where: { email } }); // Find user by email
            if (!user) {
                return res.status(404).send({ message: 'User not found!' });
            }

            // Compare Password
            const isMatch = await bcrypt.compare(password, user.password); // Compare password
            if (!isMatch) {
                return res.status(401).send({ message: 'Invalid credentials!' });
            }

            // Generate JWT token
            const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '24h' });

            res.status(200).send({
                message: 'Login successful!',
                token: token, // Send token in the response
            });
        } catch (err) {
            res.status(500).send({
                message: `Internal Server Error, ${err.message}`,
            });
        }
    },
];

