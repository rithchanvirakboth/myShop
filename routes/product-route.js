const adminAuth = require('../authentication/admin-auth');
const authentication = require('../authentication/authentication');
const productController = require('../controllers/product-controller');

const router = require('express').Router();


router.get('/all',authentication, adminAuth, productController.getAllProducts);

router.post('/product-add', authentication, adminAuth, productController.uploadProduct);
router.get('/product-category/:category', authentication, adminAuth, productController.getProductsByCategory);

module.exports = router;