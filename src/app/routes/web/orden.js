var express = require('express');
var router = express.Router();

var OrdenController = require('../../controllers/OrdenController');

router.post('/', OrdenController.insertar);
router.get('/', OrdenController.listar);
router.put('/', OrdenController.actualizar);
router.delete('/', OrdenController.eliminar);

router.get('/:id', OrdenController.listarPorId);

module.exports = router;