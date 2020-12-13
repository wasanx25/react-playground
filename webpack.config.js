const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/app.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [{
            test: /\.(tsx|ts)$/,
            include: path.resolve(__dirname, 'src'),
            use: ['babel-loader']
        }]
    }
}
