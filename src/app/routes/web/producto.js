var express = require('express');
var router = express.Router();

var ProductoController = require('../../controllers/ProductoController');

router.post('/', ProductoController.insertar);
router.get('/', ProductoController.listar);
router.put('/', ProductoController.actualizar);
router.delete('/', ProductoController.eliminar);

router.get('/:id', ProductoController.listarPorId);

module.exports = router;