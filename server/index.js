require("dotenv").config()
const express = require('express')
const app = express()

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const usersController = require('./controllers/users')
const timeController = require('./controllers/time')

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})

app.use('/', express.static('./client/dist'));
app.use(express.json());

app.get('*', (req, res) => {
  res.sendFile('index.html', {root: './client/dist'});
})

.use('/api/v1/users', usersController)
.use('/api/v1/time', timeController)

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});