const Orden = require('../models/Orden');

module.exports = {
    insertar: function(req, res){
        Orden.create({
            id_estado: req.body.id_estado,
            monto_total: req.body.monto_total,
            token_verif: req.body.token_verif,
            direccion_aux: req.body.direccion_aux,
            id_detalle_forma: req.body.id_detalle_forma
        }).then(() => res.json({
            success: 'Orden ingresada'
        })).catch(() => res.json({
            error: 'Error ingresando la orden'
        }));
    },
    eliminar: function(req, res){
        Orden.findOne({
            where: {
                id: req.params.id
            }
        }).then(orn => {
            return orn.destroy().then(() => res.json({
                success: "Orden eliminada"
            })).catch(() => res.json({
                error: "Error eliminando la orden"
            }));
        }).catch(() => res.json({
            error: 'Error obteniendo la orden'
        }));
    },
    actualizar: function(req, res){
        Orden.update({
            id_detalle_forma: req.body.id_detalle_forma,
            id_estado: req.body.id_estado,
            monto_total: req.body.monto_total,
            token_verif: req.body.token_verif,
            direccion_aux: req.body.direccion_aux
        }, {
            where: {
                id: req.body.id
            }
        }).then(() => res.json({
            success: 'Orden actualizada'
        })).catch(() => res.json({
            error: 'Error actualizando orden'
        }));
    },
    listar: function(req, res){
        Orden.findAll({
            raw: true
        }).then(orn => res.json(orn)).catch(() => res.json({
            error: 'Error listando el historico de ordenes'
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
            error: 'Error obteniendo la orden'
        }));
    }
}