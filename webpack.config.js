const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.m?js$/,
				loader: 'buble-loader',
				exclude: /node_modules/,
				include: path.join(__dirname, 'src'),
				options: {
					objectAssign: 'Object.assign'
				},
			},
		],
	},
	devServer: {
		port: 8080,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};