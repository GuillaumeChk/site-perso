<template>
	<div class="column justify-evenly main-box">
		<div class="appear-left2">
			<div class="gt-xs title text-center">Guillaume C</div>
			<div class="lt-sm text-center q-pb-md" style="font-size: 35px">
				Guillaume C
			</div>

			<nav class="row justify-center q-gutter-y-none q-gutter-x-xl">
				<RouterLink style="letter-spacing: 0.1em" to="/realisations">{{
					$t("navbar.achievement")
				}}</RouterLink>
				<RouterLink style="letter-spacing: 0.1em" to="/competences">{{
					$t("navbar.skills")
				}}</RouterLink>
				<RouterLink style="letter-spacing: 0.1em" to="/parcours">{{
					$t("navbar.about")
				}}</RouterLink>
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
	<q-btn class="langToggle" @click="toggleLanguage()">lang</q-btn>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Top from "../components/Top.vue";
import Navbar from "../components/Navbar.vue";

let tab = ref("unique");

import { useI18n } from "vue-i18n";

const { t, locale } = useI18n({ useScope: "global" });

const toggleLanguage = () => {
	if (locale.value === "fr") {
		locale.value = "en";
	} else {
		locale.value = "fr";
	}
};

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
.langToggle {
	position: fixed;
	bottom: 10px;
}
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

/* //Navbar */
.title {
	font-size: 50px;
}

a {
	position: relative;
	color: white;
	text-decoration: none;
}

a:hover {
	color: white;
}

a::before {
	content: "";
	position: absolute;
	display: block;
	width: 100%;
	height: 2px;
	bottom: 0;
	left: 0;
	background-color: white;
	transform: scaleX(0);
	transform-origin: top left;
	transition: transform 0.3s ease;
}

a:hover::before {
	transform: scaleX(1);
}
</style>
