var sequelize = require('../utils/api.sql').sequelizeInstance;
var tableName = require('../utils/api.sql').db.tables.Carrito;
var Sequelize = require('sequelize');

const Table = sequelize.define(tableName, {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    cantidad: Sequelize.INTEGER,
    id_cliente: Sequelize.INTEGER,
    id_producto: Sequelize.TEXT(50)
});

module.exports = Table;