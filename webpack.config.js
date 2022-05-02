const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  target: "web",
  mode: process.env.NODE_ENV || "development",
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
      },
      {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ["ts-loader"],
      },
      {
          test: /\.(css|scss)$/,
          use: ["style-loader", "css-loader"],
      },
      {
          test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
          use: ["file-loader"],
      },
  ],
  },
  resolve: { extensions: ["*", ".js", ".jsx", ".json", ".ts", ".tsx"] },
  
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
  plugins: [
    new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
    }),
],
};