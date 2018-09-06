const db = {
    host: 'localhost',
    dialect: 'mysql',
    database: 'stryfe',
    username: 'root',
    password: '',
    pool: {
        max: 5,
        min: 0,
        acquire: 60000,
        idle: 30000
    },
    operatorsAliases: false,
    define: {
        freezeTableName: true,
        timestamps: false
    },
    tables: {
        Usuario: 'usuario',
        Cliente: 'cliente',
        Mensaje: 'mensaje',
        Categoria: 'categoria',
        Producto: 'producto',
        Subcategoria: 'subcategoria',
        Reporte: 'reporte'
    }
}
var Sequelize = require('sequelize');
var sequelize = new Sequelize(db.database, db.username, db.password, {
    host: db.host,
    dialect: db.dialect,
    pool: db.pool,
    operatorsAliases: db.operatorsAliases,
    define: db.define
});

module.exports = {
    sequelizeInstance: sequelize,
    db: db
}