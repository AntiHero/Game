const path = require('path');

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
      }
    ]
  }
};
