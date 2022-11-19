const path = require('path');
require('dotenv').config({
    path: path.join(__dirname, '../../../.env')
});
module.exports = {
    config_server: {
        port: process.env.PORT || 8080,
        version: process.env.API_VERSION,
        name: process.env.API_NAME,
        timeout: process.env.TIMEOUT
    },
    config_database: {
        url: process.env.DB_URL
    }
}