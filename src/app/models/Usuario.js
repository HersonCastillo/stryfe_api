var sequelize = require('../utils/api.sql').sequelizeInstance;
var tableName = require('../utils/api.sql').db.tables.Usuario;
var Sequelize = require('sequelize');

const Usuario = sequelize.define(tableName, {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: Sequelize.TEXT(100),
    apellido: Sequelize.TEXT(100),
    correo: { type: Sequelize.TEXT(150), unique: true },
    fecha_nac: Sequelize.DATE,
    dui: { type: Sequelize.TEXT(10), unique: true },
    telefono: Sequelize.TEXT(9),
    direccion: Sequelize.TEXT(150),
    password: Sequelize.TEXT(64),
    id_tipo_usuario: Sequelize.INTEGER(1)
});

module.exports = Usuario;