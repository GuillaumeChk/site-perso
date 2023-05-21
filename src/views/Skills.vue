<template>
	<div style="width: 100%" class="wrapper q-gutter-y-lg">
		<Navbar />

		<div class="appear-left3">
			<h5 class="text-center q-pb-lg text-capitalize">
				{{ $t("navbar.skills") }}
			</h5>
			<div class="q-gutter-y-xl text-center">
				<h6>Web</h6>

				<div class="q-gutter-y-lg">
					<div class="row q-gutter-xl justify-center">
						<div class="logo-skill">
							<img
								alt="Vue logo"
								class="logo"
								src="../assets/logo.svg"
								width="125"
								height="125"
							/>
							<p class="text-center">Vue</p>
						</div>

						<!-- <div class="column col justify-center q-gutter-sm">
						<q-linear-progress
							dark
							rounded
							size="10px"
							:value="0.8"
							color="cyan"
						/>
						<p>Création de site et applications web</p>
						<p>lien</p>
					</div> -->

						<div class="logo-skill">
							<img
								alt="Javascript logo"
								class="logo"
								src="../assets/Unofficial_JavaScript_logo_2.svg"
								width="125"
								height="125"
							/>
							<p class="text-center">Javascript</p>
						</div>

						<div class="logo-skill">
							<img
								alt="Javascript logo"
								class="logo"
								src="../assets/Typescript_logo_2020.svg"
								width="125"
								height="125"
							/>
							<p class="text-center">Typescript</p>
						</div>

						<div class="logo-skill">
							<img
								alt="Node logo"
								class="logo"
								src="../assets/Node.js_logo.svg"
								width="125"
								height="125"
							/>
							<p class="text-center">Node</p>
						</div>
						<div class="logo-skill-bg">
							<img
								alt="Node logo"
								class="logo"
								src="../assets/MySQL.svg"
								width="125"
								height="125"
							/>
							<p class="text-center">MySQL</p>
						</div>

						<div class="logo-skill">
							<img
								alt="Node logo"
								class="logo"
								src="../assets/Git_icon.svg"
								width="125"
								height="125"
							/>
							<p class="text-center">git</p>
						</div>

						<div class="logo-skill">
							<img
								alt="Node logo"
								class="logo"
								src="../assets/Sass_Logo_Color.svg"
								width="125"
								height="125"
							/>
							<p class="text-center">Sass</p>
						</div>

						<div class="logo-skill">
							<img
								alt="Node logo"
								class="logo"
								src="../assets/HTML5_logo_and_wordmark.svg"
								width="125"
								height="125"
							/>
							<p class="text-center">HTML</p>
						</div>

						<div class="logo-skill">
							<img
								alt="Node logo"
								class="logo"
								src="../assets/CSS3_logo_and_wordmark.svg"
								width="125"
								height="125"
							/>
							<p class="text-center">CSS</p>
						</div>
						<div class="logo-skill">
							<img
								alt="Node logo"
								class="logo"
								src="../assets/Bootstrap_logo.svg"
								width="125"
								height="125"
							/>
							<p class="text-center">Bootstrap</p>
						</div>
					</div>

					<!-- <Skill></Skill> -->
				</div>

				<h6>Game development</h6>
				<div class="col q-gutter-y-lg">
					<div class="row q-gutter-xl justify-center">
						<div class="logo-skill">
							<img
								alt="Unity logo"
								class="logo"
								src="../assets/Unity_Technologies_logo.svg"
								width="125"
							/>
							<p class="text-center">Unity</p>
						</div>

						<div class="logo-skill-bg">
							<img
								alt="Unreal Engine logo"
								class="logo"
								src="../assets/Unreal_Engine_Logo.svg"
								width="125"
								height="125"
							/>
							<p class="text-center">Unreal Engine</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
</script>

<style>
.logo-skill {
	width: 125px;
}

.logo-skill-bg {
	width: 125px;
}
.logo-skill-bg img {
	padding: 10px;
	border-radius: 20px;
	background-color: rgba(255, 255, 255, 0.8);
}
</style>
