const mongoose = require('mongoose');

let count = 0;

const options = {
    autoIndex: false, // Don't build indexes
    reconnectTries: 30, // Retry up to 30 times
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    // geting rid off the depreciation errors
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connectWithRetry = () => {
    mongoose
        .connect('mongodb://localhost:27017/order4me', options)
        .then(() => {
            // eslint-disable-next-line no-console
            console.log('MongoDB is connected');
        })
        .catch((err) => {
            const errorMessage = `MongoDB connection unsuccessful, retry after 5 seconds. ${err}`;
            // eslint-disable-next-line no-console
            console.log(errorMessage, ++count);
            setTimeout(connectWithRetry, 5000);
        });
};

connectWithRetry();

exports.mongoose = mongoose;
