const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loaders: [{
          loader: 'eslint-loader',
          options: {
            emitError: true,
            failOnError: true
          },
        }],
        include: path.resolve(__dirname, '../src')
      }
    ]
  }
}
