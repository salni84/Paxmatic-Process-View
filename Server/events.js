const express = require('express');
const bodyParser = require("body-parser");


function createRouter(db) {
    const router = express.Router();
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(function (req, res) {
        res.end(JSON.stringify(req.body, null, 2))
    });



    router.get('/basic', function (req, res) {
        db.query(
            'SELECT * FROM basicprocess order by position',
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

    router.get('/sub/:parent', function (req, res) {
        console.log(req.body.parent)
        db.query(
            'SELECT * FROM subprocess WHERE parent = ? order by position', [req.params.parent],
            (error, results) => {
                console.log(results)
                if (error) {
                    console.log(error);
                    res.status(500).json({status: 'error'});
                }else {
                    res.status(200).json(results)
                }
            }
        );
    });



    router.delete('/basic/:id', function (req, res) {
        db.query(
            'DELETE FROM basicprocess WHERE id = ?', [req.params.id],
            (error,results) =>  {
                console.log(results)
                if (error) {
                    res.status(500).json({status: 'error'});
                }else {
                    res.status(200).json(results)
                }
            }
        )
    });


    router.delete('/sub/:id', function (req, res) {
        db.query(
            'DELETE FROM subprocess WHERE id = ?', [req.params.id],
            (error,results) =>  {
                console.log(results)
                if (error) {
                    res.status(500).json({status: 'error'});
                }else {
                    res.status(200).json(results)
                }
            }
        )
    });



    router.post('/basic/new', (req, res) => {

            let level = req.body.level;
            let name = req.body.name;
            let color = req.body.color;
            let form = req.body.form;
            let position = req.body.position;
            let parent = '';

            db.query(
                'INSERT INTO basicprocess VALUES (?,?,?,?,?,?,?)', [null, level, name, color, form, position, parent],
                (error, results) => {
                    if (error) {
                        console.log(error);
                        res.status(500).json({status: 'error'});
                    }else {
                        res.status(200).json(results)
                    }
            });
    });


    router.post('/sub/new', (req, res) => {

        let level = req.body.level;
        let name = req.body.name;
        let color = req.body.color;
        let form = req.body.form;
        let position = req.body.position;
        let parent = req.body.parent;

        db.query(
            'INSERT INTO subprocess VALUES (?,?,?,?,?,?,?)', [null, level, name, color, form, position, parent],
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({status: 'error'});
                }else {
                    res.status(200).json(results)
                }
            });
    });


    router.put('/basic', (req, res) => {

        for (let x = 0; x < req.body.length; x++) {
            let id = req.body[x].id;
            let position = req.body[x].position;

            db.query(
                "UPDATE basicprocess SET position = ? WHERE id = ?", [position, id],
                () => {})}

            res.status(200).json()
    });

    router.put('/sub', (req, res) => {

        for (let x = 0; x < req.body.length; x++) {
            let id = req.body[x].id;
            let position = req.body[x].position;

            db.query(
                "UPDATE subprocess SET position = ? WHERE id = ?", [position, id],
                () => {})}

        res.status(200).json()
    });


    return router
}

module.exports = createRouter;
