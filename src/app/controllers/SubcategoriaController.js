var Subcategoria = require('../models/Subcategoria');

module.exports = {
    insertar: function(req, res){
        Subcategoria.create({
            descripcion: req.body.descripcion,
            id_categoria: req.body.id_categoria
        }).then(() => res.json({
            success: 'Subcategoria guardada'
        })).catch(() => res.json({
            error: 'No se puede guardar esta subcategoría'
        }));
    },
    eliminar: function(req, res){
        Subcategoria.findOne({
            where: {
                id: req.body.id
            }
        }).then(cat => {
            return cat.destroy().then(() => res.json({
                success: "Subcategoria eliminada con éxito"
            })).catch(() => res.json({
                error: "No se puede eliminar la subcategoria"
            }));
        }).catch(() => res.json({
            error: 'No se econtró la categoría'
        }));
    },
    actualizar: function(req, res){
        Subcategoria.update({
            descripcion: req.body.descripcion,
            id_categoria: req.body.id_categoria
        }, {
            where: {
                id: req.body.id
            }
        }).then(() => res.json({
            success: 'La subcategoria se actualizó'
        })).catch(() => res.json({
            error: 'No se puede actualizar la subcategoria'
        }));
    },
    listar: function(req, res){
        Subcategoria.findAll({raw: true}).then(cats => res.json(cats)).catch(() => res.json({
            error: 'No se puede listar las subcategorías'
        }));
    },
    listarPorId: function(req, res){
        Subcategoria.findOne({
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
            error: 'No se puede listar a esta subcategoria'
        }));
    }
}