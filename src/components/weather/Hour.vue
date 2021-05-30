<template>
    <li>
        <div class="relative pb-3" :class="{'mb-4': isLast}">
            <span
                v-if="!isLast"
                class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                aria-hidden="true"
            />
            <div class="relative flex space-x-3">
                <div>
                    <span
                        class="mt-1 h-8 w-8 bg-white flex items-center justify-center"
                        v-text="$luxon(data.dateTime, 't')"
                    />
                </div>
                
                <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                    <div
                        :class="`${baseClass} bg-${rainColorIndication}-300 text-${rainColorIndication}-800 border-${rainColorIndication}-500`"
                    >
                        <img src="@/assets/rain.png" class="h-4 mr-2 relative top-0.5" />
                        {{ `${data.probability_of_precipitation}%` }}
                    </div>

                    <div
                        :class="`${baseClass} bg-${temperatureColorIndication}-300 text-${temperatureColorIndication}-800 border-${temperatureColorIndication}-500`"
                    >
                        <img
                            src="@/assets/temperature.png"
                            class="h-4 mr-2 relative top-0.5"
                        />
                        {{ data.temperature }}&#8451;
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
export default {
	data() {
		return {
			showContent: false,
			baseClass:
				"w-full mb-1 inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0 border",
		};
	},
	props: {
		data: {
			type: Object,
			required: true,
		},
        isLast: {
            type: Boolean,
            required: false,
            default: false,
        }
	},
	computed: {
        rainColorIndication() {
			if (this.data.probability_of_precipitation <= 30) {
				return "green";
			} else if (this.data.probability_of_precipitation <= 60) {
				return "yellow";
			} else {
				return "red";
			}
		},
        temperatureColorIndication() {
            if (this.data.temperature >= 20) {
				return "green";
			} else if (this.data.temperature > 10) {
				return "yellow";
			} else {
				return "red";
			}
        }
	},
};
</script>
