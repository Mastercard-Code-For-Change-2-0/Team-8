const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');

router.post('/register', userController.handleRegisterUser);
router.post('/login', userController.handleLoginUser);

module.exports = router;