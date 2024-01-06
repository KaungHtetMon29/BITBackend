-- phpMyAdmin SQL Dump
-- version 5.2.1deb1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 06, 2024 at 01:56 PM
-- Server version: 8.0.35-0ubuntu0.23.04.1
-- PHP Version: 8.1.12-1ubuntu4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `BITdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `content_owner`
--

CREATE TABLE `content_owner` (
  `name` varchar(255) NOT NULL,
  `idx` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `content_owner`
--

INSERT INTO `content_owner` (`name`, `idx`) VALUES
('ခင္ေဆြဦး', 1),
('တိုးထက္', 2),
('မင္းကိုႏိုင္', 3),
('မိုးမိုး (အင္းလ်ား)', 4),
(' ႏိုင္ေဇာ္ (Lazy Club)', 5),
('Synergy Publishing', 6),
('သန္း၀င္းလိႈင္', 7),
('ရာျပည့္', 8),
('ခ်စ္ဦးညိဳ', 9),
('အၾကည္ေတာ္', 10);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int NOT NULL,
  `timestamp` bigint NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `postid` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `post` varchar(255) NOT NULL,
  `benefit` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `tag` varchar(255) NOT NULL,
  `userid` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `publisher`
--

CREATE TABLE `publisher` (
  `name` varchar(255) NOT NULL,
  `idx` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `publisher`
--

INSERT INTO `publisher` (`name`, `idx`) VALUES
('ခင္ေဆြဦး', 1),
('ဆင္ျဖဴကၽြန္း ေက်ာ္လႈိင္ဦး', 2),
('မင္းကိုႏိုင္', 3),
('မိုးမိုး (အင္းလ်ား)', 4),
(' ႏိုင္ေဇာ္ (Lazy Club)', 5),
(' ႏိုင္းႏိုင္းစေန', 6),
('သန္း၀င္းလိႈင္', 7),
('ရာျပည့္ဦးစိုးညြန္႕', 8),
('ခ်စ္ဦးညို', 9),
('အၾကည္ေတာ္', 10);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_book`
--

CREATE TABLE `tbl_book` (
  `idx` int UNSIGNED NOT NULL,
  `co_id` int NOT NULL,
  `publisher_id` int NOT NULL,
  `book_uniq_idx` varchar(255) NOT NULL,
  `bookname` varchar(255) NOT NULL,
  `prize` int NOT NULL,
  `cover_photo` longtext NOT NULL,
  `created_timetick` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `tbl_book`
--

INSERT INTO `tbl_book` (`idx`, `co_id`, `publisher_id`, `book_uniq_idx`, `bookname`, `prize`, `cover_photo`, `created_timetick`) VALUES
(166, 1, 1, '111', 'asdfsf', 10, '', NULL),
(167, 1, 1, '1111', 'asdfsf', 1000, '', NULL),
(169, 1, 1, '111111', 'asdfsf', 1000, '', NULL),
(171, 1, 1, '11111111', 'asdfsf', 1000, '', NULL),
(172, 1, 1, '111111111', 'asdfsf', 1000, '', NULL),
(173, 1, 1, '1111111111', 'asdfsf', 1000, '', NULL),
(174, 1, 1, '11111111111', 'asdfsf', 1000, '', NULL),
(175, 1, 1, '111111111111', 'asdfsf', 1000, '', NULL),
(176, 1, 1, '1111111111111', 'asdfsf', 1000, '', NULL),
(177, 1, 1, '11111111111111', 'asdfsf', 1000, '', NULL),
(178, 1, 1, '111111111111111', 'asdfsf', 1000, '', NULL),
(179, 1, 1, '1111111111111111', 'asdfsf', 1000011, '', NULL),
(187, 1, 1, 'sfasf', 'asfasdfsf', 1232133, '', NULL),
(193, 4, 1, 'fasfsaf', 'fasasf', 342134, '', NULL),
(195, 1, 4, 'sfsf', 'sdfasf', 123, '', NULL),
(196, 4, 10, 'fsfs', 'sfdsdfs', 344, '', NULL),
(197, 1, 1, 'fsadf', '341', 3123, '', NULL),
(198, 1, 1, 'fsfasfsf', 'ffasd', 131313, '', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `content_owner`
--
ALTER TABLE `content_owner`
  ADD PRIMARY KEY (`idx`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`postid`);

--
-- Indexes for table `publisher`
--
ALTER TABLE `publisher`
  ADD PRIMARY KEY (`idx`);

--
-- Indexes for table `tbl_book`
--
ALTER TABLE `tbl_book`
  ADD PRIMARY KEY (`idx`),
  ADD UNIQUE KEY `IDX_7b22a3d6b8be7c1787783a1bad` (`book_uniq_idx`),
  ADD KEY `FK_ab2d4ac85389ca9a9e6c36132d6` (`co_id`),
  ADD KEY `FK_d9516c0075e65b91468bb51f816` (`publisher_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `content_owner`
--
ALTER TABLE `content_owner`
  MODIFY `idx` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `postid` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `publisher`
--
ALTER TABLE `publisher`
  MODIFY `idx` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_book`
--
ALTER TABLE `tbl_book`
  MODIFY `idx` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=199;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_book`
--
ALTER TABLE `tbl_book`
  ADD CONSTRAINT `FK_ab2d4ac85389ca9a9e6c36132d6` FOREIGN KEY (`co_id`) REFERENCES `content_owner` (`idx`),
  ADD CONSTRAINT `FK_d9516c0075e65b91468bb51f816` FOREIGN KEY (`publisher_id`) REFERENCES `publisher` (`idx`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
