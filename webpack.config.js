/** * 使用dll文件 * 1. 把第三方库打包到一个文件 加速热更新 */var path = require('path');var webpack = require('webpack');var DllReferencePlugin = webpack.DllReferencePlugin;module.exports = {    devtool:'#cheap-eval-source-map',    entry: ['./src/index.js'    ],    output: {        path: path.join(__dirname, 'dist'),        filename: 'index.bundle.js',        publicPath: '/dist'    },    module: {        loaders: [            {                test: /\.jsx?/,                loader: 'babel',                exclude: /node_modules/            }        ]    },    plugins: [        new DllReferencePlugin({            context: __dirname,            manifest: require('./dll/manifest.json')//manifest 文件的位置        })    ]}