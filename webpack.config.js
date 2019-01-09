const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  mode: 'development',
  devServer: {
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: { 
              "presets": ["@babel/preset-env"]
            }
          }    
        ] 
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
            "style-loader",
            "css-loader"
        ] 
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000, // Convert images < 8kb to base64 strings
            name: 'images/[hash]-[name].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './images',
        to: '../dist/images/',
      }])
    ]
};
