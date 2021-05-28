<template>
    <li class="py-4">
        <div class="flex items-center space-x-4">
            <div class="flex-1 min-w-0">
                <p
                    class="text-sm font-medium text-gray-900 truncate"
                    v-text="list.name"
                />
                <p
                    class="text-sm text-gray-500 truncate"
                    v-text="$luxon(list.created_at, 'short')"
                />
            </div>
            <div v-if="confirmDelete">
                <button @click="remove" class="danger pill">Delete</button>

                <button @click="confirmDelete = false" class="ml-2 pill">
                    Keep
                </button>
            </div>
            <div v-else>
                <button @click="restore" class="pill">Restore</button>

                <button @click="confirmDelete = true" class="ml-2 danger pill">
                    Delete
                </button>
            </div>
        </div>
    </li>
</template>

<script>
import Storage from "@/services/Storage";

export default {
    data() {
        return {
            storage: new Storage(),
            confirmDelete: false,
        };
    },
    props: {
        list: {
            type: Object,
            required: true,
        },
    },
    methods: {
        restore() {
            this.$store.commit("setLocations", this.list.locations);
        },
        remove() {
			let lists = this.storage.get('drizzle-locations');
			lists.splice(this.$vnode.key, 1);
            this.storage.set('drizzle-locations', lists);
			this.$emit('update');
        },
    },
};
</script>
