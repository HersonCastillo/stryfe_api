var Carrito = require('../models/Carrito');
module.exports = {
    insertar: function(req, res){
        Carrito.create({
            cantidad: req.body.cantidad,
            id_cliente: req.user.id,
            id_producto: req.body.id_producto
        }).then(() => res.json({
            success: 'Carrito agregado'
        })).catch(() => res.json({
            error: 'No se puede crear el carrito'
        }));
    },
    eliminar: function(req, res){
        Carrito.findOne({
            where: {
                id: req.params.id
            }
        }).then(carr => {
            return carr.destroy().then(() => res.json({
                success: "Carrito eliminada con éxito"
            })).catch(() => res.json({
                error: "No se puede eliminar el carrito"
            }));
        }).catch(() => res.json({
            error: 'No se econtró el carrito'
        }));
    },
    actualizar: function(req, res){
        Carrito.update({
            cantidad: req.body.cantidad,
            id_producto: req.body.id_producto
        }, {
            where: {
                id: req.body.id
            }
        }).then(() => res.json({
            success: 'El carrito se actualizó'
        })).catch(() => res.json({
            error: 'No se puede actualizar el carrito'
        }));
    },
    listar: function(req, res){
        Carrito.findAll({
            raw: true,
            where: {
                id_cliente: req.user.id
            }
        }).then(carr => res.json(carr)).catch(() => res.json({
            error: 'No se puede listar los carritos'
        }));
    },
    listarPorId: function(req, res){
        Carrito.findOne({
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
            error: 'No se puede listar a este carrito'
        }));
    },
    limpiarMiCarrito: function(req, res){
        Carrito.findAll({
            where: {
                id_cliente: req.user.id
            }
        }).then(v => {
            let count = 0;
            let f = v.length;
            v.forEach(x => {
                x.destroy().then(() => {
                    count++;
                    if(count == f) res.json({
                        success: "Carrito limpiado con éxito"
                    });
                }).catch(() => res.json({
                    error: `No se puede limpiar el carrito [${count}]`
                }));
            });
        }).catch(() => res.json({
            error: 'No se econtraron los carritos'
        }));
    } 
}