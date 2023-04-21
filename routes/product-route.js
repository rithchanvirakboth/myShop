const adminAuth = require('../authentication/admin-auth');
const authentication = require('../authentication/authentication');
const productController = require('../controllers/product-controller');

const router = require('express').Router();


router.get('/all',authentication, adminAuth, productController.getAllProducts);

router.post('/product-add', authentication, adminAuth, productController.uploadProduct);
router.get('/product-category', authentication, adminAuth, productController.getProductsByCategory);
router.get('/product-filter', authentication, adminAuth, productController.getProductsByFilter);

module.exports = router;