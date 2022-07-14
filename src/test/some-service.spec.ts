import {SomeService} from "../some-service";

describe('SomeService', function () {
    const service : SomeService = new
        SomeService()
    it('does something', () => {
        const result = service.doSomething()
        expect(result).toEqual(10)
    })
});