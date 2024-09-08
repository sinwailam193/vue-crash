<script setup>
import HeroItem from "../components/HeroItem.vue";
import CardItem from "../components/CardItem.vue";
import JobListing from "../components/JobListing.vue";
</script>

<template>
    <main>
        <HeroItem
            title="Become a Vue dev"
            subtitle="Find the Vue job that fits your skills and needs"
        />
        <section class="py-4">
            <div class="container-xl lg:container m-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <CardItem
                        link="/jobs"
                        :isEmployer="false"
                        title="For developers"
                        subtitle="Browse our Vue jobs and start your career today"
                    />
                    <CardItem
                        link="/add-job"
                        :isEmployer="true"
                        title="For employers"
                        subtitle="List your job to find the perfect developer for the role"
                    />
                </div>
            </div>
        </section>
        <JobListing :limit="3" :showViewAll="true" />
    </main>
</template>
