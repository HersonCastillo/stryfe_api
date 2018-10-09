var express = require('express');
var router = express.Router();

var CarritoController = require('../../controllers/CarritoController');

router.post('/', CarritoController.insertar);
router.get('/', CarritoController.listar);
router.put('/', CarritoController.actualizar);
router.delete('/:id', CarritoController.eliminar);

router.get('/:id', CarritoController.listarPorId);

module.exports = router;