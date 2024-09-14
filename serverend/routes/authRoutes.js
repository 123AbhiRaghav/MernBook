const express = require('express');
const { registerUser, loginUser, resetPassword } = require('../controllers/authController.js');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/resetPassword', resetPassword)

module.exports = router;
