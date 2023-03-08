const express = require('express');
const users = require('../models/users');

const app = express.Router();
app
    .post('/:username/:password', (req, res, next) => {
        res.send(users.addUser(req.params.username, req.params.password))
    })

module.exports = app;