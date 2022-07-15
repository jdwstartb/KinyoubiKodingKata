
export class FizzBuzzService{
    counter = 0

    next():string  {
        this.counter +=1
        return `${this.counter}`
    }

    transform(number): string{
        let result = ""
        if (number % 3 == 0){
            result += "Fizz"
        }
        if (number % 5 == 0){
            result += "Buzz"
        }
        return result || `${number}`
    }
}