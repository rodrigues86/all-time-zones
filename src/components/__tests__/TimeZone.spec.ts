import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TimeZone from './TimeZone.vue'

describe('TimeZone', () => {
  it('renders properly', () => {
    const wrapper = mount(TimeZone, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
