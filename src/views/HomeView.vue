<template>
	<div class="column justify-evenly main-box">
		<div>
			<NavBar />
		</div>

		<div class="scroll-box">
			<div class="row inline no-wrap q-gutter-xl">
				<q-img
					src="src/assets/Capture_site_desfees.jpg"
					fit="cover"
					style="border-radius: 25px; width: 460px; height: 300px"
				></q-img>
				<q-img
					src="src/assets/Capture_OC_2.jpg"
					fit="cover"
					style="border-radius: 25px; width: 530px; height: 300px"
				></q-img>
				<q-img
					src="src/assets/Capture_OC_3.jpg"
					fit="cover"
					style="border-radius: 25px; height: 300px; width: 200px"
				></q-img>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Top from "../components/Top.vue";
import NavBar from "../components/NavBar.vue";

let tab = ref("unique");

onMounted(() => {
	// Animate on scroll (when visible)
	const inViewport = (entries, observer) => {
		entries.forEach((entry) => {
			entry.target.classList.toggle("show", entry.isIntersecting);
		});
	};

	const Observer = new IntersectionObserver(inViewport);
	let options = {
		root: null,
		rootMargin: "0px",
		threshold: 1,
	};

	// Attach observer to every [data-inviewport] element:
	const Elements_inViewport = document.querySelectorAll(
		".appear-left, .appear-right, .appear-bottom"
	);
	Elements_inViewport.forEach((element) => {
		Observer.observe(element, options);
	});
});
</script>

<style scoped>
.main-box {
	display: flex;
	width: 100%;
}

.scroll-box {
	height: 325px;
	width: 100%;
	overflow-x: scroll;
	overflow-y: auto;
	margin-top: 5px;
}
@media (min-width: 1024px) {
	.scroll-box {
		width: 80%;
		margin: 0 auto;
	}
}

.tabs {
	border: 1px solid whitesmoke;
}

.tab {
	letter-spacing: 0.08em;
	text-transform: uppercase;
	padding: 1px;
}

/* width */
::-webkit-scrollbar {
	width: 7px;
	height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
	background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
	background: #eee;
	border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
	background: #e3e3e3;
}
</style>
