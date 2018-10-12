var express = require('express');
var router = express.Router();

var TallaController = require('../../controllers/TallaController');

router.post('/', TallaController.insertar);
router.get('/', TallaController.listar);
router.put('/', TallaController.actualizar);
router.delete('/:id', TallaController.eliminar);

router.get('/:id', TallaController.listarPorId);

module.exports = router;