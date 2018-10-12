var express = require('express');
var router = express.Router();

var ColorController = require('../../controllers/ColorController');

router.post('/', ColorController.insertar);
router.get('/', ColorController.listar);
router.put('/', ColorController.actualizar);
router.delete('/:id', ColorController.eliminar);

router.get('/:id', ColorController.listarPorId);

module.exports = router;