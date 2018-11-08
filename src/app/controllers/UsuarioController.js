var Usuario = require('../models/Usuario');
var sha256 = require('sha256');

module.exports = {
    validar: function(req, res){
        Usuario.update({
            verificado: 1
        }, {
            where: {
                token: req.params.token
            }
        }).then(u => {
            res.redirect('http://localhost:4200/login?val=yes');
        }).catch(e => {
            res.send(`No se puede validar la cuenta. ${e}`);
        });
    },
    recuperarPassword: function(req, res){
        Usuario.update({
            password: sha256(req.body.password)
        }, {
            where: {
                token: req.body.token
            }
        }).then(() => res.json({
            success: "Contraseña reestablecida"
        })).catch(() => res.json({
            error: 'Error al actualizar la contraseña'
        }));
    },
    allowPasswordUpdate: function(req, res){
        Usuario.find({
            where: {
                token: req.params.token
            }
        }).then(r => {
            if(r) res.json({ ok: 1 });
            else res.json({ ok: 0 });
        }).catch(e => res.json({
            ok : 0,
            err: e
        }));
    },
    actualizar: function(req, res){
        Usuario.update({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correo: req.body.correo,
            direccion: req.body.direccion,
            genero: req.body.genero,
            dui: req.body.dui,
            fecha_nac: req.body.fecha_nac,
            id_tipo_usuario: req.body.id_tipo_usuario,
            telefono: req.body.telefono
        }, {
            where: {
                id: req.body.id
            }
        }).then(() => res.json({
            success: "Usuario actualizado"
        })).catch(() => res.json({
            error: 'Error al actualizar el usuario'
        }));
    },
    eliminar: function(req, res){
        Usuario.findOne({
            where: {
                id: req.params.id
            }
        }).then(user => {
            return user.destroy().then(() => res.json({
                success: 'Usuario eliminado'
            })).catch(() => res.json({
                error: 'No se puede eliminar al usuario'
            }));
        }).catch(() => res.json({
            error: 'No se encontró al usuario'
        }));
    },
    insertar: function(req, res){
        Usuario.create({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correo: req.body.correo,
            direccion: req.body.direccion,
            dui: req.body.dui,
            genero: req.body.genero,
            fecha_nac: req.body.fecha_nac,
            id_tipo_usuario: req.body.id_tipo_usuario,
            telefono: req.body.telefono,
            password: sha256(req.body.password || "stryfe"),
            token: sha256(req.body.correo)
        }).then(() => res.json({
            success: "Usuario creado"
        })).catch(() => res.json({
            error: 'Error al crear el usuario'
        }));
    },
    listar: function(req, res){
        Usuario.findAll({ raw: true }).then(users => res.json(users)).catch(() => res.json({
            error: 'No se pueden listar los usuarios'
        }));
    },
    listarPorId: function(req, res){
        Usuario.findOne({
            where: {
                id: req.params.id
            }
        }).then(user => {
            if(user) res.json(user.dataValues);
            else res.json(null);
        }).catch(() => res.json({
            error: "No se puede listar a este usuario"
        }));
    }
}