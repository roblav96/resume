<template>
	<v-content @click.native="store.mini = true">
		<v-container class="pa-4">
			<v-card class="mb-4">
				<v-card-title class="pb-2 primary--text">README.md</v-card-title>
				<v-card-text>
					I'm a Problem Solver. That statement can easily be validated by the numerous
					projects I've created from the ground up. Every project was developed because of
					a problem I had experienced myself. I've taken them from an idea, all the way to
					a minimum viable product and talking to investors. Throughout these endeavors
					I've learned how to efficiently identify a problem, produce a solution based on
					meaningful metrics, analytics, and A/B tests, market and sell the product, then
					scale to a larger audience. I want to put my extraordinary skill-sets to good
					use at your company and work with a team of your best innovators. Please don't
					hesitate to contact me if you have any questions. Thank you!
				</v-card-text>
			</v-card>

			<v-card>
				<v-card-title class="pb-2 primary--text">Experience</v-card-title>
				<v-card-text>
					<v-list-item>
						<v-list-item-avatar size="48">
							<v-img src="dell-emc.png"></v-img>
						</v-list-item-avatar>
						<v-list-item-content>
							<v-list-item-title
								class="d-flex align-baseline justify-space-between flex-row flex-sm-column"
							>
								<p class="font-weight-medium">Lead Software Engineer</p>
								<p class="caption text--secondary">May 2019 – Oct 2019</p>
							</v-list-item-title>
							<v-list-item-subtitle>Lead Software Engineer</v-list-item-subtitle>
							<v-list-item-subtitle>Lead Software Engineer</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>

					<!-- <v-row align="center">
						<v-col class="col-auto">
							<v-img width="32" src="dochub.png"></v-img>
						</v-col>
						<v-col class="px-0">
							<p class="subtitle-1 font-weight-medium">Lead Software Engineer</p>
							<p class="overline">DocHub</p>
						</v-col>
						<v-col class="col-auto">
							<span class="subtitle-2">Dochub</span>
						</v-col>
					</v-row> -->
				</v-card-text>
			</v-card>
		</v-container>
	</v-content>
</template>

<script lang="ts">
import store from '../store'
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Content extends Vue {
	store = store
	experiences = [
		['logo', 'title', 'company', 'dates', 'desc', 'stack'],
		['logo', 'title', 'company', 'dates', 'desc', 'stack'],
		['logo', 'title', 'company', 'dates', 'desc', 'stack'],
	]
}
</script>
