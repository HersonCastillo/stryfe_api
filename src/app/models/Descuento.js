var sequelize = require('../utils/api.sql').sequelizeInstance;
var tableName = require('../utils/api.sql').db.tables.Descuento;
var Sequelize = require('sequelize');

const Table = sequelize.define(tableName, {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    monto: Sequelize.DECIMAL(10,2),
    fech_in: Sequelize.DATE,
    fech_fin: Sequelize.DATE,
    id_prod: Sequelize.TEXT(50),
    id_estado: Sequelize.INTEGER
});

module.exports = Table;