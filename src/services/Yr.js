/**
 * Service for calculating weather and communicating with the Yr API
 */
class Yr {

    /**
     * Gets the weather for a location
     * @param {Number} lat 
     * @param {Number} lng 
     * @returns {Object}
     */
    async call(lat, lng) {
        let url = `https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=${lat}&lon=${lng}`
        const response = await fetch(url);
        const json = await response.json();

        return json;
    }

    /**
     * Parses the data from Yr
     * @param {Object} weather 
     * @returns {Object}
     */
    parseWeather(weather) {
        let parsed = {
            rain: [],
            temperature: [],
        }

        weather.properties.timeseries.forEach(data => {
            let details = data.data.next_1_hours?.details ??
                data.data.next_6_hours?.details ??
                data.data.next_12_hours?.details;

            if (details) {
                parsed.rain.push({
                    dateTime: data.time,
                    probability_of_precipitation: details.probability_of_precipitation ?? details.precipitation_amount,
                })
            }

            let temperature = data.data.instant?.details?.air_temperature_percentile_90 ?? false
            if (temperature) {
                parsed.temperature.push({
                    dateTime: data.time,
                    temperature: temperature
                })
            }
        })

        return parsed;
    }

    /**
     * Gathers all weather data from polyline
     * @param {Object} coordinates 
     * @returns {Array}
     */
    async gatherData(coordinates) {
        let data = {};
        await this.call(coordinates.lat, coordinates.lng).then(weather => {
            data = this.parseWeather(weather);
        });

        return data;
    }
}

export default Yr
