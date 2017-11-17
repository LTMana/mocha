const {should, expect, assert} = require('chai')
const {add, mul} = require('../src/math')

describe('#math', () => {
  describe('add()', () => {
    it('should return 5 when 2 + 3', () => {
      expect(add(2, 3)).to.equal(6)
    })
    it('should return 5 when 2 + 3', () => {
      expect(add(2, -3)).to.equal(-1)
    })
  })
  describe('mul()', () => {
    it('should return 5 when 2 * 3', () => {
      expect(mul(2, 3)).to.equal(6)
    })
  })
})