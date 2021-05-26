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
								<h1 class="flex-shrink-0 text-white text-2xl">
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
											Dashboard
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>

		<main class="-mt-24 pb-8">
			<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
				<h1 class="sr-only">Page title</h1>
				<div
					class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8"
				>
					<div class="grid grid-cols-1 gap-4 lg:col-span-2">
						<section aria-labelledby="section-1-title">
							<h2 class="sr-only" id="section-1-title">Map</h2>
							<div
								class="rounded-lg bg-white overflow-hidden shadow"
							>
								<div class="p-6">
									<l-map
										:zoom="zoom"
										:center="center"
										style="height: 95vh; width: 100%"
										@click="addPath"
									>
										<l-tile-layer :url="url" />

										<l-polyline
											:lat-lngs="polyline.latlngs"
											:color="polyline.color"
											@click="removePath"
										/>
									</l-map>
								</div>
							</div>
						</section>
					</div>

					<div class="grid grid-cols-1 gap-4">
						<section aria-labelledby="section-2-title">
							<h2 class="sr-only" id="section-2-title">Settings</h2>
							<div
								class="rounded-lg bg-white overflow-hidden shadow"
							>
								<div class="p-6">
									<!-- Settings goes here -->
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import Yr from "./services/Yr";

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
			yr: new Yr(),
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
