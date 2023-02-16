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

module.exports = { getProducts, getProductsByID };

// I wrote the functions in this file with the mentorship of Henrique Baeta