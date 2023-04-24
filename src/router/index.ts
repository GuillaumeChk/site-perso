import { createRouter, createWebHistory } from "vue-router";
import Realisations from "../views/Realisations.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: Realisations,
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
			path: "/realisations",
			name: "realisations",
			component: () => import("../views/Realisations.vue"),
		},
	],
});

export default router;
