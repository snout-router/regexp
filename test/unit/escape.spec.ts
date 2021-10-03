import {escape} from '../../src/main'

import {hasType} from '../helpers'

describe('escape()', () => {
  it('should escape strings for use within regular expressions', () => {
    const string = 'a|-\\{}()[]^$+*?.b'

    expect(new RegExp(`^${escape(string)}$`).test(string)).toBe(true)
    expect(new RegExp(`^${escape(string)}$`, 'u').test(string)).toBe(true)
  })

  it('should have a string return type', () => {
    expect(hasType<string>(escape(''))).toBe(true)
  })

  it('should only accept string arguments', () => {
    // @ts-expect-error
    expect(() => escape(111)).toThrow()
  })
})
