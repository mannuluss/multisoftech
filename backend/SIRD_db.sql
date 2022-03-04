-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.7.3-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para sird_db
CREATE DATABASE IF NOT EXISTS `sird_db` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `sird_db`;

-- Volcando estructura para tabla sird_db.acciones
CREATE TABLE IF NOT EXISTS `acciones` (
  `id_acciones` int(11) NOT NULL AUTO_INCREMENT,
  `precio` float NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  PRIMARY KEY (`id_acciones`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla sird_db.cliente
CREATE TABLE IF NOT EXISTS `cliente` (
  `id_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(250) NOT NULL,
  `contrasena` varbinary(250) NOT NULL,
  PRIMARY KEY (`id_cliente`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla sird_db.destallesacciones
CREATE TABLE IF NOT EXISTS `destallesacciones` (
  `id_acciones` int(11) NOT NULL,
  `id_detalles` int(11) NOT NULL,
  PRIMARY KEY (`id_acciones`,`id_detalles`),
  KEY `id_detalles` (`id_detalles`),
  CONSTRAINT `destallesacciones_ibfk_1` FOREIGN KEY (`id_acciones`) REFERENCES `acciones` (`id_acciones`),
  CONSTRAINT `destallesacciones_ibfk_2` FOREIGN KEY (`id_detalles`) REFERENCES `detalles` (`id_detalle`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla sird_db.detalles
CREATE TABLE IF NOT EXISTS `detalles` (
  `id_detalle` int(11) NOT NULL AUTO_INCREMENT,
  `id_dispositivo` int(11) NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  PRIMARY KEY (`id_detalle`),
  KEY `id_dispositivo` (`id_dispositivo`),
  CONSTRAINT `detalles_ibfk_1` FOREIGN KEY (`id_dispositivo`) REFERENCES `dispositivo` (`numero_serie`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla sird_db.dispositivo
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

-- La exportación de datos fue deseleccionada.

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

-- La exportación de datos fue deseleccionada.

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

-- La exportación de datos fue deseleccionada.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
