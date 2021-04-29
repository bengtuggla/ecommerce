const router = require('express').Router();
const productModel = require('../models/products/productModel');

router.get('/', productModel.getProducts);
router.post('/new', productModel.createProducts);
router.get('/:id', productModel.getOneProduct);
router.delete('/:id', productModel.deleteProduct);

module.exports = router;
