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

const createProduct = async (request, response) => {
  const product = request.body;
  const { type, message } = await productsService.createProduct(product);

  if (type) {
    return response.status(type).json({ message });
  }

  return response.status(201).json(message);
};

module.exports = {
  getProducts,
  getProductsByID,
  createProduct,
};

// I wrote the functions in this file with the mentorship of Marcio Daniel