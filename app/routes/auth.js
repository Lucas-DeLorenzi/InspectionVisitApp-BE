const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/AuthController');

module.exports = router.post('/signIn', AuthController.signIn);