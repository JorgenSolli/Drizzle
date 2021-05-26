import { DateTime } from 'luxon'

/**
 * Service for generating statistics for the given locations
 */
class Statistics {

    constructor() {
        this.rain = []
    }

    /**
     * Constructs the class
     * @param {Array} locations 
     */
    calculateRain(locations) {
        locations.forEach(location => {
            location.rain.forEach(weather => {
                let date = DateTime.fromISO(weather.dateTime)
                let dayInYear = date.toFormat('o');
                let day = this.rain.find(e => e.id == dayInYear);

                if (day) {
                    day.data.push(weather)
                } else {
                    this.rain.push({
                        id: dayInYear,
                        date: date,
                        data: [weather]
                    })
                }
            })
        });
    }
}

export default Statistics
