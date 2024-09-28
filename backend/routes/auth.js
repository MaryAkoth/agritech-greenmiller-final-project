const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Register Route
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  User.create(name, email, password, (result) => {
    res.json({ message: 'User registered successfully!', userId: result.insertId });
  });
});

// Login Route
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email, (result) => {
    if (result.length === 0 || result[0].password !== password) {
      res.status(401).json({ message: 'Invalid email or password' });
    } else {
      res.json({ message: 'Login successful!', user: result[0] });
    }
  });
});

module.exports = router;
