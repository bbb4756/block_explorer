const path = require('path');
const webpack = require('webpack');
 
module.exports = {
  name: 'number-baseball',
  mode: 'development',
  devtool: 'eval',
 
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: ['./src/index.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        // babel 옵션
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['> 5% in KR'],
                },
                debug: true,
              },
            ],
            '@babel/preset-react',
          ],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ],
  },
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
};