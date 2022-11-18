const express = require('express');
const routes = express();

const healthController = require('./health.route');

routes.use(healthController);

module.exports = routes;