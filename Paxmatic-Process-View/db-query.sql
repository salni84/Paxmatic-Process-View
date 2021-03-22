DROP table if exists basicprocess, subprocess, departmentprocess;

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

CREATE TABLE `subprocess` (
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


INSERT into basicprocess (id, level, name, color, form, position, isVisible, visibleName)
VALUES
       (null, 'basic', 'projekt', 'green', 0, 0, 1, 'Projekt' ),
       (null, 'basic', 'admin', 'red', 0, 1, 1, 'Admin'),
       (null, 'basic', 'service', 'blue', 0, 2, 1, 'Service');

INSERT into subprocess (id, level, name, color, form, position, parent, visibleName)
VALUES
    (null, 'sub', 'akquisition', 'red', 0, 0, 'Projekt', 'Akquisition'),
    (null, 'sub', 'bestellung', 'green', 1, 1, 'Projekt', 'Bestellung'),
    (null, 'sub', 'kickoff', 'red', 0, 2, 'Projekt', 'Kickoff');


