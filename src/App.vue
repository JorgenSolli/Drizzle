<template>
	<div class="h-full flex flex-col">
		<div class="relative bg-white overflow-hidden shadow">
			<div class="max-w-7xl mx-auto">
				<div
					class="relative z-10 lg:max-w-2xl lg:w-full"
				>
					<div class="relative pb-4 pt-6 px-4 sm:px-6 lg:px-8">
						<nav
							id="navigation"
							class="relative flex items-center justify-between sm:h-10 lg:justify-start"
							aria-label="Global"
						>
							<div
								class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
							>
								<div
									class="flex items-center justify-between w-full md:w-auto"
								>
									<RouterLink to="/">
										<span class="sr-only">Drizzle</span>
										<img
											class="h-8 w-auto sm:h-10"
											src="@/assets/logo.png"
										/>
									</RouterLink>
								</div>
							</div>
							<div
								class="hidden md:block md:ml-10 md:pr-4 md:space-x-8"
							>
								<RouterLink
									to="/"
									class="menu-item font-medium"
								>
									Drizzle
								</RouterLink>

								<RouterLink
									to="/about"
									class="menu-item font-medium"
								>
									About
								</RouterLink>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>

		<transition name="fade" mode="out-in">
			<main class="">
				<RouterView />
			</main>
		</transition>

		<Footer/>
	</div>
</template>

<script>
import Footer from '@/components/Footer';

export default {
	data() {
		return {
			settings: {},
		};
	},
	components: {
		Footer,
	}
};
</script>
