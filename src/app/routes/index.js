var express = require('express');
var routes = express.Router();

var usuario = require('./web/usuario');
var categoria = require('./web/categoria');

routes.use('/usuario', usuario);
routes.use('/categoria', categoria);

module.exports = routes;