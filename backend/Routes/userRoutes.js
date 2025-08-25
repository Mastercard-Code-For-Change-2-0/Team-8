const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');

router.post('/register', userController.handleRegisterUser);
router.post('/login', userController.handleLoginUser);
router.post("/markinterest", userController.markInterest);
router.get("/participatedEvents/:id", userController.participatedEvents);
router.put("/updateStatus", userController.updateStatus);

module.exports = router;