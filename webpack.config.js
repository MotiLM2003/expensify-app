const path = require('path');
let absolutePath = path.join(__dirname, 'public');

module.exports = {
  entry: './src/app.js',
  output: {
    path: absolutePath,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s?css$/,

        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    // Serve index.html as the base
    contentBase: path.join(__dirname, 'public'),
  },
};
