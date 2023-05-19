<template>
	<div class="column justify-evenly main-box">
		<div class="appear-left2">
			<div class="gt-xs title text-center">Guillaume C</div>
			<div class="lt-sm text-center q-pb-md" style="font-size: 35px">
				Guillaume C
			</div>

			<nav class="row justify-center q-gutter-y-none q-gutter-x-xl">
				<RouterLink style="letter-spacing: 0.1em" to="/realisations"
					>réalisations</RouterLink
				>
				<RouterLink style="letter-spacing: 0.1em" to="/competences"
					>compétences</RouterLink
				>
				<RouterLink style="letter-spacing: 0.1em" to="/parcours"
					>à propos</RouterLink
				>
			</nav>
		</div>

		<div class="scroll-box appear-left2">
			<div class="row inline no-wrap q-gutter-xl">
				<img
					src="@/assets/Capture_site_desfees.jpg"
					fit="cover"
					style="border-radius: 25px; width: 460px; height: 300px"
				/>
				<img
					src="@/assets/Capture_OC_2.jpg"
					fit="cover"
					style="border-radius: 25px; width: 530px; height: 300px"
				/>
				<img
					src="@/assets/Capture_OC_3.jpg"
					fit="cover"
					style="border-radius: 25px; height: 300px; width: 200px"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Top from "../components/Top.vue";
import Navbar from "../components/Navbar.vue";

let tab = ref("unique");

onMounted(() => {
	setTimeout(() => {
		var elements2 = document.getElementsByClassName("appear-left2");
		for (var i = 0; i < elements2.length; i++) {
			elements2[i].classList.add("show2");
		}

		// console.log("2");
	}, 250);
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
