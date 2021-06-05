<template>
	<div
		:class="colorIndication"
	>
		<img src="@/assets/rain.png" class="h-4 mr-2 relative top-0.5" />
		{{ `${probabilityOfPrecipitation}%` }}
	</div>
</template>

<script>
export default {
	props: {
		rainData: {
			type: Array,
			required: true,
		},
	},
	computed: {
		probabilityOfPrecipitation() {
			let sum = this.rainData
				.map((data) => data.probability_of_precipitation)
				.reduce((a, b) => {
					return a + b;
				});

			return Math.round(sum / this.rainData.length);
		},
		colorIndication() {
			if (this.probabilityOfPrecipitation <= 30) {
				return [
					'bg-green-300', 'text-green-800', 'border-green-500'
				];
			} else if (this.probabilityOfPrecipitation <= 60) {
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
