const express = require('express');
const app = express();

const { config_server } = require('./application/config/index');

const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.listen(config_server.port, () => {
    console.log('Server init on port: ' + config_server.port);
    app.use(`/${config_server.version}/${config_server.name}`, require('./infrastructure/adapters/http/routes'));
});