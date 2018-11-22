const Reporte = require('../models/Reporte');
const TipoReporte = require('../models/TipoReporte');
module.exports = {
    insertar: function(req, res){
        Reporte.create({
            descripcion: req.body.descripcion,
            id_cliente: req.user.id,
            id_producto: req.body.id_producto,
            id_tipo_reporte: req.body.id_tipo_reporte
        }).then(() => res.json({
            success: 'Reporte ingresado'
        })).catch(() => res.json({
            error: 'Error guardando reporte'
        }));
    },
    eliminar: function(req, res){
        Reporte.findOne({
            where: {
                id: req.params.id
            }
        }).then(rep => {
            return rep.destroy().then(() => res.json({
                success: "Reporte eliminado"
            })).catch(() => res.json({
                error: "Error eliminando reporte"
            }));
        }).catch(() => res.json({
            error: 'No se econtró el reporte'
        }));
    },
    actualizar: function(req, res){
        Reporte.update({
            descripcion: req.body.descripcion,
            id_cliente: req.body.id_cliente,
            id_producto: req.body.id_producto,
            id_tipo_reporte: req.body.id_tipo_reporte
        }, {
            where: {
                id: req.body.id
            }
        }).then(() => res.json({
            success: 'El reporte se actualizó'
        })).catch(() => res.json({
            error: 'No se puede actualizar el reporte'
        }));
    },
    listar: function(req, res){
        Reporte.findAll({raw: true}).then(rep => res.json(rep)).catch(() => res.json({
            error: 'No se puede listar los reportes'
        }));
    },
    listarPorId: function(req, res){
        Reporte.findOne({
            where: {
                id: req.params.id
            }
        }).then(rep => {
            if(rep) res.json({
                success: rep.dataValues
            });
            else res.json({
                success: null
            });
        }).catch(() => res.json({
            error: 'No se puede listar a este reporte'
        }));
    },
    obtenerTipoReportes: function(req, res){
        TipoReporte.findAll({raw: true}).then(rep => res.json(rep)).catch(() => res.json({
            error: 'No se puede listar los reportes'
        }));
    }
}