var express = require('express');
var router = express.Router();

var UsuarioController = require('../../controllers/UsuarioController');

router.post('/', UsuarioController.insertar);
router.get('/', UsuarioController.listar);
router.put('/', UsuarioController.actualizar);
router.delete('/:id', UsuarioController.eliminar);

router.get('/:id', UsuarioController.listarPorId);

module.exports = router;