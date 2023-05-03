const router = require('express').Router();
const productController = require('../controllers/product.controller');

router.post('/', productController.createProduct);

router.get('/', productController.getAllProduct);

module.exports = router;