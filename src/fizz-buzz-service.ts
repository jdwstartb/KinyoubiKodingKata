
export class FizzBuzzService{
    counter = 0

    next():string  {
        this.counter +=1
        return `${this.counter}`
    }

    transform(number): string{
        return "Fizz"
    }
}