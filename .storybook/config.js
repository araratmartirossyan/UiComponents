import { configure } from '@storybook/vue'

const req = require.context('../src/components/', true, /story\.js$/)

configure(function () {
	req.keys().forEach(req)
}, module)
