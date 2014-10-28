CREATE DATABASE  IF NOT EXISTS `bod` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `bod`;
-- MySQL dump 10.13  Distrib 5.6.17, for Win32 (x86)
--
-- Host: 127.0.0.1    Database: bod
-- ------------------------------------------------------
-- Server version	5.6.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answers`
--

DROP TABLE IF EXISTS `answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `answers` (
  `id_answers` int(11) NOT NULL AUTO_INCREMENT,
  `kjonn` varchar(45) DEFAULT NULL,
  `sivilstatus` varchar(45) DEFAULT NULL,
  `utdannelse` varchar(45) DEFAULT NULL,
  `personlighet` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `musikk` varchar(45) DEFAULT NULL,
  `drommegode` varchar(45) DEFAULT NULL,
  `planerforkvelden` varchar(45) DEFAULT NULL,
  `processed` tinyint(1) DEFAULT '0',
  `locked` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id_answers`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
