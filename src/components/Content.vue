<template>
	<v-content @click.native="store.mini = true">
		<v-container class="pa-8">
			<v-card class="mb-8">
				<v-card-title class="pb-2 font-weight-bold">README.md</v-card-title>
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

			<v-card class="mb-8">
				<v-card-title class="pb-0 font-weight-bold">Experience</v-card-title>
				<v-list class="px-2">
					<v-list-item
						three-line
						v-for="({ logo, title, company, href, duration, description, technologies },
						index) in store.experiences"
						:key="index"
					>
						<v-list-item-avatar tile size="48">
							<v-img contain eager :alt="company" :src="logo"></v-img>
						</v-list-item-avatar>
						<v-list-item-content>
							<v-list-item-title
								class="mb-0 d-flex align-baseline justify-space-between flex-row flex-sm-column"
							>
								<span class="font-weight-medium">{{ title }}</span>
								<span class="caption text--secondary">{{ duration }}</span>
							</v-list-item-title>
							<v-list-item-title
								class="mb-0 d-flex align-baseline flex-column flex-sm-row text-none"
							>
								<a :href="href" target="_blank" class="primary--text">
									{{ company }}
								</a>
								<span class="caption text--primary">{{ description }}</span>
							</v-list-item-title>
							<v-list-item-subtitle class="flex-row flex-wrap">
								<div
									class="d-flex align-center mt-1"
									v-for="([name, svg], index) in technologies"
									:key="index"
								>
									<v-img
										contain
										eager
										width="18"
										height="18"
										:alt="name"
										:src="svg"
										class="mr-3"
									></v-img>
									<!-- <span class="ml-1 mr-2">{{ name }}</span> -->
								</div>
							</v-list-item-subtitle>
							<!-- <v-list-item-subtitle>• {{ technologies.join(' • ') }} •</v-list-item-subtitle> -->
						</v-list-item-content>
					</v-list-item>
				</v-list>
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
}
</script>
