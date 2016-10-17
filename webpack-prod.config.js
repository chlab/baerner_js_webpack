const webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

// add plugins
webpackConfig.plugins.push(new webpack.optimize.DedupePlugin());
webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
webpackConfig.plugins.push(new webpack.DefinePlugin({
	"process.env": {
		"NODE_ENV": JSON.stringify("production")
	}
}));

// add loaders
const stripLoader = require('strip-loader');
webpackConfig.module.loaders.push({
	test: /\.js$/,
	loader: stripLoader.loader('console.log')
});

module.exports = webpackConfig;