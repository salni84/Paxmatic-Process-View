create database test_Process;
create user 'root' identified by 'password';
GRANT ALL PRIVILEGES ON test_Process.* TO 'root';
use test_Process;

CREATE TABLE `basicprocess` (
                                `id` int NOT NULL AUTO_INCREMENT,
                                `level` varchar(45) NOT NULL,
                                `name` varchar(45) NOT NULL,
                                `color` varchar(45) DEFAULT NULL,
                                `form` int DEFAULT NULL,
                                `position` int DEFAULT NULL,
                                `isVisible` tinyint DEFAULT NULL,
                                `visibleName` varchar(45) DEFAULT NULL,
                                PRIMARY KEY (`id`));

CREATE TABLE `departmentprocess` (
                                     `id` int NOT NULL AUTO_INCREMENT,
                                     `level` varchar(45) DEFAULT NULL,
                                     `name` varchar(45) DEFAULT NULL,
                                     `color` varchar(45) DEFAULT NULL,
                                     `form` int DEFAULT NULL,
                                     `position` int DEFAULT NULL,
                                     `parent` varchar(45) DEFAULT NULL,
                                     `visibleName` varchar(45) DEFAULT NULL,
                                     PRIMARY KEY (`id`)
);







