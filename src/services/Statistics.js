import { DateTime } from 'luxon'

/**
 * Service for generating statistics for the given locations
 */
class Statistics {

    constructor() {
        this.days = []
    }

    /**
     * Constructs the class
     * @param {Object} location 
     */
    calculateRain(location) {
        location.rain.forEach(weather => {
            let date = DateTime.fromISO(weather.dateTime)
            let dayInYear = date.toFormat('o');
            let day = this.days.find(e => e.id == dayInYear);

            if (day) {
                if (!day.rain) {
                    day.rain = [];
                }

                day.rain.push(weather)
            } else {
                this.days.push({
                    id: dayInYear,
                    date: date,
                    rain: [weather]
                })
            }
        });
    }

    /**
     * Constructs the class
     * @param {Object} location 
     */
     calculateTemperature(location) {
        location.temperature.forEach(weather => {
            let date = DateTime.fromISO(weather.dateTime)
            let dayInYear = date.toFormat('o');
            let day = this.days.find(e => e.id == dayInYear);

            if (day) {
                if (!day.temperature) {
                    day.temperature = [];
                }

                day.temperature.push(weather)
            } else {
                this.days.push({
                    id: dayInYear,
                    date: date,
                    temperature: [weather]
                })
            }
        });
    }
}

export default Statistics
