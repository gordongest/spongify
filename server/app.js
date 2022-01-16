const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');

app.use(express.static('./src'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());

routes(app);

module.exports = app;