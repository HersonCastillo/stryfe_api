var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var passport = require('passport');
var validations = require('../utils/validation');

router.post('/login', (req, res) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        if(err || !user){
            return res.status(200).json({
                error: info ? info.error || info.message : 'Credenciales incorrectas',
                code: err || auth || "No se encontró al usuario"
            });
        }
        req.login(user, { session: false }, (err) => {
            if(err) res.send({ error: err });
            const token = jwt.sign(user, 'abc123456');
            return res.json({user, token});
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
            
        } else res.json({
            error: "Los datos no están validados correctamente"
        });
    } else res.json({
        error: "Faltan campos por completar."
    });
});

module.exports = router;