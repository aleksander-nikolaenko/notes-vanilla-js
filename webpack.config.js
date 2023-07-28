const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = (env) => {
  const mode = env.mode || 'development';
  const port = env.port || 3000;
  return {
    mode: mode,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          use: ['html-loader'],
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, , 'css-loader', 'postcss-loader'],
        },
      ],
    },
    plugins: [
      // new CopyPlugin({
      //   patterns: [
      //     {
      //       from: path.resolve(__dirname, 'src', 'favicon'),
      //       to: 'favicon',
      //     },
      //   ],
      // }),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash:8].css',
      }),
    ],
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist'),
      },
      watchFiles: path.resolve(__dirname, 'src'),
      port: port,
      open: true,
      hot: true,
      compress: true,
      historyApiFallback: true,
    },
  };
};

module.exports = config;
