import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/parcours",
			name: "career",
			component: () => import("../views/Career.vue"),
		},
		{
			path: "/competences",
			name: "skills",
			component: () => import("../views/Skills.vue"),
		},
		{
			path: "/motivations",
			name: "motivations",
			component: () => import("../views/Motivations.vue"),
		},
	],
});

export default router;
