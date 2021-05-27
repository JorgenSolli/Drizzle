<template>
    <LMap
        :zoom="zoom"
        :center="center"
        style="height: 500px; width: 100%"
        @click="addMarker"
    >
        <LTileLayer :url="url" />

		<LMarker
			v-for="(location, index) in locations"
			ref="locations"
			@click="removeLocation"
			:key="location.id"
			:lat-lng="[location.lat, location.lng]"
		>
			<LTooltip>
				{{ `Location #${index + 1}` }}
			</LTooltip>
		</LMarker>
    </LMap>
</template>

<script>
export default {
	data() {
		return {
			zoom: 6,
			center: [60.8847597382675, 8.338560014963152],
			url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
		};
	},
	props: {
		locations: {
			type: Array,
			required: true,
		}
	},
	methods: {
		addMarker(event) {
			let coordinates = event.latlng;
			this.$emit('new-location', coordinates);
		},
		removeLocation(event) {
			console.log(event);
		},
	},
};
</script>
