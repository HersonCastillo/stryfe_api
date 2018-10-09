var express = require('express');
var router = express.Router();

var SubcategoriaController = require('../../controllers/SubcategoriaController');

router.post('/', SubcategoriaController.insertar);
router.get('/', SubcategoriaController.listar);
router.put('/', SubcategoriaController.actualizar);
router.delete('/:id', SubcategoriaController.eliminar);

router.get('/:id', SubcategoriaController.listarPorId);

module.exports = router;