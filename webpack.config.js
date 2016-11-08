const path = require('path')

module.exports = {
  context: path.join(process.cwd(), '/src'),
  entry: {
    javascript: './index.jsx',
    html: './index.html'
  },

  output: {
    filename: 'app.js',
    path: path.join(process.cwd(), '/dist')
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.s?css$/,
        loader: 'style!css!autoprefixer-loader?browsers=last 2 versions!sass'
      }
    ]
  }
}
