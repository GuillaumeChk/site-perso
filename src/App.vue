<template>
	<div class="column justify-evenly box">
		<div>
			<Top />

			<nav class="row justify-center q-gutter-xl">
				<RouterLink style="letter-spacing: 0.1em" to="/parcours"
					>réalisations</RouterLink
				>
				<RouterLink style="letter-spacing: 0.1em" to="/competences"
					>compétences</RouterLink
				>
				<RouterLink style="letter-spacing: 0.1em" to="/motivations"
					>à propos</RouterLink
				>
			</nav>
		</div>

		<div class="scroll-box">
			<div class="row inline no-wrap q-gutter-xl">
				<q-img
					src="src/assets/Capture_site_desfees.jpg"
					fit="cover"
					style="border-radius: 30px; width: 460px; height: 300px"
				></q-img>
				<q-img
					src="src/assets/Capture_OC_2.jpg"
					fit="cover"
					style="border-radius: 30px; width: 530px; height: 300px"
				></q-img>
				<q-img
					src="src/assets/Capture_OC_3.jpg"
					fit="cover"
					style="border-radius: 30px; height: 300px; width: 200px"
				></q-img>
				<q-img
					src="src/assets/Capture_OC_2.jpg"
					fit="cover"
					style="border-radius: 30px; width: 530px; height: 300px"
				></q-img>
			</div>
		</div>
	</div>

	<!-- <div class="q-py-xl">
		<RouterView />
	</div> -->
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Top from "./components/Top.vue";

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
nav {
	/* width: max-content;
	display: flex; */
}

.box {
	display: flex;
	width: 100%;
}

.scroll-box {
	height: 300px;
	width: 80%;
	overflow-x: scroll;
	margin: 0 auto;

	background-color: red;
}

.tabs {
	border: 1px solid whitesmoke;
}

.tab {
	letter-spacing: 0.08em;
	text-transform: uppercase;
	padding: 1px;
}
</style>
