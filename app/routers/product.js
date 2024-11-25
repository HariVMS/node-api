const express = require('express')
const router= express()
const ProductController = require("../controllers/productController")
 

router.post('/',ProductController.createProductService);
router.get('/',ProductController.getAllProductsService);
router.get('/:id',ProductController.getProductService);
router.put('/:id',ProductController.updateProductService);
router.delete('/:id',ProductController.deleteProductsService)

module.exports= router