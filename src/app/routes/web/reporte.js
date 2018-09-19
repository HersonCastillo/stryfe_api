var express = require('express');
var router = express.Router();

var ReporteController = require('../../controllers/ReporteController');

router.post('/', ReporteController.insertar);
router.get('/', ReporteController.listar);
router.put('/', ReporteController.actualizar);
router.delete('/', ReporteController.eliminar);

router.get('/:id', ReporteController.listarPorId);

module.exports = router;