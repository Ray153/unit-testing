import { DisplayMode, Television } from "../Services/television/Television"
const tvSettings = {
    power: false,
    mute: false,
    volume: 50,
    channel: 1,
    displayMode: DisplayMode.HDMI
}

const myTV = new Television(tvSettings)

describe('Testing Television Functions', () => {
    // Executes once before EACH test
    beforeEach(() => {
        // Create a spy on checkVolumeBounds and provide a default implementation
        
    })

    test('Power test', () => {
        let expectedResult = false
        //Check TV is off initially
        expect(myTV.settings.power).toBe(expectedResult)

        // Toggle the power
        myTV.togglePower()
        expectedResult = true

        // Check if power worked
        expect(myTV.settings.power).toBe(expectedResult)
    })

    test('Volume adjustment test', () => {
        let expectedResult = 50
        //Check TV is off initially
        expect(myTV.settings.volume).toBe(expectedResult)

        // Toggle the power
        myTV.adjustVolume(89)
        expectedResult = 89

        // Check if power worked
        expect(myTV.settings.volume).toBe(expectedResult)

        myTV.adjustVolume(3)
        expectedResult = 3
        expect(myTV.settings.volume).toBe(expectedResult)
    })

    test('Volume invalid test', () => {
        const checkVolumeBoundsSpy = jest
            .spyOn(Television.prototype, 'checkVolumeBounds')

        const myFunction = () => { myTV.adjustVolume(201) }
        expect(myFunction).toThrowError('Invalid volume')
        expect(checkVolumeBoundsSpy).toBeCalledTimes(1)

        const checkVolumeBoundsMock = jest
            .spyOn(Television.prototype, 'checkVolumeBounds')
            .mockImplementation(() => {
                console.log('Mocked implementation of checkVolumeBounds')
                return true
            })
        
            const myFunction2 = () => {  }
            expect(myTV.adjustVolume(2999999)).toEqual(2999999)


    })


})
