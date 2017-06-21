const ExtractTextPlugin = require("extract-text-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/build",
    filename: "app.bundle.js"
  },
  devServer: {
    contentBase: "/build",
    inline: true
  },
  node: {
    fs: "empty"
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        use: [ 'file-loader?name=[name].[ext]' ]
      },
      {
        test: /\.scss$/, 
        exclude: /node_modules/,
        loaders: ExtractTextPlugin.extract("css-loader!sass-loader")
      },
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        loaders: "babel-loader"
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ["file-loader?name=[name].[ext]", "image-webpack-loader?bypassOnDebug"]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.bundle.css")
  ] 
};