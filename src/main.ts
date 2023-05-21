import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import { Quasar } from "quasar";
import quasarIconSet from "quasar/icon-set/svg-material-icons";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";

import { createI18n } from "vue-i18n";

const app = createApp(App);

const i18n = createI18n({
	locale: "fr",
	legacy: false, // you must set `false`, to use Composition API
	messages: {
		fr: {
			navbar: {
				achievement: "réalisations",
				skills: "compétences",
				about: "à propos",
			},
			achievement: {
				website: "Voir le site",
				t1: "Chambres d'hôtes & gîte",
				d1: "2023",
				p1: "<li>Réservations</li><li>Agenda</li><li>Coffrets cadeaux</li><li>Mail</li><li>Facture automatique</li>",
				t2: "Hébergement (design seulement)",
				p2: "<li>Pur css</li><li>Flex & grid</li><li>Responsive</li><li>Aspect visuel uniquement</li><li>dans le cadre de ma formation OC</li>",
				d2: "2022",
				t3: "Restaurant (design seulement)",
				p3: "<li>Animations CSS</li><li>pour Mobile</li><li>dans le cadre de ma formation OC</li>",
				d3: "2022",
			},
			about: {
				title: "Mon parcours",
				t1: "Développeur web · Freelance",
				d1: "SEPT. 2022 - DÉC 2022 · 4 MOIS (TEMPS PARTIEL)",
				p1: "Diverses missions courtes. Une mission longue : Développement d'un site de chambres d'hôtes avec son sytème de réservation personnalisé (et agenda) et implémentation d'un système de paiement (avec Stripe). Voir réalisations",
				t2: "Développeur web front-end Skilder · Stage",
				d2: "JANV. 2022 - MAI 2022 · 5 MOIS · LYON",
				p2: "Développement de l'ATS et de la plate-forme candidat. Technos : Vue.js, Nuxt.js et Node.js Typescript",
				t3: "Développeur web OpenClassrooms · Stage / formation Bac+2",
				d3: "JUIN 2021 - NOV. 2021 · 6 MOIS · BESANÇON",
				p3: "<li> Création d'un réseau social d'entreprise (Single-page application) avec Vue.js et Node.js et implémentation de base de donnée relationnelle avec SQL. </li> <li> Création d'une API sécurisée pour une application d'avis gastronomiques (backend) aux normes de l'OWASP avec Node.js. </li> <li>Création d'un site e-commerce avec JavaScript.</li> <li>Optimisation d'un site web existant (SEO et accessibilité).</li> <li> Implémentation d'une version mobile au design d'un site web avec des animations CSS. </li>",
				t4: "Création de 2 jeux vidéo en indépendant",
				d4: "AOÛT 2020 - MAI 2021 · 10 MOIS",
				p4: "Développement de 2 jeux vidéo pour mobile (avec Unreal Engine et Unity) de A à Z. Cf MistyPineStudio.com",
				t5: "Université de Franche-Comté",
				d5: "2018 - 2020 · 2 ANS",
				p5: "2 ans de licence Informatique",
				t6: "Classe préparatoire aux écoles d'ingénieurs (CPGE)",
				d6: "2016 - 2018 · 2 ANS",
				p6: "PTSI Physique, Technologie et Sciences de l'ingénieur, Lycée Jules Haag - Besançon",
			},
		},
		en: {
			navbar: {
				achievement: "achievements",
				skills: "skills",
				about: "about",
			},
			achievement: {
				website: "Go to website",
				t1: "Bed and breakfast",
				d1: "2023",
				p1: "<li>Reservations</li><li>Agenda</li><li>Gift boxes</li><li>Mail</li><li>Automatic invoice</li>",
				t2: "Homes (design only)",
				p2: "<li>Pure css</li><li>Flex & grid</li><li>Responsive</li><li>Visual aspect only</li><li>as part of my OC training</li >",
				d2: "2022",
				t3: "Restaurant (design only)",
				p3: "<li>CSS Animations</li><li>for Mobile</li><li>as part of my OC training</li>",
				d3: "2022",
			},
			about: {
				title: "My background",
				t1: "Web Developer · Freelance",
				d1: "SEPT 2022 - DEC 2022 4 MONTHS (PART TIME)",
				p1: "Various short missions. A long mission: Development of a bed and breakfast site with its personalized reservation system (and calendar) and implementation of a payment system (with Stripe). See achievements",
				t2: "Skilder front-end web developer · Internship",
				d2: "JAN 2022 - MAY 2022 5 MONTHS LYON",
				p2: "Development of the ATS and the candidate platform. Technos: Vue.js, Nuxt.js and Node.js Typescript",
				t3: "OpenClassrooms web developer · Internship / Bac+2 training",
				d3: "JUNE 2021 - NOV. 2021 · 6 MONTHS · BESANÇON",
				p3: "<li> Creation of a corporate social network (Single-page application) with Vue.js and Node.js and implementation of a relational database with SQL. </li> <li> Creation of a Secure API for a gastronomic review application (backend) to OWASP standards with Node.js. </li> <li>Creation of an e-commerce site with JavaScript.</li> <li>Optimization of 'an existing website (SEO and accessibility).</li> <li> Implementation of a mobile version of a website design with CSS animations. </li>",
				t4: "Creation of 2 independent video games",
				d4: "AUGUST 2020 - MAY 2021 10 MONTHS",
				p4: "Development of 2 video games for mobile (with Unreal Engine and Unity) from A to Z. Cf MistyPineStudio.com",
				t5: "University of Franche-Comté",
				d5: "2018 - 2020 · 2 YEARS",
				p5: "2 years of IT license",
				t6: "Preparatory class for engineering schools (CPGE)",
				d6: "2016 - 2018 · 2 YEARS",
				p6: "PTSI Physics, Technology and Engineering Sciences, Lycée Jules Haag - Besançon",
			},
		},
	},
});

app.use(i18n);

app.use(router);

app.use(Quasar, {
	plugins: {}, // import Quasar plugins and add here
	iconSet: quasarIconSet,
});

app.mount("#app");
