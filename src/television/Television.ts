export enum DisplayMode { HDMI = 'HaDeeeeMI', AV = 'AaaaVe', ANALOG = 'Ananananlog' }

type TVSettings = {
    power: boolean,
    mute: boolean,
    volume: number,
    channel: number,
    displayMode: DisplayMode
}

const MIN_VOLUME = 0
const MAX_VOLUME = 200

export class Television {
    //1. Attribute declaration
    //settings: TVSettings

    //2. Constructor: Parameter + Assignment
    //constructor(settingsInput: TVSettings) { this.settings = settingsInput }
    
    // If you declare in the constructor, the steps are done automatically:
    constructor(private _settings: TVSettings) {}

    public get settings(): TVSettings { return this._settings }

    adjustVolume(newVolume: number): number {
        const volumeValid = this.checkVolumeBounds(newVolume)

        if (!volumeValid) {
            throw Error('Invalid volume')
        }

        this.settings.volume = newVolume
        return this.settings.volume
    }

    checkVolumeBounds(volume: number) {
        if (volume >= MIN_VOLUME && volume <= MAX_VOLUME) {
            return true
        }
        return false
    }

    adjustChannel(newChannel: number): number {
        this.settings.channel = newChannel
        return this.settings.channel
    }

    togglePower(): boolean {
        this.settings.power = !this.settings.power
        return this.settings.power
    }

    toggleMute(): boolean {
        this.settings.mute = !this.settings.mute
        return this.settings.mute
    }

    setDisplayMode(newDisplayMode: DisplayMode): DisplayMode {
        this.settings.displayMode = newDisplayMode
        return this.settings.displayMode
    }
}