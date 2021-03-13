const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const events = require('./events');
require("custom-env").env(true);
const port = process.env.PORT || 8080;

if (process.env.NODE_ENV === 'prod'){

    const connection = mysql.createConnection(
        {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PWD,
            database: process.env.DB_NAME,
            port: process.env.PORT
        });

    connection.connect();

    const app = express()
        .use(cors())
        .use(bodyParser.json())
        .use(events(connection));

    app.listen(port, () => {
        console.log(`Express server listening on port ${port}`)
    });
}

else {

    const connection = mysql.createConnection(
        {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PWD,
            database: process.env.DB_NAME,
            port: process.env.PORT,
            insecureAuth : true
        });

    connection.connect();

    const app = express()
        .use(cors())
        .use(bodyParser.json())
        .use(events(connection));

    app.listen(port, () => {
        console.log(`Express server listening on port ${port}`)
    });
}




