-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-11-2018 a las 03:27:04
-- Versión del servidor: 5.7.14
-- Versión de PHP: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `stryfe`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `id_producto` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(50) COLLATE utf8_bin NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id`, `descripcion`, `createdAt`, `updatedAt`) VALUES
(3, 'Frameworks', '2018-10-12', '2018-10-12'),
(4, 'IDE', '2018-10-12', '2018-10-12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `color_prod`
--

CREATE TABLE `color_prod` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `descuento`
--

CREATE TABLE `descuento` (
  `id` int(11) NOT NULL,
  `monto` decimal(10,2) NOT NULL,
  `fech_in` date NOT NULL,
  `fech_fin` date NOT NULL,
  `id_prod` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `id_estado` int(11) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_cliente_forma`
--

CREATE TABLE `detalle_cliente_forma` (
  `id` int(11) NOT NULL,
  `numero` varchar(50) COLLATE utf8_bin NOT NULL,
  `correo` varchar(150) COLLATE utf8_bin NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `id_forma` int(11) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `detalle_cliente_forma`
--

INSERT INTO `detalle_cliente_forma` (`id`, `numero`, `correo`, `id_cliente`, `id_forma`, `createdAt`, `updatedAt`) VALUES
(1, 'IyMj', 'hersoncastillo12@hotmail.com', 8, 1, '2018-11-16', '2018-11-16');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_producto_orden`
--

CREATE TABLE `detalle_producto_orden` (
  `id` int(11) NOT NULL,
  `id_producto` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `id_orden` int(11) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_desc`
--

CREATE TABLE `estado_desc` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(50) COLLATE utf8_bin NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `estado_desc`
--

INSERT INTO `estado_desc` (`id`, `descripcion`, `createdAt`, `updatedAt`) VALUES
(1, 'Oferta por temporada', NULL, NULL),
(2, 'Descuento', NULL, NULL),
(3, 'Descuento para empleado', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_mensaje`
--

CREATE TABLE `estado_mensaje` (
  `id` int(11) NOT NULL,
  `detalle` varchar(150) COLLATE utf8_bin NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `estado_mensaje`
--

INSERT INTO `estado_mensaje` (`id`, `detalle`, `createdAt`, `updatedAt`) VALUES
(1, 'Visto', '2018-10-12', '2018-10-12'),
(2, 'Enviado', '2018-10-12', '2018-10-12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_orden`
--

CREATE TABLE `estado_orden` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(150) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `estado_orden`
--

INSERT INTO `estado_orden` (`id`, `descripcion`, `createdAt`, `updatedAt`) VALUES
(1, 'Entregada', NULL, NULL),
(2, 'Guardada', NULL, NULL),
(3, 'Enviada', NULL, NULL),
(4, 'Recibida', NULL, NULL),
(5, 'Extraviada', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_prod`
--

CREATE TABLE `estado_prod` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `estado_prod`
--

INSERT INTO `estado_prod` (`id`, `descripcion`, `createdAt`, `updatedAt`) VALUES
(1, 'Activo', NULL, NULL),
(2, 'Descontinuado', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formas_de_pago`
--

CREATE TABLE `formas_de_pago` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(50) COLLATE utf8_bin NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `formas_de_pago`
--

INSERT INTO `formas_de_pago` (`id`, `descripcion`, `createdAt`, `updatedAt`) VALUES
(1, 'PayPal', '2018-10-12', '2018-10-12'),
(2, 'Tarjeta Crédito/Débito', '2018-10-12', '2018-10-12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensaje`
--

CREATE TABLE `mensaje` (
  `id` int(11) NOT NULL,
  `mensaje` varchar(150) COLLATE utf8_bin NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_estado_mensaje` int(11) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `mensaje`
--

INSERT INTO `mensaje` (`id`, `mensaje`, `id_usuario`, `id_estado_mensaje`, `createdAt`, `updatedAt`) VALUES
(12, 'Reporte', 8, 1, '2018-11-08', '2018-11-08'),
(13, 'Me seinto emputado', 14, 1, '2018-11-16', '2018-11-16');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orden`
--

CREATE TABLE `orden` (
  `id` int(11) NOT NULL,
  `monto_total` decimal(10,0) NOT NULL,
  `direccion_aux` varchar(150) DEFAULT NULL,
  `token_verif` varchar(150) NOT NULL,
  `id_estado` int(11) NOT NULL,
  `id_detalle_forma` int(11) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `orden`
--

INSERT INTO `orden` (`id`, `monto_total`, `direccion_aux`, `token_verif`, `id_estado`, `id_detalle_forma`, `createdAt`, `updatedAt`) VALUES
(5, '1', 'Soyapango', '2304139290248574700', 2, 1, '2018-11-16', '2018-11-16');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` varchar(50) COLLATE utf8_bin NOT NULL,
  `nombre` varchar(150) COLLATE utf8_bin NOT NULL,
  `descripcion` varchar(150) COLLATE utf8_bin NOT NULL,
  `img` varchar(150) COLLATE utf8_bin NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `genero_prodc` tinyint(1) NOT NULL,
  `id_talla` int(11) NOT NULL,
  `id_color` int(11) NOT NULL,
  `id_subcategoria_prod` int(11) NOT NULL,
  `id_rubro` int(11) NOT NULL,
  `id_estado_prod` int(11) NOT NULL,
  `stock_existente` int(11) NOT NULL,
  `stock_minimo` int(11) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reporte`
--

CREATE TABLE `reporte` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(150) COLLATE utf8_bin NOT NULL,
  `id_tipo_reporte` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `id_producto` varchar(50) COLLATE utf8_bin NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rubro_prod`
--

CREATE TABLE `rubro_prod` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(50) COLLATE utf8_bin NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `rubro_prod`
--

INSERT INTO `rubro_prod` (`id`, `descripcion`, `createdAt`, `updatedAt`) VALUES
(1, 'Ropa', '2018-10-11', '2018-10-11');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subcategoria`
--

CREATE TABLE `subcategoria` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(50) COLLATE utf8_bin NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `subcategoria`
--

INSERT INTO `subcategoria` (`id`, `descripcion`, `id_categoria`, `createdAt`, `updatedAt`) VALUES
(2, 'Javascript', 3, '2018-10-12', '2018-10-12'),
(3, 'NetBeans', 4, '2018-10-12', '2018-10-12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `talla_prod`
--

CREATE TABLE `talla_prod` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `talla_prod`
--

INSERT INTO `talla_prod` (`id`, `descripcion`, `createdAt`, `updatedAt`) VALUES
(1, 'S', '2018-10-12', '2018-10-12'),
(2, 'M', '2018-10-12', '2018-10-12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_reporte`
--

CREATE TABLE `tipo_reporte` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(50) COLLATE utf8_bin NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `tipo_reporte`
--

INSERT INTO `tipo_reporte` (`id`, `descripcion`, `createdAt`, `updatedAt`) VALUES
(1, 'Queja', '2018-11-08', '2018-11-08'),
(2, 'Sugerencia', '2018-11-08', '2018-11-08');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_usuario`
--

CREATE TABLE `tipo_usuario` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(50) COLLATE utf8_bin NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `tipo_usuario`
--

INSERT INTO `tipo_usuario` (`id`, `descripcion`, `createdAt`, `updatedAt`) VALUES
(1, 'Administrador', NULL, NULL),
(2, 'Empleado', NULL, NULL),
(3, 'Cliente', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_bin NOT NULL,
  `apellido` varchar(100) COLLATE utf8_bin NOT NULL,
  `correo` varchar(100) COLLATE utf8_bin NOT NULL,
  `fecha_nac` date DEFAULT NULL,
  `dui` varchar(10) COLLATE utf8_bin DEFAULT NULL,
  `genero` tinyint(1) NOT NULL,
  `telefono` varchar(9) COLLATE utf8_bin DEFAULT NULL,
  `direccion` varchar(150) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(100) COLLATE utf8_bin NOT NULL,
  `img` varchar(150) COLLATE utf8_bin DEFAULT NULL,
  `verificado` tinyint(1) NOT NULL,
  `token` varchar(150) COLLATE utf8_bin NOT NULL,
  `id_tipo_usuario` int(11) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `apellido`, `correo`, `fecha_nac`, `dui`, `genero`, `telefono`, `direccion`, `password`, `img`, `verificado`, `token`, `id_tipo_usuario`, `createdAt`, `updatedAt`) VALUES
(3, 'Herson', 'Castillo', 'hcastillo@red4g.net', NULL, NULL, 0, NULL, NULL, '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', NULL, 1, '0ba86db2151c016522608aecf6df881b1e09c2360644695a403dbb0ca3e825a8', 1, '2018-10-12', '2018-11-08'),
(8, 'Herson', 'Castillo', 'hersoncastillo12@hotmail.com', '0099-01-30', '78542136-8', 1, '7753-2105', 'San Salvador', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', NULL, 1, '827b4083a4e73b6bcba1afd1e336fa87a5bfaf75a0f6813533f2930b21dc21c2', 3, '2018-11-08', '2018-11-16'),
(10, 'Walter', 'Corpeño', 'wecp123@gmail.com', NULL, NULL, 0, NULL, NULL, '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', NULL, 1, '677dbcecb6a778afa772efe4cd9f9477b702b3ec63692857150c23a381e1633c', 2, '2018-11-08', '2018-11-08'),
(14, 'Guillermo', 'Calderon', 'a1299r5@gmail.com', NULL, NULL, 0, NULL, NULL, '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', NULL, 1, '8276c1ddd30694b99ff4763dc48b2ef04d9cb4d77c7fe239e3596c9898978d06', 3, '2018-11-16', '2018-11-16');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_cliente` (`id_cliente`),
  ADD KEY `id_producto` (`id_producto`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `color_prod`
--
ALTER TABLE `color_prod`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `descuento`
--
ALTER TABLE `descuento`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_prod` (`id_prod`),
  ADD KEY `id_estado` (`id_estado`);

--
-- Indices de la tabla `detalle_cliente_forma`
--
ALTER TABLE `detalle_cliente_forma`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `numero` (`numero`),
  ADD UNIQUE KEY `correo` (`correo`),
  ADD KEY `id_forma` (`id_forma`),
  ADD KEY `id_cliente` (`id_cliente`);

--
-- Indices de la tabla `detalle_producto_orden`
--
ALTER TABLE `detalle_producto_orden`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_producto` (`id_producto`),
  ADD KEY `id_orden` (`id_orden`);

--
-- Indices de la tabla `estado_desc`
--
ALTER TABLE `estado_desc`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estado_mensaje`
--
ALTER TABLE `estado_mensaje`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estado_orden`
--
ALTER TABLE `estado_orden`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estado_prod`
--
ALTER TABLE `estado_prod`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `formas_de_pago`
--
ALTER TABLE `formas_de_pago`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `mensaje`
--
ALTER TABLE `mensaje`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_estado_mensaje` (`id_estado_mensaje`);

--
-- Indices de la tabla `orden`
--
ALTER TABLE `orden`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_estado` (`id_estado`),
  ADD KEY `orden_ibfk_1` (`id_detalle_forma`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_subcategoria_prod` (`id_subcategoria_prod`),
  ADD KEY `id_rubro` (`id_rubro`),
  ADD KEY `id_color` (`id_color`),
  ADD KEY `id_talla` (`id_talla`),
  ADD KEY `id_estado_prod` (`id_estado_prod`);

--
-- Indices de la tabla `reporte`
--
ALTER TABLE `reporte`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_tipo_reporte` (`id_tipo_reporte`),
  ADD KEY `id_cliente` (`id_cliente`),
  ADD KEY `id_producto` (`id_producto`);

--
-- Indices de la tabla `rubro_prod`
--
ALTER TABLE `rubro_prod`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `subcategoria`
--
ALTER TABLE `subcategoria`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subcategoria_ibfk_1` (`id_categoria`);

--
-- Indices de la tabla `talla_prod`
--
ALTER TABLE `talla_prod`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_reporte`
--
ALTER TABLE `tipo_reporte`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo` (`correo`),
  ADD UNIQUE KEY `dui` (`dui`),
  ADD KEY `id_tipo_usuario` (`id_tipo_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT de la tabla `color_prod`
--
ALTER TABLE `color_prod`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `descuento`
--
ALTER TABLE `descuento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `detalle_cliente_forma`
--
ALTER TABLE `detalle_cliente_forma`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `detalle_producto_orden`
--
ALTER TABLE `detalle_producto_orden`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `estado_desc`
--
ALTER TABLE `estado_desc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `estado_mensaje`
--
ALTER TABLE `estado_mensaje`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `estado_orden`
--
ALTER TABLE `estado_orden`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `estado_prod`
--
ALTER TABLE `estado_prod`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `formas_de_pago`
--
ALTER TABLE `formas_de_pago`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `mensaje`
--
ALTER TABLE `mensaje`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT de la tabla `orden`
--
ALTER TABLE `orden`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `reporte`
--
ALTER TABLE `reporte`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `rubro_prod`
--
ALTER TABLE `rubro_prod`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `subcategoria`
--
ALTER TABLE `subcategoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `talla_prod`
--
ALTER TABLE `talla_prod`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `tipo_reporte`
--
ALTER TABLE `tipo_reporte`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `carrito_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `carrito_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`);

--
-- Filtros para la tabla `descuento`
--
ALTER TABLE `descuento`
  ADD CONSTRAINT `descuento_ibfk_1` FOREIGN KEY (`id_estado`) REFERENCES `estado_desc` (`id`),
  ADD CONSTRAINT `descuento_ibfk_2` FOREIGN KEY (`id_prod`) REFERENCES `producto` (`id`);

--
-- Filtros para la tabla `detalle_cliente_forma`
--
ALTER TABLE `detalle_cliente_forma`
  ADD CONSTRAINT `detalle_cliente_forma_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `detalle_cliente_forma_ibfk_2` FOREIGN KEY (`id_forma`) REFERENCES `formas_de_pago` (`id`);

--
-- Filtros para la tabla `detalle_producto_orden`
--
ALTER TABLE `detalle_producto_orden`
  ADD CONSTRAINT `detalle_producto_orden_ibfk_1` FOREIGN KEY (`id_orden`) REFERENCES `orden` (`id`),
  ADD CONSTRAINT `detalle_producto_orden_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`);

--
-- Filtros para la tabla `mensaje`
--
ALTER TABLE `mensaje`
  ADD CONSTRAINT `mensaje_ibfk_2` FOREIGN KEY (`id_estado_mensaje`) REFERENCES `estado_mensaje` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `mensaje_ibfk_3` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `orden`
--
ALTER TABLE `orden`
  ADD CONSTRAINT `orden_ibfk_1` FOREIGN KEY (`id_detalle_forma`) REFERENCES `detalle_cliente_forma` (`id`),
  ADD CONSTRAINT `orden_ibfk_2` FOREIGN KEY (`id_estado`) REFERENCES `estado_orden` (`id`);

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `producto_ibfk_2` FOREIGN KEY (`id_subcategoria_prod`) REFERENCES `subcategoria` (`id`),
  ADD CONSTRAINT `producto_ibfk_3` FOREIGN KEY (`id_rubro`) REFERENCES `rubro_prod` (`id`),
  ADD CONSTRAINT `producto_ibfk_4` FOREIGN KEY (`id_color`) REFERENCES `color_prod` (`id`),
  ADD CONSTRAINT `producto_ibfk_5` FOREIGN KEY (`id_talla`) REFERENCES `talla_prod` (`id`),
  ADD CONSTRAINT `producto_ibfk_6` FOREIGN KEY (`id_estado_prod`) REFERENCES `estado_prod` (`id`);

--
-- Filtros para la tabla `reporte`
--
ALTER TABLE `reporte`
  ADD CONSTRAINT `reporte_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `reporte_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`),
  ADD CONSTRAINT `reporte_ibfk_3` FOREIGN KEY (`id_tipo_reporte`) REFERENCES `tipo_reporte` (`id`);

--
-- Filtros para la tabla `subcategoria`
--
ALTER TABLE `subcategoria`
  ADD CONSTRAINT `subcategoria_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`id_tipo_usuario`) REFERENCES `tipo_usuario` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
