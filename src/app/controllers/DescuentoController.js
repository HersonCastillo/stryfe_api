const Descuento = require('../models/Descuento');
const Estados = require('../models/EstadoDesc');

module.exports = {
    listarEstados: function(req, res){
        Estados.findAll({raw: true}).then(es => res.json(es)).catch(() => res.json({
            error: 'No se puede listar los estados'
        }));
    },
    insertar: function(req, res){
        Descuento.create({
            id_estado: req.body.id_estado,
            id_prod: req.body.id_prod,
            fech_in: req.body.fech_in,
            fech_fin: req.body.fech_fin,
            monto: req.body.monto
        }).then(() => res.json({
            success: 'Descuento agregado'
        })).catch(() => res.json({
            error: 'No se puede crear el descuento'
        }));
    },
    eliminar: function(req, res){
        Descuento.findOne({
            where: {
                id: req.params.id
            }
        }).then(dest => {
            return dest.destroy().then(() => res.json({
                success: "Descuento eliminado con éxito"
            })).catch(() => res.json({
                error: "No se puede eliminar el descuento"
            }));
        }).catch(() => res.json({
            error: 'No se econtró el descuento'
        }));
    },
    actualizar: function(req, res){
        Descuento.update({
            id_estado: req.body.id_estado,
            id_prod: req.body.id_prod,
            fech_in: req.body.fech_in,
            fech_fin: req.body.fech_fin,
            monto: req.body.monto
        }, {
            where: {
                id: req.body.id
            }
        }).then(() => res.json({
            success: 'El descuento se actualizó'
        })).catch(() => res.json({
            error: 'No se puede descuento el carrito'
        }));
    },
    listar: function(req, res){
        Descuento.findAll({raw: true}).then(des => res.json(des)).catch((err) => res.json({
            error: 'No se puede listar los descuentos'
        }));
    },
    listarPorId: function(req, res){
        Descuento.findOne({
            where: {
                id: req.params.id
            }
        }).then(des => {
            if(des) res.json({
                success: des.dataValues
            });
            else res.json({
                success: null
            });
        }).catch(() => res.json({
            error: 'No se puede listar a este descuento'
        }));
    }
}