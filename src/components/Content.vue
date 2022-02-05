<template>
	<v-content @click.native="store.mini = true">
		<v-container class="pa-8">
			<v-toolbar dense flat dark color="primary">
				<v-icon size="28" class="mr-4">mdi-text-box</v-icon>
				<v-toolbar-title class="font-weight-bold">README.md</v-toolbar-title>
			</v-toolbar>
			<v-card class="mb-8" tile outlined>
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

			<v-toolbar dense flat dark color="primary">
				<v-icon size="28" class="mr-4">mdi-auto-fix</v-icon>
				<v-toolbar-title class="font-weight-bold">Experience</v-toolbar-title>
			</v-toolbar>
			<v-card class="mb-8" tile outlined>
				<v-list class="px-2">
					<v-list-item
						three-line
						v-for="(
							{ logo, title, company, href, duration, description, technologies },
							index
						) in store.experiences"
						:key="index"
					>
						<v-list-item-avatar :tile="!logo.includes('gethuman')" size="48">
							<v-img contain eager :alt="company" :src="logo"></v-img>
						</v-list-item-avatar>
						<v-list-item-content>
							<v-list-item-title
								class="d-print-flex d-block d-md-flex flex-row align-baseline justify-space-between"
							>
								<span class="font-weight-medium">
									<a
										:href="href"
										target="_blank"
										class="primary--text"
										v-text="company"
									></a>
									- {{ title }}
								</span>
								<br class="d-block d-md-none d-print-none" />
								<span class="caption text--secondary">{{ duration }}</span>
							</v-list-item-title>
							<v-list-item-subtitle class="">{{ description }}</v-list-item-subtitle>
							<v-list-item-subtitle class="flex-row flex-wrap">
								<div
									class="d-flex align-center mt-2"
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
								</div>
							</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</v-card>

			<v-toolbar dense flat dark color="primary">
				<v-icon size="28" class="mr-4">mdi-book-open-page-variant</v-icon>
				<v-toolbar-title class="font-weight-bold">Education</v-toolbar-title>
			</v-toolbar>
			<v-card class="mb-0" tile outlined>
				<v-list class="px-2">
					<v-list-item
						v-for="(
							{ logo, title, company, href, duration, description }, index
						) in store.educations"
						:key="index"
					>
						<v-list-item-avatar tile size="48">
							<v-img contain eager :alt="company" :src="logo"></v-img>
						</v-list-item-avatar>
						<v-list-item-content>
							<v-list-item-title
								class="d-print-flex d-block d-md-flex flex-row align-baseline justify-space-between"
							>
								<span class="font-weight-medium">
									<a
										:href="href"
										target="_blank"
										class="primary--text"
										v-text="company"
									></a>
									- {{ title }}
								</span>
								<br class="d-block d-md-none d-print-none" />
								<span class="caption text--secondary">{{ duration }}</span>
							</v-list-item-title>
							<v-list-item-subtitle class="">{{ description }}</v-list-item-subtitle>
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
