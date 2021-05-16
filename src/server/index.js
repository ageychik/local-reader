const router = require('express').Router();
const files = require('./files');

router.get('/', (req, res) => {
        res.json({
            status: 'API Its Working'
        });
    });
router.use('/files', files);


module.exports = router;