<template>
	<div
		:class="colorIndication"
	>
		<img src="@/assets/temperature.png" class="h-4 mr-2 relative top-0.5" />
		{{ averageTemperature }}&#8451;
	</div>
</template>

<script>
export default {
	props: {
		temperatureData: {
			type: Array,
			required: true,
		},
	},
	computed: {
		averageTemperature() {
			let sum = this.temperatureData
				.map((data) => data.temperature)
				.reduce((a, b) => {
					return a + b;
				});

			return Math.round(sum / this.temperatureData.length);
		},
		colorIndication() {
			if (this.averageTemperature >= 20) {
				return [
					'bg-green-300', 'text-green-800', 'border-green-500'
				];
			} else if (this.averageTemperature > 10) {
				return [
					'bg-yellow-300', 'text-yellow-800', 'border-yellow-500'
				];
			} else {
				return [
					'bg-red-300', 'text-red-800', 'border-red-500'
				];
			}
		},
	},
};
</script>
