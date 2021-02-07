const express = require('express');

function createRouter(db) {
    const router = express.Router();

    router.get('/basic', function (req, res, next) {
        db.query(
            'SELECT * FROM process',
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({status: 'error'});
                }else {
                    res.status(200).json(results)
                }
            }
        );
    });

    return router

}

module.exports = createRouter;
