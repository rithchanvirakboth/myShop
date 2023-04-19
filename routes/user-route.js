const authentication = require('../authentication/authentication');
const UserController = require('../controllers/user-controller');
const router = require('express').Router();

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);
router.post('/refresh_token', UserController.getAccessToken);
router.post('/activate', UserController.activateEmail);
router.post('/forgetPassword', UserController.forgetPassword);
router.post('/resetPassword', authentication, UserController.resetPassword);

router.get('/getUsers', authentication, UserController.getUserInfo);
router.patch('/updateUser', authentication, UserController.updateUser);

module.exports = router;