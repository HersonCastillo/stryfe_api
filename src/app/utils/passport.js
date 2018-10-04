const passport = require('passport');
const tokenSecretKey = require('./api.sql').tokenKey;
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
    return Usuario.findOne({
        where: {
            correo: correo,
            password: sha256(password)
        }
    }).then(user => {
        if(!user) return cb(null, false, { message: 'Usuario no válido' });
        return cb(null, user.dataValues, { message: 'Inicio de sesión correcto' });
    }).catch(err => {
        return cb(err);
    });
}));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: tokenSecretKey,
    ignoreExpiration: false,
    jsonWebTokenOptions: {
        maxAge: 108e5
    }
}, function(payload, cb){
    return Usuario.findById(payload.id).then(user => {
        return cb(null, user);
    }).catch(err => {
        return cb(err);
    });
}));