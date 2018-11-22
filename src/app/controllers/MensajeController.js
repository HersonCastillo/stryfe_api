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
            error: 'Error guardando mensaje'
        }));
    },
    eliminar: function(req, res){
        Mensaje.findOne({
            where: {
                id: req.params.id
            }
        }).then(msj => {
            return msj.destroy().then(() => res.json({
                success: "Mensaje eliminado"
            })).catch(() => res.json({
                error: "Error eliminando mensaje"
            }));
        }).catch(() => res.json({
            error: 'Error obteniendo mensaje'
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
            success: 'Mensaje actualizado'
        })).catch(() => res.json({
            error: 'Error actualizando mensaje'
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