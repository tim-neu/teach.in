const path = require('path')

module.exports = {
  context: __dirname,
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
       { test: /\.css$/, loaders: ["style", "css"] }
    ]
  }
}