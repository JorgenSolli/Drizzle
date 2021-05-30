<template>
	<div class="mb-4">
		<div class="bg-white overflow-hidden shadow rounded-lg mt-1">
			<div class="px-4 py-5 sm:p-6 flex">
				<Toggle
					v-model="settings.ignore_night_time"
					title="Ignore weather during night time"
				/>

                <div class="ml-auto">
                    <Create  class="inline-flex"/>
                    <Restore  class="inline-flex"/>
                </div>
			</div>
		</div>
	</div>
</template>

<script>
import Toggle from "@/components/tailwind/Toggle";
import Create from '@/components/storage/Create';
import Restore from '@/components/storage/Restore';

export default {
	data() {
		return {
			settings: {
				ignore_night_time: true,
			},
		};
	},
	mounted() {
		this.$emit("update-settings", this.settings);
	},
	components: {
		Toggle,
        Create,
        Restore,
	},
	watch: {
		settings: {
			deep: true,
			handler() {
				this.$emit("update-settings", this.settings);
			},
		},
	},
};
</script>
