import { Calculator } from "../Services/Calculator/Calculator"


describe("Calculator", () => {
  let calculator: Calculator

  beforeAll(() => {
    calculator = new Calculator()
  })

  test("should add two numbers correctly", () => {
    expect(calculator.add(2, 3)).toEqual(5)
  })

  test("should subtract two numbers correctly", () => {
    expect(calculator.subtract(5, 3)).toEqual(2)
  })

  test("should multiply two numbers correctly", () => {
    expect(calculator.multiply(4, 3)).toEqual(12)
  })

  test("should divide two numbers correctly", () => {
    expect(calculator.divide(10, 2)).toEqual(5)
  })

  test("should throw error when dividing by zero", () => {
    expect(() => calculator.divide(10, 0)).toThrowError("Cannot divide by zero")
  })
})
