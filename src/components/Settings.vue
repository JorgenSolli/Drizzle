<template>
	<div class="mb-4">
		<div class="bg-white overflow-hidden shadow rounded-lg mt-1">
			<div class="px-4 py-5 sm:p-6 flex">
				<Toggle
					v-model="settings.ignore_night_time"
					title="Ignore weather during night time"
				/>

                <div class="ml-auto">
                    <button
                        @click="showSaveModal = true"
                        type="button"
                        class="inline-flex mr-4 items-center px-3 py-1 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        <CheckIcon class="-ml-1 mr-2 h-5 w-5" />
                        Save list
                    </button>

                    <button
                        @click="showSavedModal = true"
                        type="button"
                        class="inline-flex items-center px-3 py-1 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        <ViewListIcon class="-ml-1 mr-2 h-5 w-5" />
                        Show saved
                    </button>
                </div>
			</div>
		</div>

		<Save v-model="showSaveModal" />
        <Saved v-model="showSavedModal" />
	</div>
</template>

<script>
import Toggle from "@/components/tailwind/Toggle";
import { CheckIcon, ViewListIcon } from '@vue-hero-icons/outline';
import Save from '@/components/Save';
import Saved from '@/components/Saved';

export default {
	data() {
		return {
			settings: {
				ignore_night_time: true,
			},
			showSaveModal: false,
            showSavedModal: false,
		};
	},
	mounted() {
		this.$emit("update-settings", this.settings);
	},
	components: {
		Toggle,
        CheckIcon,
        ViewListIcon,
        Save,
        Saved,
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
