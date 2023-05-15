<template>
	<div style="width: 100%" class="wrapper q-gutter-y-lg">
		<NavBar />
		<!-- <h3>Parcours professionnel et scolaire</h3> -->

		<div class="text-center" style="overflow-wrap: anywhere">
			<q-icon name="email" />  
			<a href="mailto:info@desfees.fr">guillaume.chekhab39@gmail.com</a>
		</div>

		<q-timeline color="blue" :layout="layout">
			<q-timeline-entry heading>
				<h5>Mon parcours</h5>
			</q-timeline-entry>

			<q-timeline-entry
				title="Développeur web · Freelance"
				subtitle="sept. 2022 - déc 2022 · 4 mois (temps partiel)"
				icon="emoji_people"
			>
				<div>
					Diverses missions courtes. <br />
					Une mission longue : Développement d'un site de chambres d'hôtes avec
					son sytème de réservation personnalisé (et agenda) et implémentation
					d'un système de paiement (avec Stripe). Voir réalisations
				</div>
			</q-timeline-entry>

			<q-timeline-entry
				title="Développeur web front-end
Skilder · Stage"
				subtitle="janv. 2022 - mai 2022 · 5 mois · 
Lyon"
				icon="work"
			>
				<div>
					Développement de l'ATS et de la plate-forme candidat <br />
					Technos : Vue.js, Nuxt.js et Node.js Typescript
				</div>
			</q-timeline-entry>

			<q-timeline-entry
				title="Développeur web
OpenClassrooms · Stage / formation Bac+2"
				subtitle="juin 2021 - nov. 2021 · 6 mois ·
Besançon"
				icon="school"
			>
				<ul>
					<li>
						Création d'un réseau social d'entreprise (Single-page application)
						avec Vue.js et Node.js et implémentation de base de donnée
						relationnelle avec SQL.
					</li>
					<li>
						Création d'une API sécurisée pour une application d'avis
						gastronomiques (backend) aux normes de l'OWASP avec Node.js.
					</li>
					<li>Création d'un site e-commerce avec JavaScript.</li>
					<li>Optimisation d'un site web existant (SEO et accessibilité).</li>
					<li>
						Implémentation d'une version mobile au design responsive d'un site
						web avec des animations CSS.
					</li>
				</ul>
			</q-timeline-entry>

			<q-timeline-entry
				title="Création de 2 jeux vidéo en indépendant"
				subtitle="août 2020 - mai 2021 · 10 mois"
				icon="sports_esports"
			>
				<div>
					Développement de 2 jeux vidéo pour mobile (avec Unreal Engine et
					Unity) en autodidacte de A à Z. <br />
					Cf MistyPineStudio.com
				</div>
			</q-timeline-entry>

			<q-timeline-entry
				title="Université de Franche-Comté"
				subtitle="2018 - 2020 · 2 ans"
				icon="school"
			>
				<div>2 ans de licence Informatique</div>
			</q-timeline-entry>

			<q-timeline-entry
				title="Classe préparatoire aux écoles d'ingénieurs (CPGE)"
				subtitle="2016 - 2018 · 2 ans"
				icon="school"
			>
				<div>PTSI Physique, Technologie et Sciences de l'ingénieur</div>
				<div>Lycée Jules Haag - Besançon</div>
			</q-timeline-entry>
		</q-timeline>
	</div>
</template>

<script setup>
import NavBar from "../components/NavBar.vue";
import { useQuasar } from "quasar";
import { computed } from "vue";

const $q = useQuasar();

let layout = computed(() => {
	return $q.screen.lt.sm ? "dense" : "comfortable";
});
</script>

<style></style>
