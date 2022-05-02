const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
    publicPath: "/",
  },
  devServer: {
    // contentBase
    static : {
      directory : path.join(__dirname, "public/")
    },
    port: 3000,
    // publicPath
    devMiddleware:{
       publicPath: "https://localhost:3000/dist/",
    },
    // hotOnly
    hot: "only",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};