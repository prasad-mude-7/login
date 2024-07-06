const router = require('express').Router();
const productController  = require("../controller/productController")

router.post('/addProduct',productController.addProduct);

router.get('/getProduct',productController.getProduct);

router.get('/getProductList',productController.getProductList);

module.exports = router;