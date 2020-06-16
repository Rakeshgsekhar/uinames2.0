var webpack = require("webpack");
var path = require("path");

module.exports = {
  context: __dirname,
  entry: {
    main: "./index.js",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "uinames.min.js",
  },
  resolve: {
    extensions: [".js"],
  },
};
