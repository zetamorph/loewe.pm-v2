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
        loaders: "babel-loader"
      },
      {
        test: /\.(jpe?g|png)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex?name=img/[name].[ext]",
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
    new ExtractTextPlugin("styles.bundle.css")
  ] 
};