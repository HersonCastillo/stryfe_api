const express = require('express');
const routes = express.Router();

const ProductoController = require('../controllers/ProductoController');

routes.get('/producto', ProductoController.listar);
routes.get('/producto/:id', ProductoController.listarPorId);
routes.get('/producto/random', ProductoController.random);

module.exports = routes;