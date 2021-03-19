import {unwrap} from '../../src/main'

describe('unwrap()', () => {
  it('should return just the pattern portion of a regular expression', () => {
    expect(unwrap(/(ab|bc|[cd])/)).toBe('(ab|bc|[cd])')
    expect(unwrap(/(ab|bc|[cd])/gui)).toBe('(ab|bc|[cd])')
    // eslint-disable-next-line prefer-regex-literals
    expect(unwrap(new RegExp('(ab|bc|[cd])'))).toBe('(ab|bc|[cd])')
    // eslint-disable-next-line prefer-regex-literals
    expect(unwrap(new RegExp('(ab|bc|[cd])', 'gui'))).toBe('(ab|bc|[cd])')
  })
})
