const express = require('express');
const {
  getProducts,
  getProductsByID,
  createProduct,
} = require('../controllers/products.controller');
const { productNameValidation } = require('../middlewares/products.validation');

const productsRouter = express.Router();

productsRouter.get('/', getProducts);

productsRouter.get('/:id', getProductsByID);

productsRouter.post('/', productNameValidation, createProduct);

module.exports = productsRouter;
