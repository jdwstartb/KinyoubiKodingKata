
export class FizzBuzzService{
    counter = 0

    loop(): void {
        for (let i = 0; i < 100; i++){
            console.log(this.next())
        }
    }

    next():string  {
        this.counter +=1
        return this.transform(this.counter)
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