<template>
	<div class="snowflakes" aria-hidden="true">
		<!-- Add as many .snowflake tags as you want -->
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
		<div class="snowflake"></div>
	</div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
	const snowflakes = document.querySelectorAll(".snowflake");

	snowflakes.forEach((snowflake) => {
		snowflake.style.setProperty("--num-snowflakes", snowflakes.length);
		snowflake.style.setProperty("--random", Math.random());
		snowflake.style.setProperty("--random2", Math.random());
		snowflake.style.setProperty("--random3", Math.random());
	});
});
</script>

<style>
.snowflakes {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
	z-index: -1;
}

.snowflake {
	position: relative;
	top: 0;
	left: 0;
	display: block;
	width: 15px;
	height: 15px;
	background: #d3eeff;
	border-radius: 50%;
	/* box-shadow: 0 0 10px rgba(138, 222, 255, 0.5); */

	--snowflake-speed: calc((1s / var(--random) * 3));
	--snowflake-scale: calc(1 + var(--random2) * 1.5);
	--snowflake-left: calc(100vw * var(--random3));

	transform: scale(var(--snowflake-scale)) translateX(var(--snowflake-left))
		rotate(180deg);
	animation: snowfall var(--snowflake-speed) linear infinite;
}

@keyframes snowfall {
	100% {
		top: -50%;
		opacity: 1;

		left: 0%;
	}
	77% {
		left: 3%;
	}
	50% {
		left: 0%;
		opacity: 0.7;
	}
	33% {
		left: -3%;
	}
	0% {
		top: 100%;
		opacity: 0;
		left: 0%;
	}
}
</style>
