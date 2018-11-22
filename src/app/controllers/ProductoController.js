const Producto = require('../models/Producto');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const fs = require('fs');
const p = require('path');

module.exports = {
    insertar: function (req, res) {
        //generador del codigo
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
            success: 'Producto ingresado'
        })).catch(() => res.json({
            error: 'Error ingresando el producto'
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
                    error: "La imagen está corrupta y no se puede eliminar en este momento.",
                    code: err
                });
                else {
                    return prod.destroy().then(() => res.json({
                        success: "Producto eliminado"
                    })).catch(() => res.json({
                        error: "Error eliminando el producto"
                    }));
                }
            });
        }).catch(() => res.json({
            error: 'Error obteniendo el producto'
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
                            success: 'Producto actualizado; pero ocurrio un error sustituyendo la imagen'
                        });
                    });
                } else res.json({
                    success: 'Producto actualizado'
                });
            }).catch(() => res.json({
                error: 'Error actualizando producto'
            }));
    },
    listar: function (req, res) {
        Producto.findAll({
            raw: true
        }).then(prod => res.json(prod)).catch(err => res.json({
            error: 'Error listando los productos',
            code: err
        }));
    },
    listarPorId: function (req, res) {
        Producto.findOne({
            where: {
                id: req.params.id
            }
        }).then(prod => {
            if (prod) res.json(prod.dataValues);
            else res.json({});
        }).catch(() => res.json({
            error: 'Error obteniendo el producto'
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
                        success: "Imagen subida.",
                        code: 200,
                        imageName: name
                    });
                } else res.json({
                    error: "El archivo no se ha subido. [FAIL:Size]",
                    code: "El archivo demasido, el máximo a subir es de 20MB"
                });
            } else res.json({
                error: "El archivo no se ha subido. [FAIL:Type]",
                code: "El tipo del archivo no es correcto, solo se permite .png, .jpg y .jpeg"
            });
        } catch (ex) {
            res.json({
                error: "El archivo no se ha subido. [FAIL:fs-error]",
                code: ex
            });
        }
    },

    search: function(req, res){
        let producto = req.params.producto;
        Producto.findAll({
            raw: true,
            where:{
                nombre: {
                    [Op.like]: `%${producto}%`
                }
            }
        }).then(prod => res.json(prod)).catch(err => {
            console.log(err)
            res.json({
                error: 'Error buscando los productos',
                code: err
            })
        });
    }
}