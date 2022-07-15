describe('FizzBuzzService', function () {

    it('returns a number', ()=>{
        const service = new FizzBuzzService()
        expect(service.next()).toEqual("1")
    })
});