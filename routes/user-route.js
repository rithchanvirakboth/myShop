const authentication = require('../authentication/authentication');
const UserController = require('../controllers/user-controller');
const router = require('express').Router();

router.post('/register', UserController.register);
router.post('/activate', UserController.activateEmail);

router.post('/login', UserController.login);
router.post('/refresh_token', UserController.getAccessToken);

router.post('/logout', UserController.logout);

router.post('/forgetPassword', UserController.forgetPassword);
router.post('/resetPassword', authentication, UserController.resetPassword);

router.get('/getUser', authentication, UserController.getUserInfo);
router.patch('/updateUser', authentication, UserController.updateUserInfor);

router.patch('/deactivateAccount', authentication, UserController.deactivateAccount);
router.delete('/deleteAccount', authentication, UserController.deleteAccount);

module.exports = router;