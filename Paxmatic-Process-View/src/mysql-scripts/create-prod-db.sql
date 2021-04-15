DROP database if exists process_Server;
CREATE database process_Server;

DROP user if exists 'testuser'@'localhost';
CREATE user 'testuser'@'localhost' identified with mysql_native_password by 'test';

GRANT all privileges on process_Server.* to 'testuser'@'localhost';

flush privileges;

DROP table if exists
    process_Server.basicprocess,
    process_Server.subprocess,
    process_Server.departmentprocess,
    process_Server.detailprocess,
    process_Server.documents,
    process_Server.departments;

CREATE TABLE `process_Server`.`basicprocess`
(
    `id`          int         NOT NULL AUTO_INCREMENT,
    `level`       varchar(45) NOT NULL,
    `name`        varchar(45) NOT NULL,
    `color`       varchar(45) DEFAULT NULL,
    `form`        int         DEFAULT NULL,
    `position`    int         DEFAULT NULL,
    `isVisible`   TINYINT     DEFAULT NULL,
    `visibleName` varchar(45) DEFAULT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `process_Server`.`subprocess`
(
    `id`          int NOT NULL AUTO_INCREMENT,
    `level`       varchar(45) DEFAULT NULL,
    `name`        varchar(45) DEFAULT NULL,
    `color`       varchar(45) DEFAULT NULL,
    `form`        int         DEFAULT NULL,
    `position`    int         DEFAULT NULL,
    `parent`      varchar(45) DEFAULT NULL,
    `visibleName` varchar(45) DEFAULT NULL,
    PRIMARY KEY (`id`)
);


CREATE TABLE `process_Server`.`departmentprocess`
(

    `id`          int NOT NULL AUTO_INCREMENT,
    `level`       varchar(45) DEFAULT NULL,
    `name`        varchar(45) DEFAULT NULL,
    `color`       varchar(45) DEFAULT NULL,
    `form`        int         DEFAULT NULL,
    `position`    int         DEFAULT NULL,
    `parent`      varchar(45) DEFAULT NULL,
    `visibleName` varchar(45) DEFAULT NULL,
    PRIMARY KEY (`id`)
);


CREATE TABLE `process_Server`.`detailprocess`
(

    `id`          int NOT NULL AUTO_INCREMENT,
    `level`       varchar(45) DEFAULT NULL,
    `name`        varchar(45) DEFAULT NULL,
    `color`       varchar(45) DEFAULT NULL,
    `form`        int         DEFAULT NULL,
    `position`    int         DEFAULT NULL,
    `parent`      varchar(45) DEFAULT NULL,
    `order`       int         DEFAULT NULL,
    `isVisible`   TINYINT     DEFAULT NULL,
    `visibleName` varchar(45) DEFAULT NULL,
    `isBubble`    TINYINT     DEFAULT NULL,
    PRIMARY KEY (`id`)
);


CREATE TABLE `process_Server`.`documents`
(
    `id`          int NOT NULL AUTO_INCREMENT,
    `link`        varchar(45) DEFAULT NULL,
    `description`  varchar(45) DEFAULT NULL,
    `coreElement` varchar(45) DEFAULT NULL,
    `nr`          varchar(45) DEFAULT NULL,
    `parent`      varchar(45) DEFAULT NULL,
    `name`        varchar(45) DEFAULT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `process_Server`.`departments`
(
    `id`    int NOT NULL AUTO_INCREMENT,
    `name`  varchar(45) DEFAULT NULL,
    `color` varchar(45) DEFAULT NULL,
    PRIMARY KEY (`id`)
);


INSERT into process_Server.basicprocess (id, level, name, color, form, position, isVisible, visibleName)
VALUES (null, 'basic', 'Projekt', 'green', 0, 0, 1, 'Projekt'),
       (null, 'basic', 'Admin', 'red', 0, 1, 1, 'Admin'),
       (null, 'basic', 'Service', 'blue', 0, 2, 1, 'Service');

INSERT into process_Server.subprocess (id, level, name, color, form, position, parent, visibleName)
VALUES (null, 'sub', 'Akquisition', 'red', 0, 0, 'Projekt', 'Akquisition'),
       (null, 'sub', 'Bestellung', 'green', 1, 1, 'Projekt', 'Bestellung'),
       (null, 'sub', 'Kickoff', 'red', 0, 2, 'Projekt', 'Kickoff');

INSERT into process_Server.departmentprocess (id, level, name, color, form, position, parent, visibleName)
VALUES (null, 'department', 'Service', 'red', 0, 0, 'Kickoff', 'Service'),
       (null, 'department', 'Ersatzteil', 'green', 0, 1, 'Kickoff', 'Ersatzteil'),
       (null, 'department', 'Kickoff', 'red', 1, 2, 'Kickoff', 'Kickoff');

INSERT into process_Server.detailprocess (id, level, name, color, form, position, parent, visibleName, isVisible,
                                          `order`, isBubble)
VALUES (null, 'detail', 'Kundenkontakt', 'red', 0, 0, 'Ersatzteil', 'Kundenkontakt', 1, 2, 0),
       (null, 'detail', 'Abnahme', 'green', 0, 1, 'Ersatzteil', 'Abnahme', 1, 3, 0),
       (null, 'detail', 'Kickoff', 'red', 1, 2, 'Ersatzteil', 'Kickoff', 1, 4, 0),
       (null, 'detail', 'Bestellung', 'green', 1, 2, 'Ersatzteil', 'Bestellung', 1, 3, 0);

INSERT into process_Server.documents (id, name, link, description, parent, coreElement, nr)
VALUES (null, 'checkliste', 'docs/checkliste.pdf', 'liste zum checken', 'Ersatzteil', 'Abnahme', '1-00-1');

INSERT into process_Server.departments (id, name, color)
VALUES (null, 'Projektleitung', 'blue'),
       (null, 'Fertigung', 'green'),
       (null, 'Reparatur', 'yellow');
