<template>
    <LMap
        :zoom="zoom"
        :center="center"
        style="height: 95vh; width: 100%"
        @click="addPath"
    >
        <LTileLayer :url="url" />

        <LPolyline
            :lat-lngs="polyline.latlngs"
            :color="polyline.color"
            @click="removePath"
        />
    </LMap>
</template>

<script>
export default {
	data() {
		return {
			zoom: 6,
			center: [60.8847597382675, 8.338560014963152],
			url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
			polyline: {
				latlngs: [],
				color: "green",
			},
			weather: [],
		};
	},
	methods: {
		addPath(event) {
			this.polyline.latlngs.push(event.latlng);
		},
		removePath(event) {
			console.log(event);
		},
		checkWeather() {
			this.weather = this.yr.gatherData(this.polyline.latlngs);
		},
	},
};
</script>
