require('dotenv').config();
const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const port = 3333;

const router = require('./app/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Welcome to CI/CD  POC!');
});

app.use('/info', router);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
