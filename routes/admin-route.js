const adminAuth = require('../authentication/admin-auth');
const authentication = require('../authentication/authentication');
const adminController = require('../controllers/admin-controller');

const router = require('express').Router();

// Admin route
router.get('/allUsers', authentication, adminAuth, adminController.getAllUserInfor);

router.post('/updateRole/:id', authentication, adminAuth, adminController.UpdateRole);
router.post('/updateUserInfor/:id', authentication, adminAuth, adminController.UpdateUserInfor);
module.exports = router;