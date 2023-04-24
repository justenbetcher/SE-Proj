const express = require('express');

const app = express.Router();
app
    .patch('/', (req, res, next) => {
        res.status(200).send(new Date().valueOf().toString())
    })

module.exports = app;