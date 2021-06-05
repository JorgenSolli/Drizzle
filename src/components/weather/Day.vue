<template>
	<div class="px-4 py-5 sm:p-4 sm:px-4 sm:py-2">
		<dt class="flex mb-2">
			<span class="text-base font-normal text-gray-900" v-text="date" />
			<button
				v-if="rainData.length"
				@click="showContent = true"
				type="button"
				class="ml-auto inline-flex items-center border border-transparent rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
			>
				<InformationCircleIcon aria-hidden="true" />
			</button>
		</dt>

		<dd class="mt-1">
			<Rain
				v-if="rainData.length"
				:rain-data="rainData"
				:class="baseClass"
			/>
			<Temperature
				v-if="temperatureData.length"
				:temperature-data="temperatureData"
				:class="baseClass"
			/>

			<div
				v-if="!rainData.length && !temperatureData.length"
				class="bg-red-300 text-red-800 border-red-500"
				:class="baseClass"
			>
				No data
			</div>
		</dd>

		<Modal
			v-model="showContent"
			@close="showContent = false"
			:close-on-outside-click="true"
		>
			<template #header>Forecast for this day</template>

			<template #icon>
				<div
					class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10"
				>
					<CloudIcon class="h-6 w-6 text-blue-600" />
				</div>
			</template>

			<template #content>
				<div class="flow-root mt-6">
					<div class="flow-root">
						<ul class="-mb-8">
							<Hour
								v-for="(hour, index) in hourData"
								:key="index"
								:data="hour"
                                :is-last="(index + 1) == hourData.length"
							/>
						</ul>
					</div>
				</div>
			</template>
		</Modal>
	</div>
</template>

<script>
import Rain from "@/components/weather/types/Rain";
import Hour from "@/components/weather/Hour";
import Temperature from "@/components/weather/types/Temperature";
import { InformationCircleIcon, CloudIcon } from "@vue-hero-icons/outline";
import Modal from "@/components/tailwind/Modal";

export default {
	data() {
		return {
			showContent: false,
			baseClass:
				"sm:w-full w-1/2 mb-1 inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0 border",
		};
	},
	props: {
		day: {
			type: Object,
			required: true,
		},
		settings: {
			type: Object,
			required: true,
		},
	},
	components: {
		Rain,
		Temperature,
		InformationCircleIcon,
		CloudIcon,
		Modal,
		Hour,
	},
	computed: {
		date() {
			return this.day.date.toLocaleString({
				month: "short",
				day: "numeric",
			});
		},
		rainData() {
			return this.weatherData("rain");
		},
		temperatureData() {
			return this.weatherData("temperature");
		},
		hourData() {
			let data = [];
			this.rainData.forEach((rain) => {
				data.push({
					dateTime: rain.dateTime,
					probability_of_precipitation:
						rain.probability_of_precipitation,
					temperature:
						this.temperatureData.find(
							(weather) => weather.dateTime == rain.dateTime
						)?.temperature ?? false,
				});
			});

			return data;
		},
	},
	methods: {
		/**
		 * Gets the data for the weather type
		 * @param {String} type
		 * @return {Array}
		 */
		weatherData(type) {
			if (!this.day[type]) {
				return [];
			}

			if (this.settings.ignore_night_time) {
				return this.day[type].filter((entry) => {
					let hourOfDay = this.$luxon(entry.dateTime, "H");
					return hourOfDay < 22 && hourOfDay > 6;
				});
			}

			return this.day[type];
		},
	},
};
</script>
