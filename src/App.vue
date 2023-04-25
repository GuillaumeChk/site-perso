<template>
	<header>
		<div class="wrapper">
			<Top class="q-mb-lg" />

			<q-tabs
				v-model="tab"
				no-caps
				dense
				align="justify"
				class="text-white tabs"
			>
				<q-route-tab name="home" exact to="/">
					<span class="gt-sm biggerText tab">Réalisations</span>
					<span class="lt-md tab">Réalisations</span>
				</q-route-tab>
				<q-route-tab name="career" exact to="/parcours">
					<span class="gt-sm biggerText tab">Parcours</span>
					<span class="lt-md tab">Parcours</span>
				</q-route-tab>
				<q-route-tab name="skills" exact to="/competences">
					<span class="gt-sm biggerText tab">Compétences</span>
					<span class="lt-md tab">Compétences</span>
				</q-route-tab>
			</q-tabs>
		</div>
		<!-- <nav>
				<RouterLink to="/">Accueil</RouterLink>
				<RouterLink to="/parcours">Parcours</RouterLink>
				<RouterLink to="/competences">Compétences</RouterLink>
				<RouterLink to="/motivations">Motivations</RouterLink>
			</nav> -->
	</header>

	<div class="q-py-xl wrapper">
		<RouterView />
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Top from "./components/Top.vue";
let tab = ref("unique");
</script>

<style scoped>
nav {
	width: max-content;
	display: flex;
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
