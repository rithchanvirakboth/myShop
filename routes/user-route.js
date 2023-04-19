const UserController = require('../controllers/user-controller');
const router = require('express').Router();

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);
router.post('/refresh_token', UserController.getAccessToken);
router.post('/activate', UserController.activateEmail);

module.exports = router;