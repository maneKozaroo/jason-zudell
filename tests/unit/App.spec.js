import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('returns "bar" for odd numbers', () => {
    const wrapper = shallowMount(App)
    const expected = 'bar'
    const actual = wrapper.vm.foo(1)
    expect(expected).toMatch(actual)
  })

  it('returns "foo" for even numbers', () => {
    const wrapper = shallowMount(App)
    const expected = 'foo'
    const actual = wrapper.vm.foo(2)
    expect(expected).toMatch(actual)
  })
})
