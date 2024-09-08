<script setup>
import { computed, ref } from "vue";
import { MapPinIcon } from "@heroicons/vue/20/solid";

const { job } = defineProps({
    job: Object
});

const showFullDescription = ref(false);
const truncatedDescription = computed(() => {
    let { description } = job;
    if (!showFullDescription.value) {
        description = description.slice(0, 90).trim() + "...";
    }

    return description;
});
</script>

<template>
    <div class="bg-white rounded-xl shadow-md relative">
        <div class="p-4">
            <div class="mb-6">
                <div class="text-gray-600 my-2">{{ job.type }}</div>
                <h3 class="text-xl font-bold">{{ job.title }}</h3>
            </div>
            <div class="mb-5">
                <p>
                    {{ truncatedDescription }}
                </p>
                <button
                    class="text-green-500 hover:text-green-600 mt-2 mb-5"
                    @click="showFullDescription = !showFullDescription"
                >
                    {{ showFullDescription ? "Less" : "More" }}
                </button>
            </div>
            <h3 class="text-green-500 mb-2">{{ job.salary }}</h3>
            <div class="border border-gray-100 mb-5"></div>
            <div class="flex flex-col lg:flex-row justify-between mb-4">
                <div class="text-orange-700 mb-3 flex items-center">
                    <MapPinIcon class="w-5 h-5 mr-1" />
                    {{ job.location }}
                </div>
                <RouterLink
                    :to="`/job/${job.id}`"
                    class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                    Read More
                </RouterLink>
            </div>
        </div>
    </div>
</template>
