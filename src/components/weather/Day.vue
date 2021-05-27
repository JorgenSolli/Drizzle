<template>
    <div class="px-4 py-5 sm:p-4">
        <dt class="text-base font-normal text-gray-900" v-text="date"/>
        <dd
            class="mt-1"
        >
            <Rain v-if="rainData.length" :rain-data="rainData" :class="baseClass"/>
            <Temperature v-if="temperatureData.length" :temperature-data="temperatureData" :class="baseClass"/>

            <div v-if="!rainData.length && !temperatureData.length" class="bg-red-300 text-red-800 border-red-500" :class="baseClass">
                No data
            </div>
        </dd>
    </div>
</template>

<script>
import Rain from '@/components/weather/types/Rain';
import Temperature from '@/components/weather/types/Temperature';

export default {
    data() {
        return {
            baseClass: 'w-full mb-1 inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0 border'
        }
    },
    props: {
        day: {
            type: Object,
            required: true
        },
        settings: {
			type: Object,
			required: true,
		},
    },
    components: {
        Rain,
        Temperature
    },
    computed: {
        date() {
            return this.day.date.toLocaleString({ month: 'long', day: 'numeric' })
        },
        rainData() {
            return this.weatherData('rain');
        },
        temperatureData() {
            return this.weatherData('temperature');
        },
    },
    methods: {
        /**
         * Gets the data for the weather type
         * @param {String} type
         * @return {Array}
         */
        weatherData(type) {
            if (this.settings.ignore_night_time) {
                return this.day[type].filter(entry => {
                    let hourOfDay = this.$luxon(entry.dateTime, 'H');
                    return hourOfDay < 22 && hourOfDay > 6;
                })
            }

            return this.day[type];
        }
    }
};
</script>
