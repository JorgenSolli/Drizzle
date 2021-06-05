<template>
    <div class="pt-8">
        <portal-target name="save-modal"/>
		<portal-target name="saved-modal"/>
		<portal-target name="day-modal"/>

        <h1 class="sr-only">Map</h1>
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
    </div>
</template>

<script>
import Map from "@/components/Map";
import Location from "@/components/weather/Location";
import Settings from "@/components/Settings";
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
