const {should, assert} = require('chai')
const { expect } = require('chai')
const {add, mul} = require('../src/math')

expect(add(2, 4)).to.equal(44)

// expect(add(2, 4)).to.be(45)
// assert.equal(add(3, 3), 444)