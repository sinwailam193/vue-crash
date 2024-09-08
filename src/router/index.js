import { createRouter, createWebHistory } from "vue-router";

import NavBar from "../components/NavBar.vue";
import HomeView from "../views/HomeView.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
        {
            path: "/",
            name: "home",
            components: {
                default: HomeView,
                NavBar
            }
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/AboutView.vue")
        }
    ]
});

export default router;
