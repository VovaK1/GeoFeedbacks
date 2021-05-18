let path = require('path');
const rules = require('./webpack.config.rules')();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const Handlebars = require("handlebars");

const optimization = () => {
  const configObj = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if (isProd) {
      configObj.minimizer = [
        new CssMinimizerPlugin(),
        new TerserPlugin()
      ]
  }
  return configObj;
}

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[fullhash].${ext}`;

module.exports = {
  
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, './src/index.js')
  },
  devServer: {
    index: 'index.html'
  },
  output: {
    filename: `./js/${filename('js')}`,
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
    // assetModuleFilename: isProd ? 'assets/' : 'assets/'
  },
  optimization: optimization(),
  plugins: [
    new MiniCssExtractPlugin({
      filename: `./css/${filename('css')}`,
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      title: 'GeoFeedback',
      template: path.resolve(__dirname, './src/index.hbs'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {from: path.resolve(__dirname, './src/images') , to: path.resolve(__dirname, './dist/images')}
    //   ]
    // })
  ],
  devtool: isProd ? false : 'source-map',
  module: {rules},
}