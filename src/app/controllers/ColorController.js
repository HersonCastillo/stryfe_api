var Color = require('../models/ColorProd');

module.exports = {
    insertar: function(req, res){
        Color.create({
            descripcion: req.body.descripcion
        }).then(() => res.json({
            success: 'Color ingresado'
        })).catch(() => res.json({
            error: 'Error ingresando el color'
        }));
    },
    eliminar: function(req, res){
        Color.findOne({
            where: {
                id: req.params.id
            }
        }).then(carr => {
            return carr.destroy().then(() => res.json({
                success: "Color eliminado"
            })).catch(() => res.json({
                error: "Error eliminando el color"
            }));
        }).catch(() => res.json({
            error: 'Error encontrando el color'
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
            success: 'Color actualizado'
        })).catch(() => res.json({
            error: 'Error actualizando el color'
        }));
    },
    listar: function(req, res){
        Color.findAll({raw: true}).then(carr => res.json(carr)).catch(() => res.json({
            error: 'Error obteniendo la lista de colores'
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
            error: 'Error obteniendo el color'
        }));
    }
}