const express = require('express');
const healthController = require('../../../controllers/health.controller');
const routes = express.Router();

routes.get('/health', (_, res) => res.status(200).json(healthController()));

module.exports = routes;