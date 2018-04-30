const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
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
