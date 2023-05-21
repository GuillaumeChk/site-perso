<template>
	<q-btn
		class="langToggle q-pa-none"
		flat
		unelevated
		style="height: 30px; width: 50px"
		@click="toggleLanguage()"
		><img
			fit="cover"
			style="height: 30px; width: 50px"
			:src="getImageUrl(flagImage)"
	/></q-btn>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref } from "vue";

const { t, locale } = useI18n({ useScope: "global" });

let flagImage = ref("Flag_of_the_United_Kingdom_(3-5).png");

function getImageUrl(subPath) {
	return new URL(`../assets/${subPath}`, import.meta.url).href;
}

const toggleLanguage = () => {
	if (locale.value === "fr") {
		locale.value = "en";
		flagImage.value = "FR.svg";
	} else {
		locale.value = "fr";
		flagImage.value = "Flag_of_the_United_Kingdom_(3-5).png";
	}
};
</script>

<style scoped>
.langToggle {
	position: fixed;
	bottom: 10px;
	left: 50%;
	margin-left: -25px;
}
</style>
