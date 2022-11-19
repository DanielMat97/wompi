const Schemy = require('schemy');

const Origin = new Schemy({
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true }
}, { strict: true });

const Destination = new Schemy({
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true }
}, { strict: true });

const NewRide = new Schemy({
    documentNumber: { type: String, required: true },
    origin: { type: Origin, required: true },
    destination: { type: Destination, required: true }
}, { strict: true });

module.exports = NewRide;
