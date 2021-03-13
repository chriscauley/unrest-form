const path = require('path')

const devServer = {
  host: 'urvjsf.localhost',
  port: 8711,
  historyApiFallback: true,
}

module.exports = {
  lintOnSave: false,
  devServer,
  configureWebpack: {
    resolve: {
      alias: {
        '@unrest/vjsf': path.resolve(__dirname, '../src/index.js'),
      },
    },
  },
}

if (process.env.NODE_ENV === 'production') {
  module.exports.publicPath = '/unrest-vjsf'
}
