const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
let path = require('path');

const filename = (ext) => isDev ? `[name]${ext}` : `[hash]${ext}`; 

module.exports = function() {
  return [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    },
    {
      test: /\.hbs/,
      use: 'handlebars-loader'
    },
    {
      test: /\.css$/,
      use: [ 
        { 
          loader: MiniCssExtractPlugin.loader,
        }, 
        'css-loader'
      ]
    },
    {
      test: /\.s[ac]ss$/,
      use: [
        { 
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: "../  "
          }
        }, 
        'css-loader', 
        'sass-loader'
      ]
    },
    {
      test: /\.(jpeg|jpg|png|gif|svg|)$/i,
      type: `asset`,
      generator: {
             filename: `images/${filename('[ext]')}`
           },
    },
    // {
    //   test: /\.(jpeg|jpg|png|gif|svg|)$/i,
    //   use: [{
    //     loader: 'file-loader',
    //     options: {
    //       name: `./images/${filename('[ext]')}`
    //     }
    //   }]
    // },
    // {
    //   test: /\.(eot|svg|ttf|woff|woff2)$/,
    //   use: [{
    //     loader: 'file-loader',
    //     options: {
    //       name: `./fonts/${filename('[ext]')}`
    //     }
    //   }]
    // },
    {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      use: 'file-loader?name=fonts/[name].[ext]'
    },
  ]
}