<template>
	<RouterView />
</template>

<script setup>
import { RouterView } from "vue-router";
import { onMounted } from "vue";

import { watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

watch(
	() => route.fullPath,
	() => {
		console.log("route change");

		setTimeout(() => {
			var elements3 = document.getElementsByClassName("appear-left3");
			for (var i = 0; i < elements3.length; i++) {
				elements3[i].classList.add("show3");
			}

			// console.log("3");
		}, 0);
	}
);

onMounted(() => {
	setTimeout(() => {
		var elements = document.getElementsByClassName("appear-left2");
		for (var i = 0; i < elements.length; i++) {
			elements[i].classList.add("show2");
		}

		// console.log("1");
	}, 250);
});
</script>
