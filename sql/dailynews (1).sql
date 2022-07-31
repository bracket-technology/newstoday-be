-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 31 Jul 2022 pada 17.05
-- Versi server: 5.7.34-log
-- Versi PHP: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dailynews`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `bookmarks`
--

CREATE TABLE `bookmarks` (
  `bookmarksId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `newsId` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `bookmarks`
--

INSERT INTO `bookmarks` (`bookmarksId`, `userId`, `newsId`, `created_at`, `updated_at`) VALUES
(3, 75, 40, '2022-07-26 03:38:33', NULL),
(4, 75, 41, '2022-07-26 03:38:40', NULL),
(5, 36, 52, '2022-07-26 03:38:48', NULL),
(6, 76, 42, '2022-07-26 04:07:02', NULL),
(7, 76, 48, '2022-07-26 04:09:20', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `category`
--

CREATE TABLE `category` (
  `categoryId` int(11) NOT NULL,
  `categoryName` varchar(255) NOT NULL,
  `categoryImage` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `category`
--

INSERT INTO `category` (`categoryId`, `categoryName`, `categoryImage`, `created_at`, `updated_at`) VALUES
(6, 'Science', '1658506409683-628425578-readyplayerone.png', '2022-07-22 16:13:30', NULL),
(7, 'Entertainment', 'aa.jpg', '2022-07-23 11:44:51', NULL),
(8, 'Music', 'ss.jpg', '2022-07-23 11:44:51', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `comments`
--

CREATE TABLE `comments` (
  `commentId` int(11) NOT NULL,
  `newsId` int(11) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `comment` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `comments`
--

INSERT INTO `comments` (`commentId`, `newsId`, `userId`, `comment`, `created_at`, `updated_at`) VALUES
(1, 40, '29', 'nct dream', '2022-07-23 14:16:59', NULL),
(2, 40, '29', 'tidak sabarrrrrr', '2022-07-23 15:02:16', NULL),
(8, 40, '2', 'harus nonton sih ini', '2022-07-23 17:24:35', NULL),
(9, 39, '2', 'harus nonton sih ini', '2022-07-23 17:25:04', NULL),
(10, 40, '2', 'harus nonton sih ini', '2022-07-23 17:25:20', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `friends`
--

CREATE TABLE `friends` (
  `friendId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `followerId` int(11) NOT NULL,
  `status` enum('y','n') NOT NULL DEFAULT 'n',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `friends`
--

INSERT INTO `friends` (`friendId`, `userId`, `followerId`, `status`, `created_at`, `updated_at`) VALUES
(2, 25, 29, 'y', '2022-07-24 08:52:34', '2022-07-24 09:18:59'),
(3, 25, 30, 'y', '2022-07-24 08:53:07', '2022-07-24 09:20:53'),
(4, 25, 42, 'y', '2022-07-24 08:53:52', '2022-07-24 09:22:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `likes`
--

CREATE TABLE `likes` (
  `likeId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `newsId` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `likes`
--

INSERT INTO `likes` (`likeId`, `userId`, `newsId`, `created_at`, `updated_at`) VALUES
(1, 29, 40, '2022-07-23 17:30:49', NULL),
(4, 30, 43, '2022-07-25 15:24:32', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `news`
--

CREATE TABLE `news` (
  `newsId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `descriptionNews` text NOT NULL,
  `content` text NOT NULL,
  `newsImage` varchar(255) NOT NULL,
  `status` enum('publish','review','unpublish','non-active') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `news`
--

INSERT INTO `news` (`newsId`, `userId`, `categoryId`, `title`, `descriptionNews`, `content`, `newsImage`, `status`, `created_at`, `updated_at`) VALUES
(40, 36, 7, 'Samsung\'s New AI-Powered Photo Editing App Will Fix Your Blurry Images and More', 'Why corona never ends? Let’s see how its facts', ' <p>\n                <span>S</span>amsung has introduced a new artificial\n                intelligence-based photo editing app designed to clean up your\n                images with just one tap. Galaxy Enhance-X is built for Galaxy\n                phones running Android 10 or later, which includes the Galaxy S9\n                up to the S22 as well as several mid-range models in the Galaxy\n                A-series, among others. It\'s available to download for free now.\n              </p>\n              <h4>What Is Samsung Galaxy Enhance-X?</h4>\n              <p>\n                Galaxy Enhance-X was actually launched in early July, as\n                reported by SamMobile, yet has gone largely unnoticed by most\n                users. You can download the app through the Galaxy Store in the\n                US. It\'s rolling out in other countries as well, although at the\n                time of writing was not available everywhere. If it isn\'t\n                available where you are, you can try it out by sideloading the\n                version available at APKMirror, as long as you have a compatible\n                phone. APKMIrror is our top pick for safe places to download APK\n                files.\n              </p>\n              <p>\n                Enhance-X uses what\'s described as \"AI-based techniques\" to fix\n                and clean up your images. It offers several basic photo editing\n                tools, such as those for adjusting the brightness or applying\n                HDR effects. But there are also a few things that you\'d normally\n                only expect to find in more pro-level editing apps like\n                Lightroom. These include:\n              </p>\n              <p>\n                The app can also enlarge your photos by two or three times—this\n                is one of the most common uses of AI in photo editing apps,\n                although the results can sometimes vary wildly in quality. Not\n                that that matters too much, as the app saves the edited photo as\n                a copy, so you always have the original to fall back on if you\n                aren\'t happy with the results. Samsung\'s Galaxy Enhance-X looks\n                like another solid addition to the already impressive suite of\n                camera and photo editing tools the company provides for its\n                phones, tools that help it keep up with the likes of Apple and\n                Google in the photography stakes. The phones have been able to\n                shoot and edit RAW images for a while now, and have also picked\n                up the clever new Object Eraser tool that cleanly removes\n                unwanted objects or people from your photos.\n              </p>', '1658759594193-116325099-n7.jpg', 'publish', '2022-07-23 11:46:16', '2022-07-25 14:33:14'),
(41, 36, 7, 'Samsung\'s New AI-Powered Photo Editing App Will Fix Your Blurry Images and More', 'Why corona never ends? Let’s see how its facts', ' <p>\r\n                <span>S</span>amsung has introduced a new artificial\r\n                intelligence-based photo editing app designed to clean up your\r\n                images with just one tap. Galaxy Enhance-X is built for Galaxy\r\n                phones running Android 10 or later, which includes the Galaxy S9\r\n                up to the S22 as well as several mid-range models in the Galaxy\r\n                A-series, among others. It\'s available to download for free now.\r\n              </p>\r\n              <h4>What Is Samsung Galaxy Enhance-X?</h4>\r\n              <p>\r\n                Galaxy Enhance-X was actually launched in early July, as\r\n                reported by SamMobile, yet has gone largely unnoticed by most\r\n                users. You can download the app through the Galaxy Store in the\r\n                US. It\'s rolling out in other countries as well, although at the\r\n                time of writing was not available everywhere. If it isn\'t\r\n                available where you are, you can try it out by sideloading the\r\n                version available at APKMirror, as long as you have a compatible\r\n                phone. APKMIrror is our top pick for safe places to download APK\r\n                files.\r\n              </p>\r\n              <p>\r\n                Enhance-X uses what\'s described as \"AI-based techniques\" to fix\r\n                and clean up your images. It offers several basic photo editing\r\n                tools, such as those for adjusting the brightness or applying\r\n                HDR effects. But there are also a few things that you\'d normally\r\n                only expect to find in more pro-level editing apps like\r\n                Lightroom. These include:\r\n              </p>\r\n              <p>\r\n                The app can also enlarge your photos by two or three times—this\r\n                is one of the most common uses of AI in photo editing apps,\r\n                although the results can sometimes vary wildly in quality. Not\r\n                that that matters too much, as the app saves the edited photo as\r\n                a copy, so you always have the original to fall back on if you\r\n                aren\'t happy with the results. Samsung\'s Galaxy Enhance-X looks\r\n                like another solid addition to the already impressive suite of\r\n                camera and photo editing tools the company provides for its\r\n                phones, tools that help it keep up with the likes of Apple and\r\n                Google in the photography stakes. The phones have been able to\r\n                shoot and edit RAW images for a while now, and have also picked\r\n                up the clever new Object Eraser tool that cleanly removes\r\n                unwanted objects or people from your photos.\r\n              </p>', '1658759760218-581186192-n7.jpg', 'publish', '2022-07-23 11:46:16', '2022-07-25 14:36:00'),
(42, 36, 7, 'Samsung\'s New AI-Powered Photo Editing App Will Fix Your Blurry Images and More', 'Why corona never ends? Let’s see how its facts', ' <p>\r\n                <span>S</span>amsung has introduced a new artificial\r\n                intelligence-based photo editing app designed to clean up your\r\n                images with just one tap. Galaxy Enhance-X is built for Galaxy\r\n                phones running Android 10 or later, which includes the Galaxy S9\r\n                up to the S22 as well as several mid-range models in the Galaxy\r\n                A-series, among others. It\'s available to download for free now.\r\n              </p>\r\n              <h4>What Is Samsung Galaxy Enhance-X?</h4>\r\n              <p>\r\n                Galaxy Enhance-X was actually launched in early July, as\r\n                reported by SamMobile, yet has gone largely unnoticed by most\r\n                users. You can download the app through the Galaxy Store in the\r\n                US. It\'s rolling out in other countries as well, although at the\r\n                time of writing was not available everywhere. If it isn\'t\r\n                available where you are, you can try it out by sideloading the\r\n                version available at APKMirror, as long as you have a compatible\r\n                phone. APKMIrror is our top pick for safe places to download APK\r\n                files.\r\n              </p>\r\n              <p>\r\n                Enhance-X uses what\'s described as \"AI-based techniques\" to fix\r\n                and clean up your images. It offers several basic photo editing\r\n                tools, such as those for adjusting the brightness or applying\r\n                HDR effects. But there are also a few things that you\'d normally\r\n                only expect to find in more pro-level editing apps like\r\n                Lightroom. These include:\r\n              </p>\r\n              <p>\r\n                The app can also enlarge your photos by two or three times—this\r\n                is one of the most common uses of AI in photo editing apps,\r\n                although the results can sometimes vary wildly in quality. Not\r\n                that that matters too much, as the app saves the edited photo as\r\n                a copy, so you always have the original to fall back on if you\r\n                aren\'t happy with the results. Samsung\'s Galaxy Enhance-X looks\r\n                like another solid addition to the already impressive suite of\r\n                camera and photo editing tools the company provides for its\r\n                phones, tools that help it keep up with the likes of Apple and\r\n                Google in the photography stakes. The phones have been able to\r\n                shoot and edit RAW images for a while now, and have also picked\r\n                up the clever new Object Eraser tool that cleanly removes\r\n                unwanted objects or people from your photos.\r\n              </p>', '1658760137689-313424747-n7.jpg', 'publish', '2022-07-23 11:46:16', '2022-07-25 14:42:18'),
(43, 25, 7, 'NCT DREAM akan melangsungkan konser 3 hari', 'Why corona never ends? Let’s see how its facts', 'Konser akan berlangsung pada tanggal 29-31 juli', '1658674189215-900862206-nct-dream.jpg', 'publish', '2022-07-24 14:49:49', NULL),
(48, 36, 6, 'Apakah faiq suka musik?', 'ini adalah music kesukaan faqi', '<p class=\"ql-align-justify\">	Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? Apakah faiq suka musik? </p>', '1658773687967-11237052-n5.jpg', 'publish', '2022-07-25 18:28:07', NULL),
(51, 75, 8, 'test writer', 'adasdasd', '<p>asdasdasd</p>', '1658775598798-94076388-n1.jpg', 'review', '2022-07-25 18:59:58', NULL),
(52, 75, 6, 'hahaihihi writer', 'test', '<p>aadasdasd</p>', '1658775822572-587961885-n5.jpg', 'review', '2022-07-25 19:03:42', NULL),
(58, 80, 6, 'ini title role writer', 'adas', '<p>aasdasadas</p>', '1658816649597-577170597-n5.jpg', 'publish', '2022-07-26 06:24:09', NULL),
(59, 36, 7, 'title role admin', 'asdasdasd', '<p>adadasd</p>', '1658816732028-409911880-k1.jpg', 'publish', '2022-07-26 06:25:32', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `job` varchar(255) DEFAULT NULL,
  `description` text,
  `userImage` varchar(255) DEFAULT NULL,
  `role` enum('user','admin','writer') NOT NULL DEFAULT 'user',
  `isActive` enum('active','notActive') NOT NULL DEFAULT 'notActive',
  `code` varchar(255) NOT NULL,
  `request` enum('0','1') DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`userId`, `username`, `name`, `email`, `password`, `phone`, `job`, `description`, `userImage`, `role`, `isActive`, `code`, `request`, `created_at`, `updated_at`) VALUES
(29, 'novinovi', 'novi', 'pia.pio208@gmail.com', 'U2FsdGVkX18BHTgAzY5blM+CjB2q0W0+qdY8983NWLU=', '081234567890', '', '', '1658577501371-529345861-profile.png', 'user', 'active', '', '0', '2022-07-21 08:31:43', NULL),
(36, 'dhanisetiaji', 'dhani setiaji', 'dhani@esgebe.email', 'U2FsdGVkX1/VpJ0iVibuiPIWIMujTB1zgCoghgMKBHg=', '082132332', 'fullstack javascript', 'haii kawan kawan', '1658786321326-685039662-user1.jpg', 'admin', 'active', 'KLloCo5elYt1pkQEiCn6', '0', '2022-07-21 15:34:46', NULL),
(57, 'sangkanfaiq', 'Sangkan Faiq', 'sangkanfaiq@gmail.com', 'U2FsdGVkX19MvFj4K6ZuWUO1PQdc6WTVkUa3wFU9Jp4=', '0876543219', NULL, 'Pohon pisang di kagetin jantungnya copot gak ya?', 'https://divedigital.id/wp-content/uploads/2021/10/1-min.png', 'admin', 'active', '', '0', '2022-07-24 06:58:54', NULL),
(58, NULL, NULL, 'novpiana@gmail.com', 'U2FsdGVkX18103Vfy+6eN0opkAQ5U1ljhZd/k+sebD8=', '081234567890', NULL, NULL, 'https://divedigital.id/wp-content/uploads/2021/10/1-min.png', 'user', 'active', '', '1', '2022-07-24 15:01:54', NULL),
(74, NULL, NULL, 'tes9000@gmail.com', 'U2FsdGVkX1/XDrzmO5lKXdUMI1Sz3RVzZZfN6h9o4Xk=', '0888123456', NULL, NULL, 'https://divedigital.id/wp-content/uploads/2021/10/1-min.png', 'user', 'notActive', 'IT4fvMbyZfEsdorzIA7F', '1', '2022-07-25 15:21:32', NULL),
(75, NULL, NULL, 'pocong@gmail.com', 'U2FsdGVkX19MFOpNKGRjrG9WTGblZXau4w/BLouSGxw=', '12345678910', NULL, NULL, 'https://divedigital.id/wp-content/uploads/2021/10/1-min.png', 'writer', 'active', '', '0', '2022-07-25 18:32:01', NULL),
(76, 'ahmad', 'ahmad', 'ahmadvvahyudi@gmail.com', 'U2FsdGVkX184jzCnpXL46kgVELuShE1fKxt2bUaHKac=', '082556917786', 'Backend', 'ordinary people', 'https://divedigital.id/wp-content/uploads/2021/10/1-min.png', 'user', 'active', '', '0', '2022-07-26 01:22:37', NULL),
(77, 'testt', 'tesajaa', 'test@esgebe.email', 'U2FsdGVkX19u3jv/EgsIkXWlCT1J0jhOGegSvBDlkPo=', '6665567567', 'testt', 'testt', 'https://divedigital.id/wp-content/uploads/2021/10/1-min.png', 'writer', 'active', 'hvvv4sFriZnsWhOMhpu1', '0', '2022-07-26 03:19:14', NULL),
(79, 'hahahah', 'asdasda', 'test1@esgebe.email', 'U2FsdGVkX190Omns46+NDT1R38rFlc56BVVHunFVZhw=', '89343928432', 'hihii', 'nullasdasda', '1658814941153-712985607-user1.jpg', 'writer', 'active', '', '0', '2022-07-26 05:54:27', NULL),
(80, 'dioganteng', 'dio', 'test2@esgebe.email', 'U2FsdGVkX1+YdhIRYnuO2IntxyZcT+ocKoE4oiaLuv4=', '342423423432', 'ini job', 'ini about', '1658816606051-418708072-user1.jpg', 'writer', 'active', '', '0', '2022-07-26 06:20:17', NULL);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `bookmarks`
--
ALTER TABLE `bookmarks`
  ADD PRIMARY KEY (`bookmarksId`);

--
-- Indeks untuk tabel `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`categoryId`);

--
-- Indeks untuk tabel `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`commentId`);

--
-- Indeks untuk tabel `friends`
--
ALTER TABLE `friends`
  ADD PRIMARY KEY (`friendId`);

--
-- Indeks untuk tabel `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`likeId`);

--
-- Indeks untuk tabel `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`newsId`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `bookmarks`
--
ALTER TABLE `bookmarks`
  MODIFY `bookmarksId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `category`
--
ALTER TABLE `category`
  MODIFY `categoryId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `comments`
--
ALTER TABLE `comments`
  MODIFY `commentId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `friends`
--
ALTER TABLE `friends`
  MODIFY `friendId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `likes`
--
ALTER TABLE `likes`
  MODIFY `likeId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `news`
--
ALTER TABLE `news`
  MODIFY `newsId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
