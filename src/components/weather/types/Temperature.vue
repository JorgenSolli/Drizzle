<template>
	<div
		:class="`bg-${colorIndication}-300 text-${colorIndication}-800 border-${colorIndication}-500`"
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
				return "green";
			} else if (this.averageTemperature > 10) {
				return "yellow";
			} else {
				return "red";
			}
		},
	},
};
</script>
