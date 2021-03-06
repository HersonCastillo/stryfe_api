var sequelize = require('../utils/api.sql').sequelizeInstance;
var tableName = require('../utils/api.sql').db.tables.EstadoOrden;
var Sequelize = require('sequelize');

const Table = sequelize.define(tableName, {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    descripcion: Sequelize.TEXT(150)
});

module.exports = Table;