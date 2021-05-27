<template>
	<div
		:class="`bg-${colorIndication}-300 text-${colorIndication}-800 border-${colorIndication}-500`"
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
				return "green";
			} else if (this.probabilityOfPrecipitation <= 60) {
				return "yellow";
			} else {
				return "red";
			}
		},
	},
};
</script>
