var sequelize = require('../utils/api.sql').sequelizeInstance;
var tableName = require('../utils/api.sql').db.tables.DetalleClienteForma;
var Sequelize = require('sequelize');

const Table = sequelize.define(tableName, {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    numero: Sequelize.TEXT(50),
    correo: Sequelize.TEXT(150),
    id_cliente: Sequelize.INTEGER,
    id_forma: Sequelize.INTEGER
});

module.exports = Table;