const express = require('express');
const routes = express.Router();

const ProductoController = require('../controllers/ProductoController');

routes.get('/producto', ProductoController.listar);

module.exports = routes;