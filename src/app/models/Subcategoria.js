var sequelize = require('../utils/api.sql').sequelizeInstance;
var tableName = require('../utils/api.sql').db.tables.Subcategoria;
var Sequelize = require('sequelize');

const Table = sequelize.define(tableName, {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    descripcion: Sequelize.TEXT(50),
    id_categoria: Sequelize.INTEGER
});

module.exports = Table;