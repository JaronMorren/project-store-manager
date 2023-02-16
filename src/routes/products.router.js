const express = require('express');
const { getProducts, getProductsByID,
  createProduct } = require('../controllers/products.controller');

const productsRouter = express.Router();

productsRouter.get('/', getProducts);

productsRouter.get('/:id', getProductsByID);

productsRouter.post('/', createProduct);

module.exports = productsRouter;
