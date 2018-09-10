var express = require('express');
var router = express.Router();

var UsuarioController = require('../controllers/UsuarioController');

router.post('/', UsuarioController.insertar);
router.get('/', UsuarioController.listar);
router.put('/', UsuarioController.actualizar);
router.delete('/', UsuarioController.eliminar);

router.post('/listar', UsuarioController.listarPorId);

module.exports = router;