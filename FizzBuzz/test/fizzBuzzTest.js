const fizzBuzz = require('../src/fizzBuzz')
const should = require('chai').should()

describe('fizzBuzz', ()=> {
    it('should return Fizz for multiple of 3', ()=> {
        fizzBuzz(6, 6).should.deep.equal(["Fizz"]);
    })

    it('should return Buzz for multiple numbers of 5', ()=> {
        fizzBuzz(10, 10).should.deep.equal(["Buzz"])
    })

    it("should return Fizz Buzz for multiple number of 3 and 5", ()=> {
        fizzBuzz(15, 15).should.deep.equal(["Fizz Buzz"])
    })
})