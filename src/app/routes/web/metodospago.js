const express = require('express');
const router = express.Router();

const MetodosController = require('../../controllers/FormasPagoController');

router.post('/', MetodosController.insertar);
router.get('/', MetodosController.listar);
router.get('/formas', MetodosController.listarFormas);
router.put('/', MetodosController.actualizar);

module.exports = router;