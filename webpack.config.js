var path = require("path")

module.exports = {
  entry: {
    app: ["./src/app.js"]
  },
  output: {
    path: path.resolve(__dirname, "web/"),
    publicPath: "/web/",
    filename: "index.js"
  }/*,
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  }*/
}
