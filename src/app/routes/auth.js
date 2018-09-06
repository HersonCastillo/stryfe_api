var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var passport = require('passport');

router.post('/login', (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        if(err || !user){
            return res.status(200).json({
                error: info ? info.message : 'Petición de inicio de sesión fallido',
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

module.exports = router;