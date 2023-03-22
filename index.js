require("dotenv").config();
const express = require('express');
const path = require("path");
const app = express();
const bodyParser = require('body-parser')
const port = 3333;

const router = require('./app/routes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))

app.get('/', (req, res) => {
  res.send('Welcome to spotify fake POC!');
});

app.use(`/songs`,router);

app.use(express.static(path.join(`${__dirname}`, "./storage")));



app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});