<template>
    <div>
        <button
            @click="$emit('check-weather')"
            type="button"
            class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            <CloudIcon
                class="-ml-0.5 mr-2 h-4 w-4"
                aria-hidden="true"
            />
            Check Weather
        </button>
    </div>
</template>

<script>
import { CloudIcon } from '@vue-hero-icons/outline'

export default {
    components: {
        CloudIcon
    }
}
</script>
