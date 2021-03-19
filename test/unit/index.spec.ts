import * as index from '../../src/index'
import {escape, unwrap} from '../../src/main'

describe('module index', () => {
  it('should provide access to param()', () => {
    expect(index.escape).toBe(escape)
  })

  it('should provide access to path()', () => {
    expect(index.unwrap).toBe(unwrap)
  })
})
