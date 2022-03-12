-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1:3306
-- Üretim Zamanı: 21 Ara 2021, 12:54:23
-- Sunucu sürümü: 5.7.31
-- PHP Sürümü: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `hastagya_deneme`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `hastagya_deneme`
--

DROP TABLE IF EXISTS `hastagya_deneme`;
CREATE TABLE IF NOT EXISTS `hastagya_deneme` (
  `INFO` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `LINK` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `INFORESIM` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `LINKRESIM` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `POINTERICON` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `POINTERSIZE` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `FILLCOLORR` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `FILLCOLORG` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `FILLCOLORB` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `BORDERCOLORR` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `BORDERCOLORG` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `BORDERCOLORB` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `BACKGROUNDCOLORR` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `BACKGROUNDCOLORG` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `BACKGROUNDCOLORB` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `BACKGROUNDOPACİTY` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `TEXTCOLORR` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `TEXTCOLORG` varchar(255) COLLATE utf8_turkish_ci NOT NULL,
  `TEXTCOLORB` varchar(255) COLLATE utf8_turkish_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Tablo döküm verisi `hastagya_deneme`
--

INSERT INTO `hastagya_deneme` (`INFO`, `LINK`, `INFORESIM`, `LINKRESIM`, `POINTERICON`, `POINTERSIZE`, `FILLCOLORR`, `FILLCOLORG`, `FILLCOLORB`, `BORDERCOLORR`, `BORDERCOLORG`, `BORDERCOLORB`, `BACKGROUNDCOLORR`, `BACKGROUNDCOLORG`, `BACKGROUNDCOLORB`, `BACKGROUNDOPACİTY`, `TEXTCOLORR`, `TEXTCOLORG`, `TEXTCOLORB`) VALUES
('hastagya_deneme', 'hastagya_deneme', 'at.png', 'at.png', 'at.png', 'on', '120', '120', '120', '120', '120', '120', '120', '120', '120', '50', '120', '120', '120'),
('', '', '', '', '', 'on', '120', '120', '120', '120', '120', '120', '120', '120', '120', '50', '120', '120', '120'),
('', '', '', '', '', 'on', '120', '120', '120', '120', '120', '120', '120', '120', '120', '50', '120', '120', '120'),
('', '', '', '', '', 'on', '120', '120', '120', '120', '120', '120', '120', '120', '120', '50', '120', '120', '120'),
('', '', '', '', '', 'on', '120', '120', '120', '120', '120', '120', '120', '120', '120', '50', '120', '120', '120'),
('', '', '', '', '', 'on', '120', '120', '120', '120', '120', '120', '120', '120', '120', '50', '120', '120', '120'),
('', '', '', '', '', 'on', '120', '120', '120', '120', '120', '120', '120', '120', '120', '50', '120', '120', '120'),
('', '', '', '', '', 'on', '120', '120', '120', '120', '120', '120', '120', '120', '120', '50', '120', '120', '120'),
('', '', '', '', '', 'on', '120', '120', '120', '120', '120', '120', '120', '120', '120', '50', '120', '120', '120'),
('', '', '', '', '', 'on', '120', '120', '120', '120', '120', '120', '120', '120', '120', '50', '120', '120', '120'),
('', '', '', '', '', 'on', '120', '120', '120', '120', '120', '120', '120', '120', '120', '50', '120', '120', '120'),
('', '', '', '', '', 'on', '120', '120', '120', '120', '120', '120', '120', '120', '120', '50', '120', '120', '120');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL,
  `username` varchar(100) COLLATE utf8_turkish_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_turkish_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Tablo döküm verisi `user`
--

INSERT INTO `user` (`id`, `username`, `password`) VALUES
(1, 'admin', '123456'),
(2, 'admin', '123');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
