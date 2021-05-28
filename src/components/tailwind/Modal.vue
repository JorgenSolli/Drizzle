<template>
    <transition @after-enter="showContent = true">
        <div v-if="value" class="fixed z-30 inset-0 overflow-y-auto">
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <transition
                    enter-class="transform opacity-0"
                    enter-active-class="transition ease-out duration-300"
                    enter-to-class="transform opacity-100"
                    leave-class="transform opacity-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-to-class="transform opacity-0"
                    @after-leave="close"
                >
                    <div
                        v-if="showContent"
                        @click="clickOutside"
                        class="fixed inset-0 transition-opacity"
                        aria-hidden="true"
                    >
                        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                </transition>

                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <transition
                    enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enter-active-class="ease-out duration-300"
                    enter-to-class="opacity-100 translate-y-0 sm:scale-100"
                    leave-class="opacity-100 translate-y-0 sm:scale-100"
                    leave-active-class="ease-in duration-200"
                    leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    @after-leave="close"
                >
                    <div
                        v-if="showContent"
                        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                        :class="sizeClass"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-headline"
                    >
                        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div class="sm:flex sm:items-start">
                                <slot name="icon"/>

                                <div
                                    class="sm:ml-4 mt-3 text-center sm:mt-0 sm:text-left w-full"
                                >
                                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                                        <slot name="header"/>
                                    </h3>

                                    <div class="mt-2">
                                        <p class="text-sm text-gray-500">
                                            <slot name="content"/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <slot name="actions"/>
                            <button
                                @click="showContent = false"
                                type="button"
                                class="button mt-3 w-full inline-flex justify-center border-gray-300 bg-white text-base text-gray-700 hover:bg-gray-50 focus:ring-gray sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                v-text="closeText"
                            />
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            showContent: false,
        }
    },
    props: {
        value: {
            type: Boolean
        },
        size: {
            type: String,
            required: false,
            default: '',
        },
        closeOnOutsideClick: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    computed: {
        closeText() {
            return 'Close'
        },
        sizeClass() {
            if (this.size == 'medium') {
                return 'md:max-w-5xl'
            } else if (this.size == 'large') {
                return 'md:max-w-2xl'
            }

            return ''
        }
    },
    methods: {
        clickOutside() {
            if (this.closeOnOutsideClick) {
                this.showContent = false
            }
        },
        close() {
            this.$emit('input', false)
        }
    }
}
</script>
