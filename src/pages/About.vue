<template>
	<div class="pt-8">
		<div class="relative">
			<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
				<div
					class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden"
				>
					<div class="absolute inset-0">
						<img
							class="h-full w-full object-cover"
							src="@/assets/images/road_trip.jpg"
							alt="Road"
						/>
						<div
							class="absolute inset-0 bg-gray-400 mix-blend-multiply"
						/>
					</div>
					<div
						class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8"
					>
						<h1
							class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
						>
							<span class="block text-white">
								The perfect impulsive
							</span>
							<span class="block text-indigo-200">road trip</span>
						</h1>
						<p
							class="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl"
						>
							Road trips are great fun, but weather can often end
							up ruining the moment. Drizzle was made to help you
							make better choices before starting your journey.
						</p>
						<div
							class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center"
						>
							<div
								class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5"
							>
								<RouterLink
									to="/"
									class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
								>
									Try it out
								</RouterLink>

								<a
									href="#"
									class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
								>
									Read more
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="relative pt-16 pb-32 overflow-hidden">
			<div class="relative">
				<div
					class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
				>
					<div
						class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0"
					>
						<div>
							<div>
								<span
									class="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600"
								>
									<ScaleIcon class="h-6 w-6 text-white"/>
								</span>
							</div>
							<div class="mt-6">
								<h2
									class="text-3xl font-extrabold tracking-tight text-gray-900"
								>
									Make greate choices, supported by data
								</h2>
								<p class="mt-4 text-lg text-gray-500">
									Checking weather data for multiple locations
									for a plannet trip can be tedious with the
									way most weather apps work.<br /><br />
									With Drizzle, you can easily get an overview
									of your journey with data such as
									probability of rain and temperature.
								</p>

								<div class="mt-6">
									<RouterLink
										to="/"
										class="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
									>
										Try it out
									</RouterLink>
								</div>
							</div>
						</div>
					</div>
					<div class="mt-12 sm:mt-16 lg:mt-0">
						<div
							class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
						>
							<img
								class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
								src="@/assets/images/data.png"
								alt="Customer profile user interface"
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="mt-24">
				<div
					class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
				>
					<div
						class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2"
					>
						<div>
							<div>
								<span
									class="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600"
								>
									<ChartSquareBarIcon class="h-6 w-6 text-white"/>
								</span>
							</div>
							<div class="mt-6">
								<h2
									class="text-3xl font-extrabold tracking-tight text-gray-900"
								>
									Dig even deeper
								</h2>
								<p class="mt-4 text-lg text-gray-500">
									Easily get detailed information about
									specific days for specific locations on your
									trip to even further analyze the data.
								</p>
								<div class="mt-6">
									<RouterLink
										to="/"
										class="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
									>
										Try it out
									</RouterLink>
								</div>
							</div>
						</div>
					</div>
					<div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
						<div
							class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
						>
							<img
								class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
								src="@/assets/images/data_details.png"
								alt="Customer profile user interface"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ScaleIcon, ChartSquareBarIcon } from '@vue-hero-icons/outline'
export default {
	components: {
		ScaleIcon,
		ChartSquareBarIcon
	}
};
</script>
