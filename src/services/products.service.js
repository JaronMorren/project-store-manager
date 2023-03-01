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
// I wrote the functions in this file with the mentorship of Henrique Baeta

const createProduct = async (product) => {
  const response = await productsModel.createProduct(product);

  return { type: null, message: response };
};

const updateProduct = async (name, id) => {
  const product = await productsModel.getByID(id);
  if (product.length === 0) return { type: 404, message: 'Product not found' };
  const updatedProduct = await productsModel.updateProduct({ name, id });
  return { type: null, message: updatedProduct };
};
// Thaís Gonzaga helped me to fix this function

const deleteProduct = async (id) => {
  const product = await productsModel.getByID(id);
  if (!product.length) return { type: 404, message: 'Product not found' };
  const deletedProduct = await productsModel.deleteProduct(id);
  return { type: null, message: deletedProduct };
};

module.exports = { getProducts, getProductsByID, createProduct, updateProduct, deleteProduct };