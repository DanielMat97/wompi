const express = require('express');
const routes = express();

const healthRoutes = require('./health.route');
const ridesRoutes = require('./rides.route');

routes.use(healthRoutes);
routes.use('/ride', ridesRoutes);

module.exports = routes;