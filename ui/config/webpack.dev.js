const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        historyApiFallback: true, // html is served in place of any 404 responses.
        compress: true,
        port: 8000,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                pathRewrite: { '^/api': '/api' },
            },
        },
    },
});
