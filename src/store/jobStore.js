import { reactive } from "vue";

export default reactive({
    jobs: [],
    currJob: null,
    updateJobs(jobs) {
        this.jobs = jobs;
    },
    updateCurrJob(job = null) {
        this.currJob = job;
    }
});
