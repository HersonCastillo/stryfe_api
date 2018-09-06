var express = require('express');
var routes = express.Router();

var usuario = require('./usuario');

routes.use('/usuario', usuario);

module.exports = routes;