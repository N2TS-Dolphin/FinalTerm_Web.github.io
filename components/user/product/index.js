const express = require('express');
const router = express.Router({mergeParams: true});
const productController = require('./product.controller')
const reviewRouter = require('./review/index')

/* GET product details page. */
router.get("/:id", productController.displayProduct);
router.use("/:id/review", reviewRouter);

module.exports = router;