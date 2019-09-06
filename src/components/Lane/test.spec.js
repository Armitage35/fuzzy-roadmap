import { mount } from '@vue/test-utils';
import Lane from './Lane'

describe('Lane', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Lane)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
