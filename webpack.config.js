module.exports = {
	entry: './scripts/main.js',
	output: {
		filename: 'build/bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ },
		]
	},
}
