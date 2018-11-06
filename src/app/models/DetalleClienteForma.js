const sequelize = require('../utils/api.sql').sequelizeInstance;
const tableName = require('../utils/api.sql').db.tables.DetalleClienteForma;
const Sequelize = require('sequelize');

const Table = sequelize.define(tableName, {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    numero: { type: Sequelize.TEXT(50), allowNull: true },
    correo: { type: Sequelize.TEXT(150), allowNull: true },
    id_cliente: Sequelize.INTEGER,
    id_forma: Sequelize.INTEGER
});

module.exports = Table;