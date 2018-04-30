import Vue from 'vue'
import Input from './Input.vue'

function getRenderedText (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData }).$mount()
  return vm.$el.textContent
}

describe('Input', () => {
  it('renders correctly without any props', () => {
    expect(getRenderedText(Input, {
      placeholder: undefined,
      type: undefined
    })).toBe('')
  })
})