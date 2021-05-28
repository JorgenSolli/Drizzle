<template>
    <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-out duration-200"
        leave-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
    >
        <div v-if="show" :class="`rounded-md p-4 bg-${color}-50`">
            <div class="flex">
                <div class="flex-shrink-0">
                    <CheckCircleIcon v-if="success != undefined" class="h-5 w-5 text-green-400"/>
                    <InformationCircleIcon v-else-if="info != undefined" class="h-5 w-5 text-blue-400"/>
                    <XCircleIcon v-else-if="error != undefined" class="h-5 w-5 text-red-400"/>
                </div>
                <div class="ml-3">
                    <h3 :class="`text-sm font-medium text-${color}-800`" v-if="title" v-text="title"/>
                    <div :class="`text-sm text-${color}-700`">
                        <p v-if="message" v-text="message"/>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { CheckCircleIcon, InformationCircleIcon, XCircleIcon } from '@vue-hero-icons/outline';

export default {
    props: {
        show: {
            required: true,
            type: Boolean
        },
        title: {
            required: false,
            type: String
        },
        message: {
            required: false,
            type: String
        },
        info: {
            required: false,
            default: undefined
        },
        error: {
            required: false,
            default: undefined
        },
        success: {
            required: false,
            default: undefined
        },
    },
    components: {
        CheckCircleIcon,
        InformationCircleIcon,
        XCircleIcon,
    },
    computed: {
        color() {
            if (this.info != undefined) {
                return 'blue';
            }

            if (this.error != undefined) {
                return 'red';
            }

            if (this.success != undefined) {
                return 'green';
            }

            return 'purple';
        }
    }
}
</script>