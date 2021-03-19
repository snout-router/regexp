import {escape} from '../../src/main'

describe('escape()', () => {
  it('should escape strings for use within regular expressions', () => {
    const string = 'a|-\\{}()[]^$+*?.b'

    expect(new RegExp(`^${escape(string)}$`).test(string)).toBe(true)
    expect(new RegExp(`^${escape(string)}$`, 'u').test(string)).toBe(true)
  })
})
