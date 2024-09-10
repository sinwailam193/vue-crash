<script setup>
import { onMounted } from "vue";
import { RouterLink } from "vue-router";

import jobStore from "../store/jobStore";
import JobCard from "./JobCard.vue";
import jobsJson from "../jobs.json";

defineProps({
    limit: Number,
    showViewAll: {
        type: Boolean,
        default: false
    }
});

onMounted(() => {
    jobStore.updateJobs(jobsJson);
});
</script>

<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <JobCard
                    v-for="job in jobStore.jobs.slice(0, limit || jobStore.jobs.length)"
                    :key="job.id"
                    :job="job"
                />
            </div>
        </div>
    </section>
    <section v-if="showViewAll" class="m-auto max-w-lg my-10 p-6">
        <RouterLink
            to="/jobs"
            class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
            View all jobs
        </RouterLink>
    </section>
</template>
