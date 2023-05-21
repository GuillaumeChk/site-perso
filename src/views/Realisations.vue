<template>
	<div class="wrapper q-gutter-y-lg" style="width: 100%">
		<Navbar />
		<!-- <h4 class="text-light appear-left">Réalisations</h4> -->

		<q-timeline :layout="layout" color="blue" class="appear-left3">
			<q-timeline-entry heading>
				<h5 class="text-capitalize">{{ $t("navbar.achievement") }}</h5>
			</q-timeline-entry>

			<q-timeline-entry
				:title="$t('achievement.t1')"
				:subtitle="$t('achievement.d1')"
			>
				<div class="no-wrap justify-between">
					<a
						style="text-decoration: underline"
						href="http://www.desfees.fr"
						target="_blank"
						rel="noopener noreferrer"
						>{{ $t("achievement.website") }}</a
					>
					<ul
						class="q-px-xl q-pb-xl q-pt-md"
						v-html="$t('achievement.p1')"
					></ul>
					<a
						href="https://www.desfees.fr"
						target="_blank"
						rel="noopener noreferrer"
						class="justify-center card"
					>
						<img
							src="../assets/Capture_site_desfees.jpg"
							fit="cover"
							style="width: 500px; max-width: 100%"
						/>
					</a>
				</div>
			</q-timeline-entry>

			<q-timeline-entry
				:title="$t('achievement.t2')"
				:subtitle="$t('achievement.d2')"
			>
				<div class="no-wrap justify-between">
					<a style="text-decoration: underline" href="">{{
						$t("achievement.website")
					}}</a>
					<ul
						class="q-px-xl q-pb-xl q-pt-md"
						v-html="$t('achievement.p2')"
					></ul>
					<a
						href="https://guillaumechk.github.io/GuillaumeChekhab_2_18062021/"
						target="_blank"
						rel="noopener noreferrer"
						class="justify-center card"
					>
						<img
							src="../assets/Capture_OC_2.jpg"
							fit="cover"
							style="width: 530px; max-width: 100%"
						/>
					</a>
				</div>
			</q-timeline-entry>

			<q-timeline-entry
				:title="$t('achievement.t3')"
				:subtitle="$t('achievement.d3')"
			>
				<div class="no-wrap justify-between">
					<a style="text-decoration: underline" href="">{{
						$t("achievement.website")
					}}</a>
					<ul
						class="q-px-xl q-pb-xl q-pt-md"
						v-html="$t('achievement.p3')"
					></ul>
					<a
						href="https://guillaumechk.github.io/GuillaumeChekhab_3_06072020/"
						target="_blank"
						rel="noopener noreferrer"
						class="justify-center card"
					>
						<img
							src="../assets/Capture_OC_3.jpg"
							fit="cover"
							style="border-radius: 25px; height: 450px; width: 200px"
						/>
					</a>
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

			<img
				src="../assets/Capture_site_desfees.jpg"
				fit="cover"
				style="width: 500px; max-width: 100%"
			/>
		</a> -->
	</div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import { useQuasar } from "quasar";
import { computed } from "vue";

const $q = useQuasar();

let layout = computed(() => {
	return $q.screen.lt.sm ? "dense" : "comfortable";
});
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
