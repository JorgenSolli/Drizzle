<template>
	<div class="mb-4 rounded-lg bg-white shadow">
		<div class="px-4 py-2 flex">
			<h3 class="leading-6 font-medium text-gray-900 pt-1" v-text="name" />

			<button
				@click="$emit('remove-location', $vnode.key)"
				type="button"
				class="ml-auto inline-flex items-center px-3 py-1 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
			>
				<TrashIcon class="-ml-1 mr-2 h-5 w-5" />
				Remove
			</button>
		</div>

		<dl
			v-if="statistics.days.length"
			class="mt-1 grid grid-cols-1 overflow-hidden border-t border-gray-100 divide-y divide-gray-200 md:grid-cols-10 md:divide-y-0 md:divide-x"
		>
			<Day
				v-for="day in statistics.days"
				:key="day.id"
				:day="day"
				:settings="settings"
			/>
		</dl>
		<Message class="rounded-tl-none rounded-tr-none" :show="!statistics.days.length" error message="Failed to fetch data for this location"/>
	</div>
</template>

<script>
import Yr from "@/services/Yr";
import Statistics from "@/services/Statistics";
import Day from "@/components/weather/Day";
import { TrashIcon } from "@vue-hero-icons/outline";
import Message from '@/components/tailwind/Message'

export default {
	data() {
		return {
			weather: [],
			yr: new Yr(),
			statistics: new Statistics(),
		};
	},
	props: {
		location: {
			type: Object,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		settings: {
			type: Object,
			required: true,
		},
	},
	components: {
		Day,
		TrashIcon,
		Message,
	},
	mounted() {
		this.checkWeather();
	},
	methods: {
		checkWeather() {
			this.yr.gatherData(this.location).then((location) => {
				this.statistics.calculateRain(location);
				this.statistics.calculateTemperature(location);
			});
		},
	},
};
</script>
