const express = require('express');
const Product = require('../models/product.model.js')
const router = express.Router();
const {
    getProducts, deleteProduct, getProduct, createProduct, updateProduct
} = require('../controllers/product.controller.js');

router.post("/", createProduct)

router.get('/', getProducts)

router.get("/:id", getProduct)

router.put("/:id", updateProduct)

router.delete("/:id", deleteProduct)


module.exports = router;