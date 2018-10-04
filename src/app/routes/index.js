var express = require('express');
var routes = express.Router();

var usuario = require('./web/usuario');
var categoria = require('./web/categoria');
var producto = require('./web/producto');
var reporte = require('./web/reporte');
var orden = require('./web/orden');
var mensaje = require('./web/mensaje');
var descuento = require('./web/descuento');
var carrito = require('./web/carrito');
var subcategoria = require('./web/subcategoria');

routes.use('/usuario', usuario);
routes.use('/categoria', categoria);
routes.use('/carrito', carrito);
routes.use('/descuento', descuento);
routes.use('/mensaje', mensaje);
routes.use('/orden', orden);
routes.use('/reporte', reporte);
routes.use('/producto', producto);
routes.use('/subcategoria', subcategoria);

module.exports = routes;