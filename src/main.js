import Vue from 'vue'
import App from './App'
import Button from './components/Button'
import Input from './components/Input'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

export {
  Button,
  Input
}
