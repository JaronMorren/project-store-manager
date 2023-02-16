const productsModel = require('../models/products.model');

const getProducts = async () => {
  const products = await productsModel.getAll();

  return { type: null, message: products };
};

const getProductsByID = async (productID) => {
  const product = await productsModel.getByID(productID);

  if (!product.length) return { type: 404, message: 'Product not found' };
  return { type: null, message: product };
};

const createProduct = async (product) => {
  const response = await productsModel.createProduct(product);

  return { type: null, message: response };
};

module.exports = { getProducts, getProductsByID, createProduct };

// I wrote the functions in this file with the mentorship of Henrique Baeta