const NewRideSchemy = require('../schema/ride.schema');

const newRide = ({ documentNumber, origin, destination }) => {
    console.log(documentNumber);
    console.log(origin);
    console.log(destination);
    return {
        documentNumber,
        ...origin,
        ...destination
    }
}

module.exports = {
    newRide
};
