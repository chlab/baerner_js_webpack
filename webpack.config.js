const webpack = require('webpack');
const path = require('path');

const outputPath = path.join(__dirname, 'public/js');

module.exports = {
	entry: {
		main: path.join(__dirname, 'src/main.js')
	},

	output: {
		filename: '[name].js',
		path: outputPath,
	},

	plugins: [
		new webpack.DllReferencePlugin({
			context: '.',
			manifest: require(outputPath + '/vendor-manifest.json')
			})
	],

	module: {
		loaders: []
	}
}