var express = require('express');
var router = express.Router();

var CategoriaController = require('../../controllers/CategoriaController');

router.post('/', CategoriaController.insertar);
router.get('/', CategoriaController.listar);
router.put('/', CategoriaController.actualizar);
router.delete('/:id', CategoriaController.eliminar);

router.get('/:id', CategoriaController.listarPorId);

module.exports = router;