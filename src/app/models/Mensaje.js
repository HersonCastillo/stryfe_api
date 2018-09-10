var sequelize = require('../utils/api.sql').sequelizeInstance;
var tableName = require('../utils/api.sql').db.tables.Mensaje;
var Sequelize = require('sequelize');

const Table = sequelize.define(tableName, {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    mensaje: Sequelize.TEXT(150),
    id_usuario: { type: Sequelize.INTEGER, allowNull: true },
    id_estado_mensaje: Sequelize.INTEGER
});

module.exports = Table;