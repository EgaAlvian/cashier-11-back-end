const router = require('express').Router();
const productController = require('../controllers/product.controller');

router.post('/', productController.createProduct);

router.get('/', productController.getAllProduct);

router.put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router;