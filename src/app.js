const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./server/index.js');
const app = express();
const PORT = process.env.PORT || 3030;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
    .use(bodyParser.json())
    .use(express.static('front'))
    .use('/api', routes)
    .listen(PORT, () => {
        console.log('Server started at http://localhost:' + PORT)
    });