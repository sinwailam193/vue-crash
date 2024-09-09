import { createRouter, createWebHistory } from "vue-router";

import NavBar from "../components/NavBar.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            strict: true,
            components: {
                default: HomeView,
                NavBar
            }
        },
        {
            path: "/jobs",
            name: "Jobs",
            strict: true,
            sensitive: true,
            components: {
                default: () => import("../views/JobsView.vue"),
                NavBar
            }
        },
        {
            path: "/jobs/:id",
            name: "JobsDetail",
            strict: true,
            sensitive: true,
            components: {
                default: () => import("../views/JobDetailView.vue"),
                NavBar
            }
        },
        {
            path: "/jobs/:id/:pathMatch(.*)*",
            name: "JobsNotFound",
            component: () => import("../views/NotFoundView.vue")
        },
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: () => import("../views/NotFoundView.vue")
        }
    ]
});

export default router;
