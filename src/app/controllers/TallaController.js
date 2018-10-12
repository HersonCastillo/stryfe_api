var Talla = require('../models/TallaProd');

module.exports = {
    insertar: function(req, res){
        Talla.create({
            descripcion: req.body.descripcion
        }).then(() => res.json({
            success: 'Talla guardada'
        })).catch(() => res.json({
            error: 'No se puede guardar esta talla'
        }));
    },
    eliminar: function(req, res){
        Talla.findOne({
            where: {
                id: req.params.id
            }
        }).then(cat => {
            return cat.destroy().then(() => res.json({
                success: "Talla eliminada con éxito"
            })).catch(() => res.json({
                error: "No se puede eliminar la talla"
            }));
        }).catch(() => res.json({
            error: 'No se econtró la talla'
        }));
    },
    actualizar: function(req, res){
        Talla.update({
            descripcion: req.body.descripcion
        }, {
            where: {
                id: req.body.id
            }
        }).then(() => res.json({
            success: 'La talla se actualizó'
        })).catch(() => res.json({
            error: 'No se puede actualizar la talla'
        }));
    },
    listar: function(req, res){
        Talla.findAll({raw: true}).then(cats => res.json(cats)).catch(() => res.json({
            error: 'No se puede listar las talla'
        }));
    },
    listarPorId: function(req, res){
        Talla.findOne({
            where: {
                id: req.params.id
            }
        }).then(cat => {
            if(cat) res.json({
                success: cat.dataValues
            });
            else res.json({
                success: null
            });
        }).catch(() => res.json({
            error: 'No se puede listar a esta talla'
        }));
    }
}