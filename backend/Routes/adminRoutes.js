const express = require('express');
const router = express.Router();
const adminController = require('../Controller/adminController');
const authMiddleware = require('../Middleware/authMiddleware');
const roleMiddleware = require('../Middleware/roleMiddleware');

router.post('/login', adminController.loginAdmin);
router.post('/addAdmin', adminController.addEventAdmin);
router.post('/:id/addEvent', adminController.addEvent);
router.get('/events', adminController.getAllEvents);
router.get('/events/:id', adminController.getEventById);
router.get('/:id/events', adminController.getAdminEvent);
router.get('/:id/leads', adminController.getLead);

module.exports = router;