const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true,
  },
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [
      { test: /\\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(js|jsx)$/,         // Matches .js and .jsx files
        exclude: /node_modules/,     // Don't look in node_modules
        use: {
          loader: 'babel-loader',    // Use babel-loader to transform these files
          options: {
            presets: [
              '@babel/preset-env',   // Compiles modern JS down to ES5
              ['@babel/preset-react', { runtime: 'automatic' }] // Compiles JSX
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
  devServer: { port: 3000, hot: true, historyApiFallback: true },
}
