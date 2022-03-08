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
CREATE DATABASE IF NOT EXISTS `sird_db`;
USE `sird_db`;

-- Volcando estructura para tabla sird_db.accion
CREATE TABLE IF NOT EXISTS `accion` (
  `id_accion` int(11) NOT NULL AUTO_INCREMENT,
  `precio` float NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  PRIMARY KEY (`id_accion`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;



-- Volcando estructura para tabla sird_db.cliente
CREATE TABLE IF NOT EXISTS `cliente` (
  `id_cliente` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) NOT NULL,
  `apellido` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  PRIMARY KEY (`id_cliente`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;



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

-- Volcando datos para la tabla sird_db.dispositivo: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `dispositivo` DISABLE KEYS */;
/*!40000 ALTER TABLE `dispositivo` ENABLE KEYS */;


-- Volcando estructura para tabla sird_db.detalle
CREATE TABLE IF NOT EXISTS `detalle` (
  `id_detalle` int(11) NOT NULL AUTO_INCREMENT,
  `id_dispositivo` int(11) NOT NULL,
  `id_accion` int(11) NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  PRIMARY KEY (`id_detalle`),
  KEY `id_dispositivo` (`id_dispositivo`),
  CONSTRAINT `detalle_ibfk_1` FOREIGN KEY (`id_dispositivo`) REFERENCES `dispositivo` (`numero_serie`),
  CONSTRAINT `detalle_ibfk_2` FOREIGN KEY (`id_accion`) REFERENCES `accion` (`id_accion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla sird_db.detalle: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `detalle` DISABLE KEYS */;
/*!40000 ALTER TABLE `detalle` ENABLE KEYS */;


-- Volcando estructura para tabla sird_db.personal
CREATE TABLE IF NOT EXISTS `personal` (
  `id_personal` int(11) NOT NULL AUTO_INCREMENT,
  `id_encargado` int(11) DEFAULT NULL,
  `t_personal` varchar(250) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `apellido` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `contrasena` varchar(100) NOT NULL,
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
  `id_detalle` int(11) NOT NULL,
  `id_tecnico` int(11) NOT NULL,
  `fecha_solicitud` datetime NOT NULL,
  PRIMARY KEY (`id_solicitud`),
  KEY `id_cliente` (`id_cliente`),
  KEY `id_detalle` (`id_detalle`),
  KEY `id_tecnico` (`id_tecnico`),
  CONSTRAINT `solicitud_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id_cliente`),
  CONSTRAINT `solicitud_ibfk_2` FOREIGN KEY (`id_detalle`) REFERENCES `detalle` (`id_detalle`),
  CONSTRAINT `solicitud_ibfk_3` FOREIGN KEY (`id_tecnico`) REFERENCES `personal` (`id_personal`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla sird_db.solicitud: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `solicitud` DISABLE KEYS */;
/*!40000 ALTER TABLE `solicitud` ENABLE KEYS */;

-- Volcando datos para la tabla sird_db.accion: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `accion` DISABLE KEYS */;
INSERT INTO `accion` (`id_accion`, `precio`, `descripcion`) VALUES
	(1, 25000, 'Mantenimientos general sin cambio de pasta termica'),
	(2, 35000, 'Mantenimiento general con cambio de pasta termica'),
	(3, 35000, 'Formateo sensillo'),
	(4, 75000, 'Mantenimineto y formateo');
/*!40000 ALTER TABLE `accion` ENABLE KEYS */;

-- Volcando datos para la tabla sird_db.cliente: ~7 rows (aproximadamente)
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` (`id_cliente`, `nombre`, `apellido`, `email`, `contrasena`) VALUES
	(1, 'Juan', 'Torres', 'jtorres@gmail.com', '$12$1H854bNIdoJgIATNUytbyOSAFPRHTPMetDNrIJIAGk5l9wtXib8cW'),
	(2, 'Horacio', 'Camacho', 'horus@hotmail.com', '$12$1H854bNIdoJgIATNUytbyOSAFPRHTPMetDNrIJIAGk5l9wtXib8cW'),
	(3, 'Andres', 'Felipe', 'mannulus@gmail.com', '$12$1H854bNIdoJgIATNUytbyOSAFPRHTPMetDNrIJIAGk5l9wtXib8cW'),
	(4, 'Diego', 'Landines', 'gatitacaliente123@gmail.com', '$12$1H854bNIdoJgIATNUytbyOSAFPRHTPMetDNrIJIAGk5l9wtXib8cW'),
	(5, 'Valentina', 'Escobar', 'nenitq@gmail.com', '$12$1H854bNIdoJgIATNUytbyOSAFPRHTPMetDNrIJIAGk5l9wtXib8cW'),
	(6, 'Eduardo', 'Gonzales', 'degosan00@gmail.com', '$12$1H854bNIdoJgIATNUytbyOSAFPRHTPMetDNrIJIAGk5l9wtXib8cW'),
	(7, 'Daniel', 'Leon', 'danle@gmail.com', '$12$1H854bNIdoJgIATNUytbyOSAFPRHTPMetDNrIJIAGk5l9wtXib8cW');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;

-- Volcando datos para la tabla sird_db.dispositivo: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `dispositivo` DISABLE KEYS */;
INSERT INTO `dispositivo` (`numero_serie`, `id_cliente`, `espesificaciones`, `tipo_dispositivo`, `referencia`, `fabricante`) VALUES
	(24, 1, 'INTEL_i7_7700T_8_1TB_256GB_NVIDIA_GTX1650SUPER_8GB', 'PERSONAL COMPUTERS', 'GENERIC', 'GENERIC'),
	(21342135, 3, 'INTEL_i7_7700T_8_1TB_256GB_NVIDIA_GTX1650SUPER_8GB', 'PERSONAL COMPUTERS', 'GENERIC', 'LENOVO'),
	(63708583, 1, 'INTEL_i7_7700T_8_1TB_256GB_NVIDIA_GTX1650SUPER_8GB', 'PERSONAL COMPUTERS', 'GENERIC', 'GENERIC'),
	(87853562, 4, 'INTEL_i7_7700T_8_1TB_256GB_NVIDIA_GTX1650SUPER_8GB', 'PERSONAL COMPUTERS', 'GENERIC', 'MSI'),
	(88796453, 6, 'INTEL_i7_7700T_8_1TB_256GB_NVIDIA_GTX1650SUPER_8GB', 'PERSONAL COMPUTERS', 'GENERIC', 'MSI'),
	(123543645, 3, 'INTEL_i7_7700T_8_1TB_256GB_NVIDIA_GTX1650SUPER_8GB', 'PERSONAL COMPUTERS', 'GENERIC', 'ACER'),
	(123546565, 4, 'INTEL_i7_7700T_8_1TB_256GB_NVIDIA_GTX1650SUPER_8GB', 'PERSONAL COMPUTERS', 'GENERIC', 'ASUS'),
	(124353648, 1, 'INTEL_i7_7700T_8_1TB_256GB_NVIDIA_GTX1650SUPER_8GB', 'PERSONAL COMPUTERS', 'GENERIC', 'HP'),
	(134534531, 7, 'INTEL_i7_7700T_8_1TB_256GB_NVIDIA_GTX1650SUPER_8GB', 'PERSONAL COMPUTERS', 'GENERIC', 'LENOVO'),
	(234366567, 1, 'INTEL_i7_7700T_8_1TB_256GB_NVIDIA_GTX1650SUPER_8GB', 'PERSONAL COMPUTERS', 'GENERIC', 'ASUS'),
	(234627657, 7, 'INTEL_i7_7700T_8_1TB_256GB_NVIDIA_GTX1650SUPER_8GB', 'PERSONAL COMPUTERS', 'GENERIC', 'LENOVO'),
	(254267245, 4, 'INTEL_i7_7700T_8_1TB_256GB_NVIDIA_GTX1650SUPER_8GB', 'PERSONAL COMPUTERS', 'GENERIC', 'LENOVO'),
	(1232435346, 2, 'INTEL_i7_7700T_8_1TB_256GB_NVIDIA_GTX1650SUPER_8GB', 'PERSONAL COMPUTERS', 'GENERIC', 'ACER'),
	(1244645786, 2, 'INTEL_i7_7700T_8_1TB_256GB_NVIDIA_GTX1650SUPER_8GB', 'PERSONAL COMPUTERS', 'GENERIC', 'HP');
/*!40000 ALTER TABLE `dispositivo` ENABLE KEYS */;

-- Volcando datos para la tabla sird_db.personal: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `personal` DISABLE KEYS */;
INSERT INTO `personal` (`id_personal`, `id_encargado`, `t_personal`, `nombre`, `apellido`, `email`, `contrasena`, `especialidad`) VALUES
	(1, NULL, 'TECNICO', 'Andres', 'Rodrigez', 'andresrdz@gmail.com', '$12$1H854bNIdoJgIATNUytbyOSAFPRHTPMetDNrIJIAGk5l9wtXib8cW', 'GENERICO'),
	(2, NULL, 'TECNICO', 'Camilo', 'Acosta', 'Camiloacs@gmail.com', '$12$1H854bNIdoJgIATNUytbyOSAFPRHTPMetDNrIJIAGk5l9wtXib8cW', 'GENERICO'),
	(3, NULL, 'TECNICO', 'Felipe', 'Cardenas', 'felipecrd@gmail.com', '$12$1H854bNIdoJgIATNUytbyOSAFPRHTPMetDNrIJIAGk5l9wtXib8cW', 'GENERICO');
/*!40000 ALTER TABLE `personal` ENABLE KEYS */;


-- Volcando estructura para procedimiento sird_db.crearCliente
DELIMITER //
CREATE PROCEDURE `crearCliente`(
	IN `nm` VARCHAR(250),
	IN `lstnm` VARCHAR(250),
	IN `ml` VARCHAR(250),
	IN `pssw` VARCHAR(250)
)
BEGIN
	INSERT INTO cliente VALUES (nm,lstnm,ml,pssw);
END//
DELIMITER ;

-- Volcando estructura para procedimiento sird_db.crearDetalle
DELIMITER //
CREATE PROCEDURE `crearDetalle`(
	IN `idDisp` INT,
	IN `descpDisp` VARCHAR(250),
	IN `idcc` INT
)
BEGIN
INSERT INTO  detalle VALUES (idDisp,idcc,descpDisp);
END//
DELIMITER ;

-- Volcando estructura para procedimiento sird_db.crearSolicitud
DELIMITER //
CREATE PROCEDURE `crearSolicitud`(
	IN `stSlct` TINYINT,
	IN `idClnt` INT,
	IN `idDtll` INT,
	IN `idTc` INT
)
BEGIN
INSERT INTO  solicitud VALUES (stSlct,idClnt,idDtll,idTc, SYSDATE());
END//
DELIMITER ;

-- Volcando estructura para procedimiento sird_db.crearDispositivo
DELIMITER //
CREATE PROCEDURE `crearDispositivo`(
	IN `Nsr` INT,
	IN `idClt` INT,
	IN `spc` VARCHAR(250),
	IN `tDsp` VARCHAR(250),
	IN `rfc` VARCHAR(250),
	IN `fbct` VARCHAR(250)
)
BEGIN
INSERT INTO dispositivo VALUES(Nsr, idClt, rfc, tDsp, rfc, fbct);
END//
DELIMITER ;


/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
