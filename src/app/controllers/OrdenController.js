var Orden = require('../models/Orden');

module.exports = {
    insertar: function(req, res){
        Orden.create({
            id_cliente: req.body.id_cliente,
            id_estado: req.body.id_estado,
            monto_total: req.body.monto_total,
            token_verif: req.body.token_verif,
            direccion_aux: req.body.direccion_aux
        }).then(() => res.json({
            success: 'Orden guardada'
        })).catch(() => res.json({
            error: 'No se puede guardar esta orden'
        }));
    },
    eliminar: function(req, res){
        Orden.findOne({
            where: {
                id: req.params.id
            }
        }).then(orn => {
            return orn.destroy().then(() => res.json({
                success: "Orden eliminada con éxito"
            })).catch(() => res.json({
                error: "No se puede eliminar la orden"
            }));
        }).catch(() => res.json({
            error: 'No se econtró la orden'
        }));
    },
    actualizar: function(req, res){
        Orden.update({
            id_cliente: req.body.id_cliente,
            id_estado: req.body.id_estado,
            monto_total: req.body.monto_total,
            token_verif: req.body.token_verif,
            direccion_aux: req.body.direccion_aux
        }, {
            where: {
                id: req.body.id
            }
        }).then(() => res.json({
            success: 'La orden se actualizó'
        })).catch(() => res.json({
            error: 'No se puede actualizar la orden'
        }));
    },
    listar: function(req, res){
        Orden.findAll({raw: true}).then(orn => res.json(orn)).catch(() => res.json({
            error: 'No se puede listar las ordenes'
        }));
    },
    listarPorId: function(req, res){
        Orden.findOne({
            where: {
                id: req.params.id
            }
        }).then(orn => {
            if(orn) res.json({
                success: orn.dataValues
            });
            else res.json({
                success: null
            });
        }).catch(() => res.json({
            error: 'No se puede listar a esta orden'
        }));
    }
}