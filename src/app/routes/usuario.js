var express = require('express');
var router = express.Router();

var UsuarioController = require('../controllers/UsuarioController');

router.get('/example', (req, res, next) => {
    res.send('example ok!');
});

module.exports = router;