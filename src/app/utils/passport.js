const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt;
const Usuario = require('../models/Usuario');

var sha256 = require('sha256');

passport.use(new LocalStrategy({
    usernameField: 'correo',
    passwordField: 'password'
}, function(correo, password, cb){
     Usuario.findOne({
        where: {
            correo: correo,
            password: sha256(password)
        }
    }).then(user => {
        if(!user) cb(null, false, { message: 'Usuario no válido' });
        cb(null, user.dataValues, { message: 'Inicio de sesión correcto' });
    }).catch(err => cb(err));
}));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'abc123456'
}, function(payload, cb){
     Usuario.findById(payload.id).then(user => cb(null, user)).catch(err => cb(err));
}));