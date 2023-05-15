<template>
	<div style="width: 100%" class="wrapper q-gutter-y-lg">
		<NavBar />

		<div>
			<h2>Compétences</h2>

			<h4>Web</h4>

			<div class="col q-gutter-y-lg">
				<div class="row q-gutter-md">
					<div class="logo-skill">
						<img
							alt="Vue logo"
							class="logo"
							src="@/assets/logo.svg"
							width="125"
							height="125"
						/>
						<p class="text-center">Vue.js</p>
					</div>

					<div class="column col justify-center q-gutter-sm">
						<q-linear-progress
							dark
							rounded
							size="10px"
							:value="0.8"
							color="cyan"
						/>
						<p>Création de site et applications web</p>
						<p>lien</p>
					</div>
				</div>

				<Skill></Skill>

				<div>
					<img
						alt="Javascript logo"
						class="logo"
						src="src/assets/Unofficial_JavaScript_logo_2.svg"
						width="125"
						height="125"
					/>
					<p>Javascript</p>
				</div>

				<div>
					<img
						alt="Node logo"
						class="logo"
						src="src/assets/Node.js_logo.svg"
						width="125"
						height="125"
					/>
					<p>Node.js</p>
				</div>
			</div>

			<h4>Game development</h4>
			<div class="col">
				<div>
					<img
						alt="Unity logo"
						class="logo"
						src="src/assets/Unity_Technologies_logo.svg"
						height="125"
					/>
					<p>Unity</p>
				</div>

				<div>
					<img
						alt="Unreal Engine logo"
						class="logo"
						src="src/assets/Unreal_Engine_Logo.svg"
						width="125"
						height="125"
					/>
					<p>Unreal Engine</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import Skill from "../components/Skill.vue";
import NavBar from "../components/NavBar.vue";
</script>

<style>
.logo-skill {
	width: 125px;
}
</style>
