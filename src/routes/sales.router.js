const express = require('express');

const { getSales, getSalesByID } = require('../controllers/sales.controller');

const salesRouter = express.Router();

salesRouter.get('/', getSales);
salesRouter.get('/:id', getSalesByID);

module.exports = salesRouter;