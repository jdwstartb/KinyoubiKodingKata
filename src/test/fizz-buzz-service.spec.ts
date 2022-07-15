import {FizzBuzzService} from "../fizz-buzz-service";

describe('FizzBuzzService', function () {

    describe('next', ()=>{
        it('returns a number', ()=>{
            const service = new FizzBuzzService()
            expect(service.next()).toEqual("1")
        })
        it('returns the first two numbers', ()=>{
            const service = new FizzBuzzService()
            service.next()
            expect(service.next()).toEqual("2")
        })

        it('returns the fizz on 3', ()=>{
            const service = new FizzBuzzService()
            service.next()
            service.next()
            expect(service.next()).toEqual("Fizz")
        })

    })

    describe('transform', ()=>{
        it('transforms a number divisible by 3 to "Fizz"', ()=>{
            const service = new FizzBuzzService()
            expect(service.transform(3)).toEqual("Fizz")
        })

        it('transforms a number divisible by 5 to "Buzz"', ()=>{
            const service = new FizzBuzzService()
            expect(service.transform(5)).toEqual("Buzz")
        })

        it('transforms a number divisible by both as FizzBuzz', ()=>{
            const service = new FizzBuzzService()
            expect(service.transform(15)).toEqual("FizzBuzz")
        })
        it('does not change number 1', ()=>{
            const service = new FizzBuzzService()
            expect(service.transform(1)).toEqual("1")
        })
    })


})