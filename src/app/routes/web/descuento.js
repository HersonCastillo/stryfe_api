var express = require('express');
var router = express.Router();

var DescuentoController = require('../../controllers/DescuentoController');

router.post('/', DescuentoController.insertar);
router.get('/', DescuentoController.listar);
router.put('/', DescuentoController.actualizar);
router.delete('/:id', DescuentoController.eliminar);

router.get('/:id', DescuentoController.listarPorId);

module.exports = router;