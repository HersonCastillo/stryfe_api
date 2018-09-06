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
        Reporte: 'reporte',
        Carrito: 'carrito',
        DetalleClienteForma: 'detalle_cliente_forma',
        DetalleClienteProducto: 'detalle_cliente_producto',
        EstadoMensaje: 'estado_mensaje',
        EstadoProd: 'estado_prod',
        FormasDePago: 'formas_de_pago',
        RubroProd: 'rubro_prod',
        TipoReporte: 'tipo_reporte',
        TipoUsuario: 'tipo_usuario'
    },
    logging: false
}
var Sequelize = require('sequelize');
var sequelize = new Sequelize(db.database, db.username, db.password, {
    host: db.host,
    dialect: db.dialect,
    pool: db.pool,
    operatorsAliases: db.operatorsAliases,
    define: db.define,
    logging: db.logging
});

module.exports = {
    sequelizeInstance: sequelize,
    db: db
}