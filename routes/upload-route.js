const authentication = require('../authentication/authentication');
const uploadController = require('../controllers/upload-controller');
const uploadAuth = require('../authentication/upload-auth');
const uploadProductAuth = require('../authentication/uploadProduct-auth')
const router = require('express').Router();

router.post('/uploadAvatar', uploadAuth ,authentication, uploadController.uploadAvatar);

router.post('/uploadProductImage', uploadAuth, uploadProductAuth, uploadController.uploadProductImage);

module.exports = router;