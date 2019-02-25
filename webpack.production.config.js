const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv').config({path: path.join(__dirname,'environment','prod')+'/.env'});


module.exports = () => {

    const envConfig = dotenv.parsed;

    console.log(envConfig);

    
    return {

        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        plugins: [
            new webpack.DefinePlugin({
                "process.env": JSON.stringify(envConfig),
            })
            
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.s?css$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                },
                {
                    test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg|png)(\?.*$|$)/,
                    use: {
                        loader: 'file-loader'
                    }
                },
                {
                    test: /\.less$/,
                    loader: 'less-loader' // compiles Less to CSS
                }
            ]
        },
        devtool: 'source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            port: 3001
        },
        mode: 'production'
    }
}