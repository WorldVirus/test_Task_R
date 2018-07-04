const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  inject: "body"
});

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },{
          test: /\.css$/,
          use: ['style-loader',
                'css-loader']
        },{
         test: /\.(png|svg|jpg|gif|jpeg)$/,
         use: ['file-loader']
          },{
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: ['file-loader']
          }
      ]
    },  
    plugins: [htmlPlugin]
  };