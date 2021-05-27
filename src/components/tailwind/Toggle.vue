<template>
	<div class="flex items-center">
		<button
			@click="change"
			type="button"
			:aria-pressed="Boolean(on)"
			:class="{ 'bg-green-400': on, 'bg-gray-200': !on }"
			:disabled="disabled"
			class="bg-gray-200 inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-dark"
		>
			<span class="sr-only">Use this setting</span>
			<span
				aria-hidden="true"
				:class="{ 'translate-x-5': on, 'translate-x-0': !on }"
				class="inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
			/>
		</button>

		<span class="ml-3 mb-0.5" :id="_uid" @click="change">
			<span class="text-sm font-medium text-gray-900" v-text="title" />
			<span class="text-sm text-gray-500" v-text="subtitle" />
		</span>
	</div>
</template>

<script>
export default {
	data() {
		return {
			checked: this.value,
		};
	},
	props: {
		value: Boolean,
		title: String,
		subtitle: String,
		disabled: {
			required: false,
			type: Boolean,
			default: false,
		},
	},
	computed: {
		on() {
			return this.value;
		},
	},
	methods: {
		change() {
			this.checked = !this.checked;
			this.$emit("input", this.checked);
		},
	},
};
</script>
