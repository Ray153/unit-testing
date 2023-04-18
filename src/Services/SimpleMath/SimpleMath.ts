export class MyMath {
	num1: number
	num2: number

	constructor (num1: number, num2: number){
		this.num1 = num1
		this.num2 = num2
	}

	add(num1: number, num2: number): number{
		return num1 + num2
	}
	subtract(num1: number, num2: number): number{
		return num1 - num2
	}
	multiply(num1: number, num2: number): number{
		return num1 * num2
	}
	divide(num1: number, num2: number): number{
		if (num2==0){
			console.log("Can't divide by 0")
			return 0
		}
		return num1/num2
	}
}