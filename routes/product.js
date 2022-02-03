const router = require('express').Router();
const products = require('../controller/product');

router.get('/', products.getAllProducts);

module.exports = router;
