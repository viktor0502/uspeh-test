const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname, "src/js"),
    filename: "script.js",
  },
  watch: true,
  devtool: "source-map",
  module: {}
};
