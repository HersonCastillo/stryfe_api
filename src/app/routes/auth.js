const express = require('express');
const router = express.Router();
const tokenSecretKey = require('../utils/api.sql').tokenKey;
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validations = require('../utils/validation');
const Usuario = require('../models/Usuario');
const sha256 = require('sha256');

router.post('/login', (req, res) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err || !user) {
            return res.json({
                error: info ? info.error || info.message : 'Credenciales incorrectas',
                code: err || user || "No se encontró al usuario"
            });
        } else {
            req.login(user, { session: false }, (err) => {
                if (err) res.json({ error: err });
                else {
                    if (user.verificado == 0) return res.json({
                        error: "El usuario no ha verificado su cuenta."
                    });
                    else {
                        const token = jwt.sign(user, tokenSecretKey, {
                            expiresIn: "3h"
                        });
                        return res.json({ token, user });
                    }
                }
            });
        }
    })(req, res);
});

router.get('/validate', passport.authenticate('jwt', { session: false }), (req, res) => {
    if (req.user) res.json(req.user);
    else res.json({ error: 'Usuario no válido' });
});

router.post('/registrar', (req, res) => {
    let isOk = validations.allUserCommonDataExist(req.body);
    if (isOk) {
        let validate = validations.allUserCommonDataValidate(req.body);
        if (validate) {
            Usuario.create({
                id_tipo_usuario: 3,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                genero: 0,
                correo: req.body.correo,
                password: sha256(req.body.password),
                token: sha256(req.body.correo)
            }).then(() => res.json({
                success: 'Usuario guardado'
            })).catch(() => res.json({
                error: 'Error de persistencia'
            }));
        } else res.json({
            error: "Los datos no están validados correctamente"
        });
    } else res.json({
        error: "Faltan campos por completar."
    });
});

module.exports = router;