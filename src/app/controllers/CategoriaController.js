var Categoria = require('../models/Categoria');

module.exports = {
    insertar: function(req, res){
        Categoria.create({
            descripcion: req.body.descripcion
        }).then(() => res.json({
            success: 'Categoria ingresada'
        })).catch(() => res.json({
            error: 'Error guardando la categoria'
        }));
    },
    eliminar: function(req, res){
        Categoria.findOne({
            where: {
                id: req.params.id
            }
        }).then(cat => {
            return cat.destroy().then(() => res.json({
                success: "Categoria eliminada"
            })).catch(() => res.json({
                error: "Error eliminando la categoria"
            }));
        }).catch(() => res.json({
            error: 'Error obteniendo la categoria'
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
            success: 'Categoria actualizada'
        })).catch(() => res.json({
            error: 'Error actualizando categoria'
        }));
    },
    listar: function(req, res){
        Categoria.findAll({raw: true}).then(cats => res.json(cats)).catch(() => res.json({
            error: 'Error listando las categorias'
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
            error: 'Error obteniendo una categoria'
        }));
    }
}