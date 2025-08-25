const express = require('express');
const router = express.Router();
const adminController = require('../Controller/adminController');
const authMiddleware = require('../Middleware/authMiddleware');
const roleMiddleware = require('../Middleware/roleMiddleware');

router.post('/login', adminController.loginAdmin);
router.post('/addAdmin', authMiddleware, roleMiddleware(['superadmin']),adminController.addEventAdmin);
router.post('/:id/addEvent', authMiddleware,roleMiddleware(['superadmin', 'event_admin']), adminController.addEvent);
router.get('/events', adminController.getAllEvents);
router.get('/events/:id', adminController.getEventById);
router.get('/:id/events',authMiddleware,roleMiddleware(['superadmin', 'event_admin']), adminController.getAdminEvent);
router.get('/:id/leads',authMiddleware,roleMiddleware(['superadmin', 'event_admin']), adminController.getLead);

module.exports = router;