import { configure } from '@storybook/vue'
const config = require('../config')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
const req = require.context('../src/components/', true, /story\.js$/)

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

configure(function () {
	req.keys().forEach(req)
}, module)
