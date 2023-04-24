<template>
	<div class="column">
		<h4>Réalisations</h4>

		<q-card horizontal dark flat bordered class="my-card bg-transparent">
			<q-card-section class="card-style">
				<h5>Chambres d'hôtes & gîte</h5>
				<span>Système de réservations</span>
			</q-card-section>

			<q-img src="https://cdn.quasar.dev/img/parallax2.jpg"> </q-img>

			<q-card-actions class="card-style">
				<q-btn flat>Visiter</q-btn>
			</q-card-actions>
		</q-card>
	</div>
</template>

<style>
.my-card {
	width: 100%;
	max-width: 250px;
}

@media (min-width: 1024px) {
	.about {
		/* min-height: 100vh; */
		display: flex;
		align-items: center;
	}
}
</style>
