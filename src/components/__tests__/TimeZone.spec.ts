import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TimeZone from './../TimeZone.vue'

describe('TimeZone', () => {
  const wrapper = mount(TimeZone, { props: { msg: 'TimeZone around the World!' } })
  it('renders properly', () => {
    expect(wrapper.text()).toContain('TimeZone around the World!')
  })
  it('Check if every element in the array is an object', () => {
    const vm = wrapper.vm;
    vm.getAllTimes();
    expect(vm.allTimes).to.be.an('array').that.is.not.empty
    const isArrayOfObjects = vm.allTimes.every(item => typeof item === 'object' && item !== null);

    // Assert the expected result
    expect(isArrayOfObjects).to.be.true;
  })
})
