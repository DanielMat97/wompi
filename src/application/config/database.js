const mongoose = require('mongoose');
const { config_database } = require('./index');

module.exports = {
    connection: null,
    connect: () => {
        if (this.connection) return this.connection;
        return mongoose.connect(config_database.url, { useUnifiedTopology: true, useNewUrlParser: true }).then(connection => {
            this.connection = connection;
            console.log('Success db connect');
        }).catch(err => console.log(err))
    }
}