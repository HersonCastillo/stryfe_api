var Carrito = require('../models/Carrito');
module.exports = {
    insertar: function(req, res){
        Carrito.create({
            cantidad: req.body.cantidad,
            id_cliente: req.user.id,
            id_producto: req.body.id_producto
        }).then(() => res.json({
            success: 'Producto agregado'
        })).catch(() => res.json({
            error: 'No se puede agregar el producto al carrito'
        }));
    },
    eliminar: function(req, res){
        Carrito.findOne({
            where: {
                id: req.params.id
            }
        }).then(carr => {
            return carr.destroy().then(() => res.json({
                success: "Producto eliminado del carrito"
            })).catch(() => res.json({
                error: "No se puede eliminar el producto del carrito"
            }));
        }).catch(() => res.json({
            error: 'No se encontro el producto en el carrito'
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
            success: 'Cantidad del producto actualizada'
        })).catch(() => res.json({
            error: 'No se pudo actualizar la cantidad'
        }));
    },
    listar: function(req, res){
        Carrito.findAll({
            raw: true,
            where: {
                id_cliente: req.user.id
            }
        }).then(carr => res.json(carr)).catch(() => res.json({
            error: 'No se pudo obtener los productos en el carrito'
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
            error: 'Error obteniendo un producto guardado en el carrito'
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
            error: 'Error obteniendo la lista de prroductos en el carrito'
        }));
    } 
}