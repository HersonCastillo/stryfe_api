var sequelize = require('../utils/api.sql').sequelizeInstance;
var tableName = require('../utils/api.sql').db.tables.DetalleProductoOrden;
var Sequelize = require('sequelize');

const Table = sequelize.define(tableName, {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    id_producto: Sequelize.TEXT(50),
    id_orden: Sequelize.INTEGER
});

module.exports = Table;