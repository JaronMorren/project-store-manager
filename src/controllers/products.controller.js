const productsService = require('../services/products.service');

const getProducts = async (_request, response) => {
  const { type, message } = await productsService.getProducts();

  if (type) return response.status(500).json(message);

  response.status(200).json(message);
};

const getProductsByID = async (request, response) => {
  const { id } = request.params;
  const { type, message } = await productsService.getProductsByID(id);

  if (type) {
    return response.status(type).json({ message });
  }

  return response.status(200).json(message[0]);
};
// I wrote the functions in this file with the mentorship of Marcio Daniel

const createProduct = async (request, response) => {
  const product = request.body;
  const { type, message } = await productsService.createProduct(product);

  if (type) {
    return response.status(type).json({ message });
  }

  return response.status(201).json(message);
};

const updateProduct = async (request, response) => {
  const { id } = request.params;
  const { name } = request.body;

  const { type, message } = await productsService.updateProduct(name, id);
  
  if (type) return response.status(404).json({ message });
  return response.status(200).json(message);
};

const deleteProduct = async (request, response) => {
  const { id } = request.params;
  const { type, message } = await productsService.deleteProduct(id);

  if (type) return response.status(404).json({ message });
  return response.status(204).json();
};

module.exports = {
  getProducts,
  getProductsByID,
  createProduct,
  updateProduct,
  deleteProduct,
};
// https://github.com/CarolinaKauark/msc-do-zero/blob/solved-exercise/src/controllers/person.controller.js