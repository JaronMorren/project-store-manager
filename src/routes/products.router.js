const express = require('express');
const {
  getProducts,
  getProductsByID,
  createProduct,
  updateProduct,
} = require('../controllers/products.controller');
const { productNameValidation } = require('../middlewares/products.validation');

const productsRouter = express.Router();

productsRouter.get('/', getProducts);

productsRouter.get('/:id', getProductsByID);

productsRouter.post('/', productNameValidation, createProduct);

productsRouter.put('/:id', productNameValidation, updateProduct);

module.exports = productsRouter;
