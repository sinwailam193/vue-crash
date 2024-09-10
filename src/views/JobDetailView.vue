<script setup>
import { watchEffect, onUnmounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import BackButton from "../components/BackButton.vue";
import jobStore from "../store/jobStore";
import jobsJson from "../jobs.json";

const route = useRoute();
const router = useRouter();

watchEffect(() => {
    const foundJob = jobsJson.find((job) => job.id.toString() === route.params.id);
    if (!foundJob) {
        router.push({ name: "JobsNotFound", replace: true });
        return;
    }
    jobStore.updateCurrJob(foundJob);
});
onUnmounted(() => jobStore.updateCurrJob());
</script>

<template>
    <div class="bg-green-50 h-[calc(100%-81px)]">
        <BackButton />
        <section>
            <div v-if="!!jobStore.currJob" class="container m-auto py-10 px-6">
                <div class="grid grid-cols-1 lg:grid-cols-[70%30%] w-full gap-6">
                    <main>
                        <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                            <div class="text-gray-500 mb-4">{{ jobStore.currJob.type }}</div>
                            <h1 class="text-3xl font-bold mb-4">{{ jobStore.currJob.title }}</h1>
                            <div
                                class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                            >
                                <i
                                    class="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
                                ></i>
                                <p class="text-orange-700">{{ jobStore.currJob.location }}</p>
                            </div>
                        </div>

                        <div class="bg-white p-6 rounded-lg shadow-md mt-6">
                            <h3 class="text-green-800 text-lg font-bold mb-6">Job Description</h3>

                            <p class="mb-4">
                                {{ jobStore.currJob.description }}
                            </p>

                            <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>

                            <p class="mb-4">{{ jobStore.currJob.salary }} / Year</p>
                        </div>
                    </main>

                    <!-- Sidebar -->
                    <aside>
                        <!-- Company Info -->
                        <div class="bg-white p-6 rounded-lg shadow-md">
                            <h3 class="text-xl font-bold mb-6">Company Info</h3>

                            <h2 class="text-2xl">{{ jobStore.currJob.company.name }}</h2>

                            <p class="my-2">
                                {{ jobStore.currJob.company.description }}
                            </p>

                            <hr class="my-4" />

                            <h3 class="text-xl">Contact Email:</h3>

                            <p class="my-2 bg-green-100 p-2 font-bold">
                                {{ jobStore.currJob.company.contactEmail }}
                            </p>

                            <h3 class="text-xl">Contact Phone:</h3>

                            <p class="my-2 bg-green-100 p-2 font-bold">
                                {{ jobStore.currJob.company.contactPhone }}
                            </p>
                        </div>

                        <!-- Manage -->
                        <div class="bg-white p-6 rounded-lg shadow-md mt-6">
                            <h3 class="text-xl font-bold mb-6">Manage Job</h3>
                            <a
                                href="add-jobStore.currJob.html"
                                class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                >Edit Job</a
                            >
                            <button
                                class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                            >
                                Delete Job
                            </button>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    </div>
</template>
