const withTypescript = require('@zeit/next-typescript')
const withLess = require('@zeit/next-less')
const lessConfig = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
};

module.exports = withTypescript(withLess(lessConfig))