var sequelize = require('../utils/api.sql').sequelizeInstance;
var tableName = require('../utils/api.sql').db.tables.Reporte;
var Sequelize = require('sequelize');

const Table = sequelize.define(tableName, {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    descripcion: Sequelize.TEXT(150),
    id_tipo_reporte: Sequelize.INTEGER,
    id_cliente: Sequelize.INTEGER,
    id_producto: Sequelize.TEXT(50)
});

module.exports = Table;