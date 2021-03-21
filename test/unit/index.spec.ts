import * as index from '../../src/index'
import {escape} from '../../src/main'

describe('module index', () => {
  it('should provide access to escape()', () => {
    expect(index.escape).toBe(escape)
  })
})
