<template>
	<div class="min-h-screen bg-gray-100">
		<div class="bg-gray-800 pb-32">
			<nav class="bg-gray-800">
				<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
					<div class="border-b border-gray-700">
						<div
							class="flex items-center justify-between h-16 px-4 sm:px-0"
						>
							<div class="flex items-center">
								<img class="h-10" src="@/assets/logo.png"/>
								<h1 class="sr-only flex-shrink-0 text-white text-2xl">
									Drizzle
								</h1>
								<div class="hidden md:block">
									<div
										class="ml-10 flex items-baseline space-x-4"
									>
										<a
											href="#"
											class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
										>
											Drizzle
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>

		<h1 class="sr-only">Dashboard</h1>
		<main class="-mt-24 pb-8">
			<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
				<section aria-labelledby="map" class="mb-4">
					<h2 class="sr-only" id="map">Map</h2>
					<div class="rounded-lg bg-white overflow-hidden shadow">
						<Map ref="map" :locations="locations" @new-location="addLocation" />
					</div>
				</section>

				<section aria-labelledby="settings">
					<h2
						id="settings"
						class="text-lg leading-6 font-medium text-gray-900"
					>
						Settings
					</h2>
					<Settings @update-settings="updateSettings" />
				</section>

				<section aria-labelledby="locations">
					<h2
						id="locations"
						class="text-lg leading-6 font-medium text-gray-900"
					>
						Locations
					</h2>
					<Location
						v-for="(location, index) in locations"
						:key="index"
						:location="location"
						:name="`Location #${index + 1}`"
						:settings="settings"
						@remove-location="removeLocation"
					/>

					<div v-if="!locations.length" class="rounded-md bg-blue-50 p-4 mt-4">
						<div class="flex">
							<div class="flex-shrink-0">
								<InformationCircleIcon
									class="h-5 w-5 text-blue-400"
								/>
							</div>
							<div class="ml-3">
								<h3 class="text-sm font-medium text-blue-800">
									No locations added yet
								</h3>
								<div class="mt-2 text-sm text-blue-700">
									<p>
										Start by clicking on the map where you want to check the weather.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
	</div>
</template>

<script>
import Map from "./components/Map";
import Location from "./components/weather/Location";
import Settings from "./components/Settings";
import { InformationCircleIcon } from "@vue-hero-icons/outline";
import { mapState } from 'vuex';

export default {
	data() {
		return {
			settings: {},
		};
	},
	components: {
		Map,
		Settings,
		Location,
		InformationCircleIcon,
	},
	computed: {
		...mapState({
			locations: state => state.locations,
		})
	},
	methods: {
		addLocation(location) {
			this.$store.commit('addLocation', location)
		},
		removeLocation(key) {
			this.$store.commit('removeLocation', key)
		},
		updateSettings(settings) {
			this.settings = settings;
		},
	},
};
</script>
