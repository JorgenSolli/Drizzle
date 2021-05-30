<template>
    <div>
        <button
            @click="showContent = true"
            type="button"
            class="inline-flex mr-4 items-center px-3 py-1 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
            <CheckIcon class="-ml-1 mr-2 h-5 w-5" />
            Save list
        </button>

        <portal to="save-modal">
            <Modal
                v-model="showContent"
                @close="showContent = false"
                :close-on-outside-click="false"
            >
                <template #header>Save current locations</template>

                <template #icon>
                    <div
                        class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10"
                    >
                        <CheckIcon class="h-6 w-6 text-green-600" />
                    </div>
                </template>

                <template #content>
                    <div v-if="locations.length">
                        <label
                            for="name"
                            class="block text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>

                        <div class="mt-1 relative rounded-md shadow-sm">
                            <input
                                type="text"
                                name="name"
                                v-model="name"
                                class="shadow-sm block w-full pr-10 sm:text-sm rounded-md"
                                :class="{
                                    'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500': error,
                                    'focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300': !error,
                                }"
                                placeholder="My cool road trip"
                            />
                            <div
                                v-if="error"
                                class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
                            >
                                <ExclamationCircleIcon
                                    class="h-5 w-5 text-red-500"
                                />
                            </div>
                        </div>
                        <p v-if="error" class="mt-2 text-sm text-red-600">
                            You must specify a name.
                        </p>

                        <Message
                            :show="didSave"
                            success
                            :message="`The list has been saved as ${savedName}`"
                            class="mt-4"
                        />
                    </div>

                    <Message
                        :show="!locations.length"
                        info
                        message="You need to add at least one location before you can save the list"
                    />
                </template>

                <template #actions>
                    <button
                        v-if="!didSave && locations.length"
                        @click="save"
                        type="button"
                        class="mt-3 w-full inline-flex justify-center rounded-md shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                        Save
                    </button>
                </template>
            </Modal>
        </portal>
    </div>
</template>

<script>
import { CheckIcon, ExclamationCircleIcon } from "@vue-hero-icons/outline";
import { DateTime } from "luxon";
import Storage from "@/services/Storage";
import Modal from "@/components/tailwind/Modal";
import { mapState } from "vuex";
import Message from "@/components/tailwind/Message";

export default {
    data() {
        return {
            showContent: false,
            storage: new Storage(),
            error: false,
            didSave: false,
            savedName: null,
            name: "",
        };
    },
    components: {
        Modal,
        Message,
        CheckIcon,
        ExclamationCircleIcon,
    },
    computed: {
        ...mapState({
            locations: (state) => state.locations,
        }),
    },
    watch: {
        name() {
            if (this.name.length) {
                this.error = false;
            }
        },
        showContent() {
            this.resetModal();
        },
    },
    methods: {
        save() {
            if (!this.name.length) {
                this.error = true;
                this.didSave = false;
                return;
            }

            let location = {
                name: this.name,
                created_at: DateTime.now(),
                locations: this.locations,
            };

            let locations = this.storage.get("drizzle-locations");
            if (locations) {
                locations.push(location);
            } else {
                locations = [location];
            }

            this.storage.set("drizzle-locations", locations);

            this.savedName = this.name;
            this.name = "";
            this.error = false;
            this.didSave = true;
        },
        resetModal() {
            this.name = "";
            this.savedName = this.name;
            this.error = false;
            this.didSave = false;
        },
    },
};
</script>
