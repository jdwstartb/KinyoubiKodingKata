
export class FizzBuzzService{
    counter = 0

    next():string  {
        this.counter +=1
        return `${this.counter}`
    }

    transform(number): string{
        if (number % 3 == 0){
            return "Fizz"
        }
        if (number % 5 == 0){
            return "Buzz"
        }
        return ``
    }
}