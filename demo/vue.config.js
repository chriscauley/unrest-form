const path = require('path')

const devServer = {
  host: 'urform.localhost',
  port: 8711,
  historyApiFallback: true,
}

module.exports = {
  lintOnSave: false,
  devServer,
  configureWebpack: {
    resolve: {
      alias: {
        '@unrest/form': path.resolve(__dirname, '../src/index.js'),
      },
    },
  },
}

if (process.env.NODE_ENV === 'production') {
  module.exports.publicPath = '/unrest-form'
}
