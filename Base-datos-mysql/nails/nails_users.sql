-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: nails
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(9) NOT NULL,
  `apellido` varchar(55) NOT NULL,
  `email` varchar(55) NOT NULL,
  `password` varchar(60) NOT NULL,
  `terminos` varchar(2) NOT NULL,
  `rol` varchar(13) NOT NULL,
  `imagen` varchar(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Aline','Barbosa','gruba.aline@gmail.com','$2a$10$nb/oHXdFhl8ge0tSx0UnY.C1Ktfu/tE4SAEEUjwUVRHIvfk67Qgfa','on','Administrador','usuario-generico.png','2022-06-14 04:35:27','2022-07-10 22:51:57'),(2,'Sebastian','Antueno','seba.antueno@gmail.com','$2a$10$pCr/.LGHkgxr.iL/y5ZOTOJPE0XzZCHbsLEcIhNJPKSUSlnvZvKVa','on','Administrador','usuario-generico.png','2022-06-14 04:35:27','2022-06-14 04:35:27'),(3,'Diego','Alba Castillo','dlalba282@gmail.com','$2a$10$zH.GSP0J/9zEU3GyVPy2ZeVmsNSiFXjmImwwSFFkeOucAu9hthk9C','on','Administrador','usuario-generico.png','2022-06-14 04:35:27','2022-06-14 04:35:27'),(4,'Lorena','Zacarías','lore_zacariaz@gmail.com','$2a$10$jGqs4zt1imo9Gyi5zfP4XuQ97S3X2MuuqAPw9xNhd9HUzZPSXCqJW','on','Cliente','usuario-generico.png','2022-06-14 04:35:27','2022-06-14 04:35:27'),(5,'Catalina','Simoni','cata_simoni@hotmail.com','$2a$10$rX1RKWYFy1crBhMcq0FjLeCDrd2k047mjA4FE7ee3jvcSN6lLvipC','on','Cliente','usuario-generico.png','2022-07-04 23:08:48','2022-07-04 23:08:48'),(6,'Aline','Gruba','gruba_aline@hotmail.com','$2a$10$QbP4zhR4lF52XLHlkNctQ.Hj4CJcCs7RRSxPuYrUWavcloJMGjVYC','on','Administrador','usuario-generico.png','2022-07-06 01:24:43','2022-07-06 01:24:43'),(7,'mm','mm','g@hotmail.com','$2a$10$6sYLfrRfJB5SSGnr/rHUtu/3oDYEzvF8pBGEfdCKFeSBqXTKCoO32','on','Cliente','usuario-generico.png','2022-07-18 18:08:23','2022-07-18 18:08:23'),(8,'1234Test','1234Test','1234@test.com','$2a$10$vgyHV77s4YX7.oFozrSsRuGxh9lb3sCHr4/xmiP1qEIklszpAB/4i','on','Cliente','usuario-generico.png','2022-07-24 15:24:38','2022-07-24 15:24:38'),(9,'123Test1','123Test1','123@test1.com','$2a$10$nDnNgq4sod7Ohhex8QzX5.2zSUTtkdCkkIadJcxvHfTNDVI4gOBt6','on','Cliente','usuario-generico.png','2022-07-24 15:26:02','2022-07-24 15:26:02'),(10,'vvv','vvv','vvv@v.vom','$2a$10$Kcs.26mIYTC0AIGvH7yPbeo0gNwBtGe6YpIReKkxLpO4zVJPdUgQm','on','Cliente','usuario-generico.png','2022-07-26 00:51:47','2022-07-26 00:51:47'),(11,'vv','vv','vvv44@v.vom','$2a$10$tRm1VSYO13K0gPnPcu9DMegYfl7bqvDa/sJ3SOdjU7IUYa21SmOaC','on','Cliente','usuario-generico.png','2022-07-26 01:28:43','2022-07-26 01:28:43'),(12,'vrr','vvrr','vvrr@vvrr.com','$2a$10$BP6qnqBuISN5.wceq.CFB.dsRdHpEIEE4vwdiqTdoh4Uhq9W2D9s6','on','Cliente','usuario-generico.png','2022-07-26 01:36:38','2022-07-26 01:36:38');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-02 21:42:14
