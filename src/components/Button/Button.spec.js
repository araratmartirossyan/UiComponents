import Vue from 'vue'
import Button from './Button.vue'

function getRenderedText (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData }).$mount()
  return vm.$el.textContent
}

describe('Button', () => {
  it('renders correctly without any props', () => {
    expect(getRenderedText(Button, {
      title: undefined,
      fontColor: undefined,
      handleCall: undefined
    })).toBe('')
  })
})
