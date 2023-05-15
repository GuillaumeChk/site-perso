<template>
	<div class="wrapper q-gutter-y-lg" style="width: 100%">
		<NavBar />
		<!-- <h4 class="text-light appear-left">Réalisations</h4> -->

		<q-timeline layout="comfortable" color="blue">
			<q-timeline-entry heading> Réalisations </q-timeline-entry>

			<q-timeline-entry title="Chambres d'hôtes & gîte" subtitle="2022">
				<div class="row no-wrap text-no-wrap justify-between">
					<ul class="q-pa-xl">
						<li>Réservations</li>
						<li>Agenda</li>
						<li>Coffrets cadeaux</li>
						<li>Mail</li>
						<li>Facture automatique</li>
					</ul>
					<a
						href="https://guillaumechk.github.io/site-desfees/"
						target="_blank"
						rel="noopener noreferrer"
						class="row justify-center card"
					>
						<q-img
							src="src/assets/Capture_site_desfees.jpg"
							fit="cover"
							style="width: 500px; max-width: 100%"
						>
						</q-img>
					</a>
				</div>
			</q-timeline-entry>

			<q-timeline-entry title="Chambres d'hôtes & gîte" subtitle="2022">
				<div class="row no-wrap text-no-wrap justify-between">
					<ul class="q-pa-xl">
						<li>Réservations</li>
						<li>Agenda</li>
						<li>Coffrets cadeaux</li>
						<li>Mail</li>
						<li>Facture automatique</li>
					</ul>
					<q-img
						src="src/assets/Capture_site_desfees.jpg"
						fit="cover"
						style="width: 500px; max-width: 100%"
					>
					</q-img>
				</div>
			</q-timeline-entry>
		</q-timeline>

		<!-- <a
			href="https://guillaumechk.github.io/site-desfees/"
			target="_blank"
			rel="noopener noreferrer"
			class="row justify-center card"
		>
			<div class="column q-pa-xl justify-center">
				<span class="q-mb-md" style="font-size: 1.5em; font-weight: 500"
					>Chambres d'hôtes & gîte</span
				>
				<ul>
					<li>Réservations</li>
					<li>Agenda</li>
					<li>Coffrets cadeaux</li>
					<li>Mail</li>
					<li>Facture automatique</li>
				</ul>
			</div>

			<q-img
				src="src/assets/Capture_site_desfees.jpg"
				fit="cover"
				style="width: 500px; max-width: 100%"
			>
			</q-img>
		</a> -->
	</div>
</template>

<script setup>
import NavBar from "../components/NavBar.vue";
</script>

<style>
.card {
	/* width: fit-content; */
	/* border: 1px solid whitesmoke; */
}

@media (min-width: 1024px) {
	.about {
		/* min-height: 100vh; */
		display: flex;
		align-items: center;
	}
}
</style>
