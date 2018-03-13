// environment variables
require('dotenv').config()
const webpack = require('webpack')
module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin({
        'process.env.API_HOST': JSON.stringify(process.env.API_HOST),
        'process.env.PORT': JSON.stringify(process.env.PORT)
      })
    )
    return config
  }
}
// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  cssModules: true
})
