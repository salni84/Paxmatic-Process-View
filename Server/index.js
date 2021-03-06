const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const events = require('./events');


if (process.env.NODE_ENV === 'prod'){

    const connection = mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: 'salerno84',
            database: 'process_Server'
        });

    connection.connect();

    const port = process.env.PORT || 8080;

    const app = express()
        .use(cors())
        .use(bodyParser.json())
        .use(events(connection));

    app.listen(port, () => {
        console.log(`Express server listening on port ${port}`)
    });


}

if (process.env.NODE_ENV === 'dev'){
    const connection = mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'test_Process'
        });

    connection.connect();

    const port = process.env.PORT || 8080;

    const app = express()
        .use(cors())
        .use(bodyParser.json())
        .use(events(connection));

    app.listen(port, () => {
        console.log(`Express server listening on port ${port}`)
    });


}




