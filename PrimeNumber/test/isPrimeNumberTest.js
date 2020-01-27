const isPrimeNumber = require('../src/isPrimeNumber');
const should = require('chai').should();

describe('Prime numbers', () => {
    it('should return true for number 3', () => {
        isPrimeNumber(3).should.be.true;
    })
})