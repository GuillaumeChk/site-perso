<template>
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
</template>

<style scoped>
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
