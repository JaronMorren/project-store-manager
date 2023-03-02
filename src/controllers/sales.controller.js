const salesService = require('../services/sales.service');

const getSales = async (_request, response) => {
  const { type, message } = await salesService.getSales();
  if (type) return response.status(500).json(message);
   response.status(200).json(message);
};

const getSalesByID = async (request, response) => {
  const { id } = request.params;
  const { type, message } = await salesService.getSalesByID(id);
  if (type === 404) return response.status(404).json({ message: 'Sale not found' });
  return response.status(200).json(message);
};

module.exports = {
  getSales,
  getSalesByID,
};