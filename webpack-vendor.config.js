const webpack = require('webpack');
const path = require('path');

const outputPath = path.join(__dirname, 'public/js');

module.exports = {
	entry: {
		'vendor': [
			'jquery',
			'underscore',
			'angular',
			'moment'
		]
	},

	output: {
		filename: '[name].bundle.js',
		path: outputPath,
		library: '[name]_lib'
	},

	plugins: [
		new webpack.DllPlugin({
			path: outputPath + '/[name]-manifest.json',
			name: '[name]_lib'
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	]
}