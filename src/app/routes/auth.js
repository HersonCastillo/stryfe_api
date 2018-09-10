var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var passport = require('passport');
var validations = require('../utils/validation');
var Usuario = require('../models/Usuario');
var sha256 = require('sha256');

router.post('/login', (req, res) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        if(err || !user){
            return res.status(200).json({
                error: info ? info.error || info.message : 'Credenciales incorrectas',
                code: err || user || "No se encontró al usuario"
            });
        }
        req.login(user, { session: false }, (err) => {
            if(err) res.send({ error: err });
            const token = jwt.sign(user, 'abc123456');
            return res.json({token});
        });
    })(req, res);
});

router.get('/validate', passport.authenticate('jwt', { session: false }), (req, res) => {
    if(req.user) res.json(req.user);
    else res.json({ error: 'Usuario no válido' });
});

router.post('/registrar', (req, res) => {
    let isOk = validations.allUserCommonDataExist(req.body);
    if(isOk){
        let validate = validations.allUserCommonDataValidate(req.body);
        if(validate){
            Usuario.create({
                id_tipo_usuario: 3,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
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