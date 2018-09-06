var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var passport = require('passport');

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

module.exports = router;