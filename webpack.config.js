const path = require('path');

module.exports = {
  // mode: "production",
  mode: "development",
  entry: "./src/js/main.js",
  output: {
    filename: "./assets/js/main.js",
    path: path.resolve(__dirname, "public"),
  },
};