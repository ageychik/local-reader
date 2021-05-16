const router = require('express').Router();
const formidable = require('formidable');

router
    .get('/', (req, res) => {
        console.log('rkrk')
    })
    .get('/view', (req, res) => {
        let username = req.params.username;

        console.log(req)
    })
    .post('/add', (req, res, next) => {
        // let userData = req;
        const form = formidable({ multiples: true });

        form.parse(req, (err, fields, files) => {
            if (err) {
                next(err);
                return;
            }
            res.json({ fields, files });
        });
        // res.json(userData)
    });
module.exports = router;