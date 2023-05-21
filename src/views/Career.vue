<template>
	<div style="width: 100%" class="wrapper q-gutter-y-lg">
		<Navbar />

		<div class="appear-left3">
			<div class="q-gutter-md q-pt-md text-center">
				<a target="_blank" href="https://www.linkedin.com/in/guillaumechekhab/"
					><img src="../assets/linkedin.svg" style="width: 21px; height: 21px"
				/></a>
				<a target="_blank" href="https://github.com/GuillaumeChk"
					><img src="../assets/github.svg" style="width: 21px; height: 21px"
				/></a>
				<div class="text-center" style="overflow-wrap: anywhere">
					<q-icon name="email" />  
					<a href="mailto:info@desfees.fr">guillaume.chekhab39@gmail.com</a>
				</div>
			</div>

			<q-timeline class="q-pt-xl" color="blue" :layout="layout">
				<q-timeline-entry heading>
					<h5>{{ $t("about.title") }}</h5>
				</q-timeline-entry>

				<q-timeline-entry
					:title="$t('about.t1')"
					:subtitle="$t('about.d1')"
					icon="emoji_people"
				>
					<div>
						{{ $t("about.p1") }}
					</div>
				</q-timeline-entry>
				<q-timeline-entry
					:title="$t('about.t2')"
					:subtitle="$t('about.d2')"
					icon="work"
				>
					<div>
						{{ $t("about.p2") }}
					</div>
				</q-timeline-entry>
				<q-timeline-entry
					:title="$t('about.t3')"
					:subtitle="$t('about.d3')"
					icon="school"
				>
					<ul v-html="$t('about.p3')"></ul>
				</q-timeline-entry>
				<q-timeline-entry
					:title="$t('about.t4')"
					:subtitle="$t('about.d4')"
					icon="sports_esports"
				>
					<div>
						{{ $t("about.p4") }}
					</div>
				</q-timeline-entry>
				<q-timeline-entry
					:title="$t('about.t5')"
					:subtitle="$t('about.d5')"
					icon="school"
				>
					<div>
						{{ $t("about.p5") }}
					</div>
				</q-timeline-entry>
				<q-timeline-entry
					:title="$t('about.t6')"
					:subtitle="$t('about.d6')"
					icon="school"
				>
					<div>
						{{ $t("about.p6") }}
					</div>
				</q-timeline-entry>
			</q-timeline>
		</div>
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

<style></style>
