const express = require('express');
const routes = express.Router();

const schemyValidation = require('../middlewares/schemyValidation.middleware');
const newRideSchemy = require('../../../schema/ride.schema');

const rideController = require('../../../controllers/rides.controller');

routes.post('/new', schemyValidation(newRideSchemy), (req, res) => {
    try {
        const result = rideController.newRide(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'CREATE_NEW_RIDE_ERROR'
        });
    }
});

module.exports = routes;