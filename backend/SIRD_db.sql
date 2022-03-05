-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.7.3-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.3.0.6295
-- --------------------------------------------------------

-- Volcando estructura de base de datos para sird_db
CREATE DATABASE IF NOT EXISTS `sird_db`;
USE `sird_db`;

-- Volcando estructura para tabla sird_db.acciones
CREATE TABLE IF NOT EXISTS `acciones` (
  `id_acciones` int(11) NOT NULL AUTO_INCREMENT,
  `precio` float NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  PRIMARY KEY (`id_acciones`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla sird_db.acciones: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `acciones` DISABLE KEYS */;
INSERT IGNORE INTO `acciones` (`id_acciones`, `precio`, `descripcion`) VALUES
	(1, 25000, 'Mantenimientos general sin cambio de pasta termica'),
	(2, 35000, 'Mantenimiento general con cambio de pasta termica'),
	(3, 35000, 'Formateo sensillo'),
	(4, 75000, 'Mantenimineto y formateo');
/*!40000 ALTER TABLE `acciones` ENABLE KEYS */;

-- Volcando estructura para tabla sird_db.cliente
CREATE TABLE IF NOT EXISTS `cliente` (
  `id_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) NOT NULL,
  `apellido` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `contrasena` varchar(250) NOT NULL,
  PRIMARY KEY (`id_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla sird_db.cliente: ~7 rows (aproximadamente)
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT IGNORE INTO `cliente` (`id_cliente`, `nombre`, `apellido`, `email`, `contrasena`) VALUES
	(1, 'Juan', 'Torres', 'jtorres@gmail.com', ''),
	(2, 'Horacio', 'Camacho', 'horus@hotmail.com', ''),
	(3, 'Andres', 'Felipe', 'mannulus@gmail.com', ''),
	(4, 'Diego', 'Landines', 'gatitacaliente123@gmail.com', ''),
	(5, 'Valentina', 'Escobar', 'nenitq@gmail.com', ''),
	(6, 'Eduardo', 'Gonzales', 'degosan00@gmail.com', ''),
	(7, 'Daniel', 'Leon', 'danle@gmail.com', '');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;

-- Volcando estructura para tabla sird_db.destallesacciones
CREATE TABLE IF NOT EXISTS `destallesacciones` (
  `id_acciones` int(11) NOT NULL,
  `id_detalles` int(11) NOT NULL,
  PRIMARY KEY (`id_acciones`,`id_detalles`),
  KEY `id_detalles` (`id_detalles`),
  CONSTRAINT `destallesacciones_ibfk_1` FOREIGN KEY (`id_acciones`) REFERENCES `acciones` (`id_acciones`),
  CONSTRAINT `destallesacciones_ibfk_2` FOREIGN KEY (`id_detalles`) REFERENCES `detalles` (`id_detalle`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `dispositivo` (
  `numero_serie` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `espesificaciones` varchar(250) NOT NULL,
  `tipo_dispositivo` varchar(250) NOT NULL,
  `referencia` varchar(250) NOT NULL,
  `fabricante` varchar(250) NOT NULL,
  PRIMARY KEY (`numero_serie`),
  KEY `id_cliente` (`id_cliente`),
  CONSTRAINT `dispositivo_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id_cliente`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `detalles` (
  `id_detalle` int(11) NOT NULL AUTO_INCREMENT,
  `id_dispositivo` int(11) NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  PRIMARY KEY (`id_detalle`),
  KEY `id_dispositivo` (`id_dispositivo`),
  CONSTRAINT `detalles_ibfk_1` FOREIGN KEY (`id_dispositivo`) REFERENCES `dispositivo` (`numero_serie`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando estructura para tabla sird_db.personal
CREATE TABLE IF NOT EXISTS `personal` (
  `id_personal` int(11) NOT NULL AUTO_INCREMENT,
  `id_encargado` int(11) DEFAULT NULL,
  `t_personal` varchar(250) NOT NULL,
  `especialidad` varchar(250) NOT NULL,
  PRIMARY KEY (`id_personal`),
  KEY `id_encargado` (`id_encargado`),
  CONSTRAINT `personal_ibfk_1` FOREIGN KEY (`id_encargado`) REFERENCES `personal` (`id_personal`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla sird_db.personal: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `personal` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal` ENABLE KEYS */;

-- Volcando estructura para tabla sird_db.solicitud
CREATE TABLE IF NOT EXISTS `solicitud` (
  `id_solicitud` int(11) NOT NULL AUTO_INCREMENT,
  `estado_solicitud` tinyint(1) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `id_detalles` int(11) NOT NULL,
  `id_tecnico` int(11) NOT NULL,
  `fecha_solicitud` datetime NOT NULL,
  PRIMARY KEY (`id_solicitud`),
  KEY `id_cliente` (`id_cliente`),
  KEY `id_detalles` (`id_detalles`),
  KEY `id_tecnico` (`id_tecnico`),
  CONSTRAINT `solicitud_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id_cliente`),
  CONSTRAINT `solicitud_ibfk_2` FOREIGN KEY (`id_detalles`) REFERENCES `detalles` (`id_detalle`),
  CONSTRAINT `solicitud_ibfk_3` FOREIGN KEY (`id_tecnico`) REFERENCES `personal` (`id_personal`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO cliente (email,contrasena) VALUES ("felipe","$12$1H854bNIdoJgIATNUytbyOSAFPRHTPMetDNrIJIAGk5l9wtXib8cW");