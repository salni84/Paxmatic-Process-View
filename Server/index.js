const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const events = require('./events');
require("custom-env").env(true);
const port = process.env.PORT || 8080;

if (process.env.NODE_ENV === 'prod') {

    const connection = mysql.createConnection(
        {
            host: 'localhost',
            user: 'testuser',
            password: 'test',
            database: 'process_Server',
            port: process.env.PORT,
            insecureAuth: true
        });

    connection.connect();

    const app = express()
        .use(cors())
        .use(bodyParser.json())
        .use(events(connection));

    app.listen(port, () => {
        console.log(`Express server listening on port ${port}`)
    });
} else {

    const connection = mysql.createConnection(
        {
            host: 'localhost',
            user: 'testuser',
            password: 'test',
            database: 'test_Process',
            port: process.env.PORT,
            insecureAuth: true
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
