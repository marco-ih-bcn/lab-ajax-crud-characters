require('dotenv/config');

const express = require('express');

const hbs = require('hbs');

const app = express();

require('./config')(app);
const projectName = 'express-basic-auth';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;

const index = require('./routes/index');

app.use('/', index);

require('./error-handling')(app);

module.exports = app;
