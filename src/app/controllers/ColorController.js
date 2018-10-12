var Color = require('../models/ColorProd');

module.exports = {
    insertar: function(req, res){
        Color.create({
            descripcion: req.body.descripcion
        }).then(() => res.json({
            success: 'Color agregado'
        })).catch(() => res.json({
            error: 'No se puede crear el color'
        }));
    },
    eliminar: function(req, res){
        Color.findOne({
            where: {
                id: req.params.id
            }
        }).then(carr => {
            return carr.destroy().then(() => res.json({
                success: "Color eliminado con éxito"
            })).catch(() => res.json({
                error: "No se puede eliminar el color"
            }));
        }).catch(() => res.json({
            error: 'No se econtró el color'
        }));
    },
    actualizar: function(req, res){
        Color.update({
            descripcion: req.body.descripcion
        }, {
            where: {
                id: req.body.id
            }
        }).then(() => res.json({
            success: 'El color se actualizó'
        })).catch(() => res.json({
            error: 'No se puede actualizar el color'
        }));
    },
    listar: function(req, res){
        Color.findAll({raw: true}).then(carr => res.json(carr)).catch(() => res.json({
            error: 'No se puede listar los colores'
        }));
    },
    listarPorId: function(req, res){
        Color.findOne({
            where: {
                id: req.params.id
            }
        }).then(carr => {
            if(carr) res.json({
                success: carr.dataValues
            });
            else res.json({
                success: null
            });
        }).catch(() => res.json({
            error: 'No se puede listar a este color'
        }));
    }
}