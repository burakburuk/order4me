const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname + '/../', 'build'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: true,
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
                // vendor chunk
                vendor: {
                    name: 'vendor',
                    // sync + async chunks
                    chunks: 'all',
                    // import file path containing node_modules
                    test: /node_modules/,
                },
            },
        },
    },
});
