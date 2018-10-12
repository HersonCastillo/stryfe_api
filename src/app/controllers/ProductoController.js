var Producto = require('../models/Producto');
var fs = require('fs');
var p = require('path');

module.exports = {
    insertar: function (req, res) {
        var randomString = function (len, bits) {
            bits = bits || 36;
            var outStr = "", newStr;
            while (outStr.length < len) {
                newStr = Math.random().toString(bits).slice(2);
                outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
            }
            return outStr.toUpperCase();
        }
        Producto.create({
            id: randomString(50, 16),
            cantidad: req.body.cantidad,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            id_color: req.body.id_color,
            id_estado_prod: req.body.id_estado_prod,
            id_rubro: req.body.id_rubro,
            id_subcategoria_prod: req.body.id_subcategoria_prod,
            id_talla: req.body.id_talla,
            img: req.body.img,
            precio: req.body.precio,
            stock_existente: req.body.stock_existente,
            stock_minimo: req.body.stock_minimo
        }).then(() => res.json({
            success: 'Producto guardado'
        })).catch(() => res.json({
            error: 'No se puede guardar este producto'
        }));
    },
    eliminar: function (req, res) {
        Producto.findOne({
            where: {
                id: req.params.id
            }
        }).then(prod => {
            let img = prod.dataValues.img;
            let url = "../../../disk/images/";
            let path = p.join(__dirname, url, img);
            fs.unlink(path, err => {
                if (err) res.json({
                    error: "La imagen está corrupta y no se puede eliminar en este momento."
                });
                else {
                    return prod.destroy().then(() => res.json({
                        success: "Producto eliminado con éxito"
                    })).catch(() => res.json({
                        error: "No se puede eliminar este producto"
                    }));
                }
            });
        }).catch(() => res.json({
            error: 'No se econtró el producto'
        }));
    },
    actualizar: function (req, res) {
        Producto.update({
            cantidad: req.body.cantidad,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            id_color: req.body.id_color,
            id_estado_prod: req.body.id_estado_prod,
            id_rubro: req.body.id_rubro,
            id_subcategoria_prod: req.body.id_subcategoria_prod,
            id_talla: req.body.id_talla,
            img: req.body.img,
            precio: req.body.precio,
            stock_existente: req.body.stock_existente,
            stock_minimo: req.body.stock_minimo
        }, {
                where: {
                    id: req.body.id
                }
            }).then(() => {
                if (req.body.img_aux) {
                    let img = req.body.img_aux;
                    let url = "../../../disk/images/";
                    let path = p.join(__dirname, url, img);
                    fs.unlink(path, err => {
                        if (err) res.json({
                            error: "No se puede sustituir la imagen"
                        });
                        else res.json({
                            success: 'El producto se actualizó'
                        });
                    });
                } else res.json({
                    success: 'El producto se actualizó'
                });
            }).catch(() => res.json({
                error: 'No se puede actualizar el producto'
            }));
    },
    listar: function (req, res) {
        Producto.findAll({ raw: true }).then(prod => res.json(prod)).catch(() => res.json({
            error: 'No se puede listar los productos'
        }));
    },
    listarPorId: function (req, res) {
        Producto.findOne({
            where: {
                id: req.params.id
            }
        }).then(prod => {
            if (prod) res.json({
                success: prod.dataValues
            });
            else res.json({
                success: null
            });
        }).catch(() => res.json({
            error: 'No se puede listar a este producto'
        }));
    },
    guardarImagen: function (req, res) {
        try {
            let gLink = "../../../disk/images/";
            let path = req.files.image.path;
            let type = req.files.image.type;
            let size = req.files.image.size;
            if (type === "image/png" || type == "image/jpg" || type == "image/jpeg") {
                if (size <= 2e7) {
                    let name = `${Math.round(Math.random() * 1e20).toString()}${p.extname(path)}`;
                    let newPath = p.join(__dirname, gLink, name);
                    let is = fs.createReadStream(path);
                    let os = fs.createWriteStream(newPath);
                    is.pipe(os);
                    is.on('end', () => fs.unlinkSync(path));
                    res.json({
                        success: "Imagen subida con éxito.",
                        code: 200,
                        imageName: name
                    });
                } else res.json({
                    error: "El archivo no se ha subido. [FAIL:Size]",
                    code: "El archivo pesa más de 20MB, el peso debe ser menor"
                });
            } else res.json({
                error: "El archivo no se ha subido. [FAIL:Type]",
                code: "El tipo del archivo no es correcto"
            });
        } catch (ex) {
            res.json({
                error: "El archivo no se ha subido. [FAIL:fs-error]",
                code: ex
            });
        }
    }
}