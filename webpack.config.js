module.exports ={
    mode: 'production',
    entry: './src/index.js',
    module: {
        rules: [
            { test: /index\.js$/, use: '@linaria/webpack-loader' }
    ]
    },

}
