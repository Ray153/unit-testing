import { MyMath } from "../Services/SimpleMath/SimpleMath"


describe('MyMath', () => {
  let myMath: MyMath

  beforeEach(() => {
    myMath = new MyMath() // Create a new instance of MyMath before each test
  })

  it('should add two numbers correctly', () => {
    const result = myMath.add(10, 5)
    expect(result).toEqual(15) // Assert that the result is equal to the expected value
  })

  it('should subtract two numbers correctly', () => {
    const result = myMath.subtract(10, 5)
    expect(result).toEqual(5)
  })

  it('should multiply two numbers correctly', () => {
    const result = myMath.multiply(10, 5)
    expect(result).toEqual(50)
  })

  it('should divide two numbers correctly', () => {
    const result = myMath.divide(10, 5)
    expect(result).toEqual(2)
  })

  it('should return 0 when dividing by 0', () => {
    const result = myMath.divide(10, 0)
    expect(result).toEqual(0)
  })
})
