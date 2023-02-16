const express = require('express');
const { getProducts, getProductsByID } = require('../controllers/products.controller');

const productsRouter = express.Router();

productsRouter.get('/', getProducts);

productsRouter.get('/:id', getProductsByID);

module.exports = productsRouter;
