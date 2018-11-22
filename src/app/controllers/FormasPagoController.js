const FormasPago = require('../models/FormasDePago');
const DetalleForma = require('../models/DetalleClienteForma');

module.exports = {
    listarFormas: function(req, res){
        FormasPago.findAll({raw: true}).then(v => res.json(v)).catch(() => res.json({
            error: 'Error listando los tipos de pago disponibles'
        }));
    },
    insertar: function(req, res){
        DetalleForma.create({
            correo: req.body.correo,
            id_cliente: req.user.id,
            id_forma: req.body.id_forma,
            numero: req.body.numero
        }).then(() => res.json({
            success: 'Forma de pago ingresada'
        })).catch(() => res.json({
            error: 'Error ingresanfo la forma de pago'
        }));
    },
    actualizar: function(req, res){
        DetalleForma.update({
            correo: req.body.correo,
            id_forma: req.body.id_forma,
            numero: req.body.numero
        }, {
            where: {
                id: req.body.id
            }
        }).then(() => res.json({
            success: 'Forma de pago actualizada'
        })).catch(() => res.json({
            error: 'Error actualizando la forma de pago'
        }));
    },
    listar: function(req, res){
        DetalleForma.find({
            raw: true,
            where: {
                id_cliente: req.user.id
            }
        }).then(v => res.json(v)).catch(() => res.json({
            error: 'Error listando las formas de pago'
        }));
    }
}