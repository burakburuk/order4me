/* eslint-disable global-require */
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');

const api = require('./api');
const logger = require('./logger');

const app = express();

// investigate this
app.use(express.static(path.join(__dirname, '../public')));

app.use(helmet());
app.use(compression());
app.use(express.json());

if (process.env.development) {
    // eslint-disable-next-line import/no-extraneous-dependencies
    const morgan = require('morgan'); // why is this being used?
    app.use(morgan('tiny')); // why is this being used?
}

api(app);

app.get('/', (req, res) => res.send('Home page'));

const port = process.env.PORT || 8080;
const ROOT_URL = `http://localhost:${port}`;

app.listen(port, (err) => {
    if (err) throw err;
    logger.info(`> Ready on ${ROOT_URL}`);
});
