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
    })


})