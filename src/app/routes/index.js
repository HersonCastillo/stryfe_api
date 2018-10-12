const express = require('express');
const routes = express.Router();

const talla = require('./web/talla');
const color = require('./web/color');
const usuario = require('./web/usuario');
const categoria = require('./web/categoria');
const producto = require('./web/producto');
const reporte = require('./web/reporte');
const orden = require('./web/orden');
const mensaje = require('./web/mensaje');
const descuento = require('./web/descuento');
const carrito = require('./web/carrito');
const subcategoria = require('./web/subcategoria');

routes.use('/orden', orden);
routes.use('/color', color);
routes.use('/talla', talla);
routes.use('/mensaje', mensaje);
routes.use('/reporte', reporte);
routes.use('/carrito', carrito);
routes.use('/usuario', usuario);
routes.use('/producto', producto);
routes.use('/descuento', descuento);
routes.use('/categoria', categoria);
routes.use('/subcategoria', subcategoria);

module.exports = routes;