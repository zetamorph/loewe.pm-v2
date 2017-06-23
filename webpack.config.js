const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
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
        exclude: /node_modules/,
        loaders: [ "file-loader?name=[name].[ext]", "extract-loader", "html-loader" ]
      },
      {
        test: /\.scss$/, 
        exclude: /node_modules/,
        loaders: ExtractTextPlugin.extract("css-loader!sass-loader")
      },
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      },
      {
        test: /\.(jpe?g|png)$/i,
        exclude: /node_modules/,
        loaders: [
          "file-loader?hash=sha512&digest=hex",
          {
            loader: "image-webpack-loader",
            query: {
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 4,
              },
              pngquant: {
                quality: "75-90",
                speed: 3,
              },
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.bundle.css"),
    new CleanWebpackPlugin(["build/*.*"]),
    new UglifyJsPlugin({
      compressor: false,
    }),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV":  JSON.stringify("production")
      }
    })
  ] 
};