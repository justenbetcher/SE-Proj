const express = require('express');

const app = express.Router();
app
    .patch('/', (req, res, next) => {
        const now = new Date()
        res.send({
            year: now.getFullYear(),
            month: now.getMonth(),
            day: now.getDate(),
            hour: now.getHours(),
            minute: now.getMinutes(),
            second: now.getSeconds(),
            weekday: now.getDay(),
        })
    })

module.exports = app;