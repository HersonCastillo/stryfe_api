var sequelize = require('../utils/api.sql').sequelizeInstance;
var tableName = require('../utils/api.sql').db.tables.Orden;
var Sequelize = require('sequelize');

const Table = sequelize.define(tableName, {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    monto_total: Sequelize.DECIMAL(10, 2),
    direccion_aux: { type: Sequelize.TEXT(150), allowNull: true },
    token_verif: Sequelize.TEXT(150),
    id_estado: Sequelize.INTEGER,
    id_cliente: Sequelize.INTEGER
});

module.exports = Table;