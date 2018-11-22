const Descuento = require('../models/Descuento');
const Estados = require('../models/EstadoDesc');

module.exports = {
    listarEstados: function(req, res){
        Estados.findAll({raw: true}).then(es => res.json(es)).catch(() => res.json({
            error: 'Error obteniendo los tipos de descuento'
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
            success: 'Descuento ingresado'
        })).catch(() => res.json({
            error: 'Error ingresando descuento'
        }));
    },
    eliminar: function(req, res){
        Descuento.findOne({
            where: {
                id: req.params.id
            }
        }).then(dest => {
            return dest.destroy().then(() => res.json({
                success: "Descuento eliminado"
            })).catch(() => res.json({
                error: "Error eliminando el descuento"
            }));
        }).catch(() => res.json({
            error: 'Error obteniendo el descuento'
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
            success: 'Descuento actualizado'
        })).catch(() => res.json({
            error: 'Error actualizando el descuento'
        }));
    },
    listar: function(req, res){
        Descuento.findAll({raw: true}).then(des => res.json(des)).catch((err) => res.json({
            error: 'Error listando los descuentos'
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
            error: 'Error obteniendo el descuento'
        }));
    }
}