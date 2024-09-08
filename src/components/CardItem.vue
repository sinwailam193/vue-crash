<script setup>
import { RouterLink } from "vue-router";
import cn from "classnames";

defineProps({
    link: String,
    title: String,
    subtitle: String,
    isEmployer: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <div
        :class="
            cn('p-6 rounded-lg shadow-md', {
                'bg-green-100': isEmployer,
                'bg-gray-100': !isEmployer
            })
        "
    >
        <h2 class="text-2xl font-bold">{{ title }}</h2>
        <p class="mt-2 mb-4">{{ subtitle }}</p>
        <RouterLink
            :to="link"
            class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            :class="
                cn('inline-block text-white rounded-lg px-4 py-2', {
                    'bg-green-500 hover:bg-green-600': isEmployer,
                    'bg-black hover:bg-gray-700': !isEmployer
                })
            "
        >
            {{ isEmployer ? "Add job" : "Browse jobs" }}
        </RouterLink>
    </div>
</template>
