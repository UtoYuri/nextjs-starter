const withTypescript = require('@zeit/next-typescript')
const withLess = require('@zeit/next-less')
const withImages = require('next-images');
const lessConfig = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: process.env.NODE_ENV === 'production' ? "[hash:base64:5]" : "[local]___[hash:base64:5]",
  }
};

module.exports = withImages(withTypescript(withLess(lessConfig)));