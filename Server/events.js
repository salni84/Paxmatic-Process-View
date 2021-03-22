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
                    res.status(500).json({status: 'error'});
                }else {
                    res.status(200).json(results)
                }
            }
        );
    });

    router.get('/sub/:parent', function (req, res) {
        db.query(
            'SELECT * FROM subprocess WHERE parent = ? order by position', [req.params.parent],
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


    router.get('/department/:parent', function (req, res) {
        db.query(
            'SELECT * FROM departmentprocess WHERE parent = ? order by position', [req.params.parent],
            (error, results) => {
                if (error) {
                    res.status(500).json({status: 'error'});
                }else {
                    res.status(200).json(results)
                }
            }
        );
    });

    router.get('/detail/:parent', function (req, res) {
        db.query(
            'SELECT * FROM detailprocess WHERE parent = ? order by position', [req.params.parent],
            (error, results) => {
                if (error) {
                    res.status(500).json({status: 'error'});
                }else {
                    res.status(200).json(results)
                }
            }
        );
    });

    router.get('/document/:coreElement', function (req, res) {
        db.query(
            'SELECT * FROM documents WHERE coreElement = ? order by id', [req.params.coreElement],
            (error, results) => {
                if (error) {
                    res.status(500).json({status: 'error'});
                }else {
                    res.status(200).json(results)
                }
            }
        );
    });

    router.get('/documents/:parent', function (req, res) {
        db.query(
            'SELECT * FROM documents WHERE parent = ? order by id', [req.params.parent],
            (error, results) => {
                if (error) {
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
                if (error) {
                    res.status(500).json({status: 'error'});
                }else {
                    res.status(200).json(results)
                }
            }
        )
    });

    router.delete('/department/:id', function (req, res) {
        db.query(
            'DELETE FROM departmentprocess WHERE id = ?', [req.params.id],
            (error,results) =>  {
                if (error) {
                    res.status(500).json({status: 'error'});
                }else {
                    res.status(200).json(results)
                }
            }
        )
    });

    router.delete('/detail/:id', function (req, res) {
        db.query(
            'DELETE FROM detailprocess WHERE id = ?', [req.params.id],
            (error,results) =>  {
                if (error) {
                    res.status(500).json({status: 'error'});
                }else {
                    res.status(200).json(results)
                }
            }
        )
    });

    router.delete('/documents/:id', function (req, res) {
        db.query(
            'DELETE FROM documents WHERE id = ?', [req.params.id],
            (error,results) =>  {
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
            let isVisible = req.body.isVisible;
            let visibleName = req.body.visibleName;

            db.query(
                'INSERT INTO basicprocess VALUES (?,?,?,?,?,?,?,?)', [null, level, name, color, form, position, isVisible, visibleName],
                (error, results) => {
                    if (error) {
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
        let visibleName = req.body.visibleName;

        db.query(
            'INSERT INTO subprocess VALUES (?,?,?,?,?,?,?,?)', [null, level, name, color, form, position, parent, visibleName],
            (error, results) => {
                if (error) {
                    res.status(500).json({status: 'error'});
                }else {
                    res.status(200).json(results)
                }
            });
    });

    router.post('/department/new', (req, res) => {

        let level = req.body.level;
        let name = req.body.name;
        let color = req.body.color;
        let form = req.body.form;
        let position = req.body.position;
        let parent = req.body.parent;
        let visibleName = req.body.visibleName;

        db.query(
            'INSERT INTO departmentprocess VALUES (?,?,?,?,?,?,?,?)', [null, level, name, color, form, position, parent, visibleName],
            (error, results) => {
                if (error) {
                    res.status(500).json({status: 'error'});
                }else {
                    res.status(200).json(results)
                }
            });
    });

    router.post('/detail/new', (req, res) => {

        let level = req.body.level;
        let name = req.body.name;
        let color = req.body.color;
        let form = req.body.form;
        let position = req.body.position;
        let parent = req.body.parent;
        let order = req.body.order;
        let isVisible = req.body.isVisible;
        let visibleName = req.body.visibleName;

        db.query(
            'INSERT INTO detailprocess VALUES (?,?,?,?,?,?,?,?,?,?)', [null, level, name, color, form, position, parent, order, isVisible, visibleName],
            (error, results) => {
                if (error) {
                    res.status(500).json({status: 'error'});
                }else {
                    res.status(200).json(results)
                }
            });
    });

    router.post('/documents/new', (req, res) => {

        let name = req.body.name;
        let link = req.body.link;
        let description = req.body.description;
        let parent = req.body.parent;
        let coreElement = req.body.coreElement;
        let nr = req.body.nr


        db.query(
            'INSERT INTO documents VALUES (?,?,?,?,?,?,?)', [null, name, link, description, parent, coreElement, nr ],
            (error, results) => {
                if (error) {
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
            let visibleName = req.body[x].visibleName;

            db.query(
                "UPDATE basicprocess SET position = ?, visibleName = ? WHERE id = ?", [position, visibleName, id],
                () => {})}

            res.status(200).json()
    });

    router.put('/sub', (req, res) => {

        for (let x = 0; x < req.body.length; x++) {
            let id = req.body[x].id;
            let position = req.body[x].position;
            let visibleName = req.body[x].visibleName;

            db.query(
                "UPDATE subprocess SET position = ?, visibleName = ? WHERE id = ?", [position, visibleName, id],
                () => {})}

        res.status(200).json()
    });


    router.put('/department', (req, res) => {

        for (let x = 0; x < req.body.length; x++) {
            let id = req.body[x].id;
            let position = req.body[x].position;
            let visibleName = req.body[x].visibleName;

            db.query(
                "UPDATE departmentprocess SET position = ?, visibleName = ? WHERE id = ?", [position, visibleName, id],
                () => {})}

        res.status(200).json()
    });

    router.put('/detail', (req, res) => {

        for (let x = 0; x < req.body.length; x++) {
            let id = req.body[x].id;
            let form = req.body[x].form;
            let position = req.body[x].position;
            let visibleName = req.body[x].visibleName;

            db.query(
                "UPDATE detailprocess SET position = ?, visibleName = ?, form = ? WHERE id = ?", [position, visibleName, form, id],
                () => {})}

        res.status(200).json()
    });


    return router
}

module.exports = createRouter;
