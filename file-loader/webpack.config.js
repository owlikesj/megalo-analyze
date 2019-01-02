const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/file.js",
  devtool: "source-map",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  }
};
