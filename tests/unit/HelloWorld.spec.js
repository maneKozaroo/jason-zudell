import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('returns "bar" for odd numbers', () => {
    const wrapper = shallowMount(HelloWorld)
    const expected = 'bar'
    const actual = wrapper.vm.foo(1)
    expect(expected).toMatch(actual)
  })

  it('returns "foo" for even numbers', () => {
    const wrapper = shallowMount(HelloWorld)
    const expected = 'foo'
    const actual = wrapper.vm.foo(2)
    expect(expected).toMatch(actual)
  })
})
