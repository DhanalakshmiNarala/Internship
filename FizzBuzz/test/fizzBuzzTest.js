const fizzBuzz = require('../src/fizzBuzz')
const should = require('chai').should()

describe('fizzBuzz', ()=> {
    it('should return fizz for multiple of 3', ()=> {
        fizzBuzz(6, 6).should.deep.equal(["fizz"]);
    })

    it('should return buzz for multiple numbers of 5', ()=> {
        fizzBuzz(10, 10).should.deep.equal(["buzz"])
    })

    it("should return fizzbuzz for multiple number of 3 and 5", ()=> {
        fizzBuzz(15, 15).should.deep.equal(["fizzbuzz"])
    })
})