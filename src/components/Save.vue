<template>
	<transition @after-enter="showContent = true">
		<div v-if="value" class="fixed z-30 inset-0 overflow-y-auto">
			<div
				class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
			>
				<transition
					enter-class="transform opacity-0"
					enter-active-class="transition ease-out duration-300"
					enter-to-class="transform opacity-100"
					leave-class="transform opacity-100"
					leave-active-class="transition ease-in duration-75"
					leave-to-class="transform opacity-0"
					@after-leave="close"
				>
					<div
						v-if="showContent"
						@click="clickOutside"
						class="fixed inset-0 transition-opacity"
						aria-hidden="true"
					>
						<div
							class="absolute inset-0 bg-gray-500 opacity-75"
						/>
					</div>
				</transition>

				<span
					class="hidden sm:inline-block sm:align-middle sm:h-screen"
					aria-hidden="true"
					>&#8203;</span
				>

				<transition
					enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					enter-active-class="ease-out duration-300"
					enter-to-class="opacity-100 translate-y-0 sm:scale-100"
					leave-class="opacity-100 translate-y-0 sm:scale-100"
					leave-active-class="ease-in duration-200"
					leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					@after-leave="close"
				>
					<div
						v-if="showContent"
						class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
						role="dialog"
						aria-modal="true"
						aria-labelledby="modal-headline"
					>
						<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
							<div class="sm:flex sm:items-start">
								<CheckIcon class="h-6 w-6 text-green-600" />

								<div
									class="sm:ml-4 mt-3 text-center sm:mt-0 sm:text-left w-full"
								>
									<h3
										class="text-lg leading-6 font-medium text-gray-900"
									>
										Save locations
									</h3>

									<div class="mt-2">
										<div>
											<label
												for="email"
												class="block text-sm font-medium text-gray-700"
                                            >
                                                Name
                                            </label>

											<div class="mt-1">
												<input
													type="text"
													v-model="name"
													class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
													placeholder="My cool journey"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div
							class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
						>
                            <button
								@click="save"
								type="button"
								class="button mt-3 w-full inline-flex justify-center border-green-500 bg-green-400 text-base text-white hover:bg-green-500 focus:ring-green sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
							>
                                Save list
                            </button>

							<button
								@click="showContent = false"
								type="button"
								class="button mt-3 w-full inline-flex justify-center border-gray-300 bg-white text-base text-gray-700 hover:bg-gray-50 focus:ring-gray sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
							>
                                Close
                            </button>
						</div>
					</div>
				</transition>
			</div>
		</div>
	</transition>
</template>

<script>
import { CheckIcon } from "@vue-hero-icons/outline";
import Storage from '@/services/Storage';
import { mapState } from 'vuex';

export default {
	data() {
		return {
			showContent: false,
            storage: new Storage,
            error: false,
            didSave: false,
            name: null,
		};
	},
	props: {
		value: {
			type: Boolean,
		},
	},
	components: {
		CheckIcon,
	},
	computed: {
        ...mapState({
			locations: state => state.locations,
		}),
		closeText() {
			return "Tilbake";
		},
	},
	methods: {
        clickOutside() {
            this.showContent = false;
            this.resetModal();
		},
		close() {
            this.resetModal();
		},
        save() {
            if (!this.name) {
                this.error = true;
                this.didSave = false;
            }

            let locations = this.storage.get('drizzle-locations');
            locations.push({
                name: this.name,
                locations: this.locations,
            });
            this.storage.set('drizzle-locations', locations)

            this.name = null;
            this.error = false;
            this.didSave = true;
        },
        resetModal() {
            this.name = null;
            this.error = false;
            this.didSave = false;
        }
	},
};
</script>
