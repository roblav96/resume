module.exports = {
	runtimeCompiler: true,
	css: {
		sourceMap: process.env.NODE_ENV == 'development',
		loaderOptions: { sass: { sassOptions: { fiber: require('fibers') } } },
	},
	chainWebpack(config) {
		config.devtool(process.env.NODE_ENV == 'development' ? 'eval-source-map' : 'source-map')
		config.plugins.delete('no-emit-on-errors')
		config.plugin('friendly-errors').tap(args => {
			args[0].clearConsole = false
			return args
		})
	},
}
