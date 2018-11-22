const FormasPago = require('../models/FormasDePago');
const DetalleForma = require('../models/DetalleClienteForma');

module.exports = {
    listarFormas: function(req, res){
        FormasPago.findAll({raw: true}).then(v => res.json(v)).catch(() => res.json({
            error: 'No se puede listar las formas'
        }));
    },
    insertar: function(req, res){
        DetalleForma.create({
            correo: req.user.correo,
            id_cliente: req.user.id,
            id_forma: req.body.id_forma,
            numero: req.body.numero
        }).then(() => res.json({
            success: 'Forma guardada'
        })).catch(err => res.json({
            error: 'No se puede guardar esta forma',
            code: err
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
            success: 'El detalle se actualizó'
        })).catch(() => res.json({
            error: 'No se puede actualizar el detalle'
        }));
    },
    listar: function(req, res){
        DetalleForma.find({
            raw: true,
            where: {
                id_cliente: req.user.id
            }
        }).then(v => res.json(v)).catch(() => res.json({
            error: 'No se puede listar los detalles'
        }));
    }
}