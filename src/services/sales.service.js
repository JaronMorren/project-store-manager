const salesModel = require('../models/sales.model');

const getSales = async () => {
  const sales = await salesModel.getSales();
  return { type: null, message: sales };
};

const getSalesByID = async (id) => {
  const sales = await salesModel.getSalesByID(id);
  if (sales.length === 0) return { type: 404, message: 'Sale not found' };
  return {
    type: 200, message: sales,
  };
};

module.exports = {
  getSales,
  getSalesByID,
};

// https://github.com/CarolinaKauark/msc-do-zero/blob/solved-exercise/src/services/person.service.js