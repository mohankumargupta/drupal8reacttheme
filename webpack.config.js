var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'js');

module.exports = {
    entry: APP_DIR + "/entry.js",
    output: {
        path: BUILD_DIR,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test:   /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            },
            {
                test: /\.js$/,
                include: APP_DIR,
                loader: 'babel'
            }
        ]
    },
    postcss: function () {
        return [require('autoprefixer'), require('precss')];
    }
}
