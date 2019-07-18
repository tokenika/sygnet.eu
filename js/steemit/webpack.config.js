var path = require('path');
module.exports = {
    mode: 'development',
    entry: ['./app.js'],
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    performance: {
        hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
    },
};
