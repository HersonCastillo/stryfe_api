var Categoria = require('../models/Categoria');

module.exports = {
    insertar: function(req, res){
        Categoria.create({
            descripcion: req.body.descripcion
        }).then(() => res.json({
            success: 'Categoria guardada'
        })).catch(() => res.json({
            error: 'No se puede guardar esta categoría'
        }));
    },
    eliminar: function(req, res){
        Categoria.findOne({
            where: {
                id: req.body.id
            }
        }).then(cat => {
            return cat.destroy().then(() => res.json({
                success: "Categoria eliminada con éxito"
            })).catch(() => res.json({
                error: "No se puede eliminar la categoria"
            }));
        }).catch(() => res.json({
            error: 'No se econtró la categoría'
        }));
    },
    actualizar: function(req, res){
        Categoria.update({
            descripcion: req.body.descripcion
        }, {
            where: {
                id: req.body.id
            }
        }).then(() => res.json({
            success: 'La categoria se actualizó'
        })).catch(() => res.json({
            error: 'No se puede actualizar la categoria'
        }));
    },
    listar: function(req, res){
        Categoria.findAll({raw: true}).then(cats => res.json(cats)).catch(() => res.json({
            error: 'No se puede listar las categorías'
        }));
    },
    listarPorId: function(req, res){
        Categoria.findOne({
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
            error: 'No se puede listar a esta categoria'
        }));
    }
}