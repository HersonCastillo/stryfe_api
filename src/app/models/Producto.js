var sequelize = require('../utils/api.sql').sequelizeInstance;
var tableName = require('../utils/api.sql').db.tables.Producto;
var Sequelize = require('sequelize');

const Table = sequelize.define(tableName, {
    id: { type: Sequelize.TEXT(50), primaryKey: true },
    nombre: Sequelize.TEXT(150),
    descripcion: Sequelize.TEXT(150),
    img: Sequelize.TEXT(150),
    precio: Sequelize.DECIMAL(10, 2),
    cantidad: Sequelize.INTEGER,
    genero_prodc: { type: Sequelize.TINYINT(1), defaultValue: 0 },
    id_talla: Sequelize.INTEGER,
    id_color: Sequelize.INTEGER,
    id_subcategoria_prod: Sequelize.INTEGER,
    id_rubro: Sequelize.INTEGER,
    id_estado_prod: Sequelize.INTEGER,
    stock_existente: Sequelize.INTEGER,
    stock_minimo: Sequelize.INTEGER
});

module.exports = Table;