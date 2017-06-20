var webpack = require('webpack');
var cssnext = require('postcss-cssnext');
var postcssFocus = require('postcss-focus');
var postcssReporter = require('postcss-reporter');
var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    app: [
      'eventsource-polyfill',
      'webpack-hot-middleware/client',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './client/index.js',
    ],
    vendor: [
      'react',
      'react-dom',
      'bootstrap-loader',
    ],
  },

  output: {
    path: __dirname,
    filename: 'app.js',
    publicPath: 'http://0.0.0.0:3000/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('./client'),
      'node_modules',
    ],
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader',
      }, {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
      }, {
        test: /\.jsx*$/,
        exclude: [/node_modules/, /.+\.config.js/],
        loader: 'babel-loader',
      }, {
        test: /\.(jpe?g|gif|png|svg|woff|woff2|ttf|eot)$/i,
        loader: 'url-loader?limit=10000',
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.js',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true),
        'NODE_ENV': JSON.stringify('development'),
        SITE_URL: JSON.stringify(process.env.SITE_URL)
      }
    }),
    new webpack.ProvidePlugin({
        jQuery: 'jquery'
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.css$/,
      options: {
        context: __dirname,
        postcss: () => [
          postcssFocus(),
          cssnext({
            browsers: ['last 2 versions', 'IE > 10'],
          }),
          postcssReporter({
            clearMessages: true,
          }),
        ]
      },
    }),
  ],
};