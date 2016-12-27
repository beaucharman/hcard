var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')
// Define a prod environment for redux and minification
var PROD = (process.env.NODE_ENV === 'production')
var distPath = 'dist' // change this to be the assest project specifc path from index.html

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    path.join(__dirname, 'src', 'entry.js'),
  ],
  output: {
    path: path.join(__dirname, distPath, 'hCard'),
    filename: 'hCard.js',
    publicPath: '/' + distPath + '/hCard/',
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('hCard.css', { allChunks: true }),
    PROD ? new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }) : () => {},
    PROD ? new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }) : () => {},
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-1'],
        },
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[path][name]---[local]---[hash:base64:5]!stylus-loader'),
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?name=images/[name].[ext]?[hash]&limit=8192',
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.styl'],
    modulesDirectories: ['node_modules', 'src', 'scripts'],
  },
  stylus: {
    use: [ require('nib')() ],
    import: [
      '~nib/lib/nib/index.styl',
      path.join(path.join(__dirname, 'src') + '/styles/variables.styl'),
      path.join(path.join(__dirname, 'src') + '/styles/mixins.styl'),
    ],
  },
}
