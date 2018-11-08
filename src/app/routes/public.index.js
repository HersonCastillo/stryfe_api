const express = require('express');
const routes = express.Router();

const ProductoController = require('../controllers/ProductoController');
const UsuarioController = require('../controllers/UsuarioController');

routes.get('/producto', ProductoController.listar);
routes.get('/producto/:id', ProductoController.listarPorId);
routes.get('/producto/random', ProductoController.random);

routes.put('/recuperar', UsuarioController.recuperarPassword);
routes.get('/recuperar/:token', UsuarioController.allowPasswordUpdate);

routes.get('/validate/:token', UsuarioController.validar);

module.exports = routes;