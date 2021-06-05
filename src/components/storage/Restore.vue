<template>
	<div>
		<portal to="saved-modal">
			<Modal
				v-model="showContent"
				@close="showContent = false"
				:close-on-outside-click="true"
			>
				<template #header> Save locations </template>

				<template #icon>
					<div
						class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10"
					>
						<ArchiveIcon class="h-6 w-6 text-blue-600" />
					</div>
				</template>

				<template #content>
					<div v-if="lists.length" class="flow-root mt-6">
						<ul class="-my-5 divide-y divide-gray-200">
							<List
								v-for="(list, index) in lists"
								:key="index"
								:list="list"
								@update="fetch"
							/>
						</ul>
					</div>

					<Message
						:show="!lists.length"
						info
						message="No saved lists"
					/>
				</template>
			</Modal>
		</portal>

		<button
			@click="showContent = true"
			type="button"
			class="inline-flex items-center px-3 py-1 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
		>
			<ArchiveIcon class="-ml-1 mr-2 h-5 w-5" />
			Restore saved
		</button>
	</div>
</template>

<script>
import { mapState } from "vuex";
import { ArchiveIcon } from "@vue-hero-icons/outline";
import Storage from "@/services/Storage";
import Modal from "@/components/tailwind/Modal";
import Message from "@/components/tailwind/Message";
import List from "@/components/storage/List";

export default {
	data() {
		return {
			showContent: false,
			lists: [],
			storage: new Storage(),
		};
	},
	components: {
		ArchiveIcon,
		Modal,
		Message,
		List,
	},
	computed: {
		...mapState({
			locations: (state) => state.locations,
		}),
	},
	mounted() {
		this.fetch()
	},
	watch: {
		showContent() {
			if (this.showContent) {
				this.fetch()
			}
		}
	},
	methods: {
		fetch() {
			let lists = this.storage.get("drizzle-locations");
			if (lists) {
				this.lists = lists;
			}
		},
	},
};
</script>
