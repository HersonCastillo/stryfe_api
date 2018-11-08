var express = require('express');
var router = express.Router();

var MensajeController = require('../../controllers/MensajeController');

router.post('/', MensajeController.insertar);
router.get('/', MensajeController.listar);
router.get('/todos', MensajeController.listarTodo);
router.put('/', MensajeController.actualizar);
router.delete('/:id', MensajeController.eliminar);

router.get('/:id', MensajeController.listarPorId);

module.exports = router;