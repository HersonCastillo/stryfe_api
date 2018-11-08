var Mensaje = require('../models/Mensaje');

module.exports = {
    insertar: function(req, res){
        Mensaje.create({
            id_estado_mensaje: req.body.id_estado_mensaje,
            id_usuario: req.user.id,
            mensaje: req.body.mensaje
        }).then(m => {
            res.json({
                success: 'Mensaje guardado',
                mensaje: m.dataValues
            });
        }).catch(() => res.json({
            error: 'No se puede guardar este mensaje'
        }));
    },
    eliminar: function(req, res){
        Mensaje.findOne({
            where: {
                id: req.params.id
            }
        }).then(msj => {
            return msj.destroy().then(() => res.json({
                success: "Mensaje eliminado con éxito"
            })).catch(() => res.json({
                error: "No se puede eliminar el mensaje"
            }));
        }).catch(() => res.json({
            error: 'No se econtró el mensaje'
        }));
    },
    actualizar: function(req, res){
        Mensaje.update({
            id_estado_mensaje: req.body.id_estado_mensaje
        }, {
            where: {
                id: req.body.id
            }
        }).then(() => res.json({
            success: 'El mensaje se actualizó'
        })).catch(() => res.json({
            error: 'No se puede actualizar el mensaje'
        }));
    },
    listar: function(req, res){
        Mensaje.findAll({
            raw: true,
            where: {
                id_usuario: req.user.id
            }
        }).then(msj => res.json(msj)).catch(() => res.json({
            error: 'No se puede listar los mensajes'
        }));
    },
    listarTodo: function(req, res){
        Mensaje.findAll({raw: true}).then(msj => res.json(msj)).catch(() => res.json({
            error: 'No se puede listar los mensajes'
        }));
    },
    listarPorId: function(req, res){
        Mensaje.findOne({
            where: {
                id: req.params.id
            }
        }).then(msj => {
            if(msj) res.json({
                success: msj.dataValues
            });
            else res.json({
                success: null
            });
        }).catch(() => res.json({
            error: 'No se puede listar a este mensaje'
        }));
    }
}