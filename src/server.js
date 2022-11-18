const express = require('express');
const app = express();

const { config_server } = require('./application/config/index');

app.listen(config_server.port, () => {
    console.log('Server init on port: ' + config_server.port);
    app.use(`/${config_server.version}/${config_server.name}`, require('./infrastructure/adapters/http/routes'));
});