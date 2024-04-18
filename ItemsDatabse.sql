CREATE TABLE `items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `itemname` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `price` decimal(10, 2) NOT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `items` VALUES (NULL, 'smartwatch', 'wearable technology', 200.00, 35);
INSERT INTO `items` VALUES (NULL, 'gameconsole', 'Video Game Accessories', 69.00, 14);
INSERT INTO `items` VALUES (NULL, 'GPS navigator', 'GPS & Navigation', 365.00, 10);
INSERT INTO `items` VALUES (NULL, 'laptop', 'Computers & Accessories', 2200.00, 17);
INSERT INTO `items` VALUES (NULL, 'webcam', 'Computers & Accessories', 100.00, 25);
