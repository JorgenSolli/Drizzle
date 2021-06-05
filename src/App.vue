<template>
	<div class="h-full flex flex-col">
		<transition name="fade" mode="out-in">
			<main>
				<Navigation />
				<RouterView />
			</main>
		</transition>

		<Footer/>
	</div>
</template>

<script>
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default {
	data() {
		return {
			settings: {},
		};
	},
	components: {
		Footer,
		Navigation,
	}
};
</script>
