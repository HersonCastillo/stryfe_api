var sequelize = require('../utils/api.sql').sequelizeInstance;
var tableName = require('../utils/api.sql').db.tables.Usuario;
var Sequelize = require('sequelize');

const Table = sequelize.define(tableName, {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: Sequelize.TEXT(100),
    apellido: Sequelize.TEXT(100),
    correo: { type: Sequelize.TEXT(150), unique: true },
    fecha_nac: { type: Sequelize.DATE, allowNull: true },
    dui: { type: Sequelize.TEXT(10), unique: true, allowNull: true },
    telefono: { type: Sequelize.TEXT(9), allowNull: true },
    direccion: { type: Sequelize.TEXT(150), allowNull: true },
    password: Sequelize.TEXT(64),
    img: { type: Sequelize.TEXT(150), allowNull: true },
    verificado: { type: Sequelize.TINYINT(1), defaultValue: 0 },
    token: Sequelize.TEXT(64),
    id_tipo_usuario: Sequelize.INTEGER(1)
});

module.exports = Table;