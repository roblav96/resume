<template>
	<v-app-bar app :clipped-left="$vuetify.breakpoint.smAndDown">
		<v-app-bar-nav-icon
			v-if="$vuetify.breakpoint.smAndDown"
			@click="store.mini = !store.mini"
			class="mr-2"
		></v-app-bar-nav-icon>

		<v-toolbar-title class="pl-0">
			<p class="headline font-weight-bold">Robert Laverty</p>
			<p class="caption font-mono font-weight-medium secondary--text">
				Full-Stack Software Engineer
			</p>
		</v-toolbar-title>

		<v-spacer></v-spacer>

		<v-btn
			v-show="$vuetify.breakpoint.smAndDown"
			text
			color="secondary"
			class="d-print-none"
			:href="pdfUrl"
			target="_blank"
		>
			<v-img contain eager width="36" height="36" :src="store.logos.pdf[1]"></v-img>
			<!-- <v-icon size="46">mdi-pdf-box</v-icon> -->
		</v-btn>

		<v-toolbar-items v-show="$vuetify.breakpoint.mdAndUp">
			<v-btn
				text
				color="secondary"
				v-for="({ href, icon, subtext }, index) in store.socials"
				:key="index"
				:href="href"
				target="_blank"
			>
				<v-icon x-large>mdi-{{ icon }}</v-icon>
				<u class="primary--text font-weight-bold ml-1 text-lowercase">/{{ subtext }}</u>
			</v-btn>

			<v-btn text color="secondary" class="d-print-none" :href="pdfUrl" target="_blank">
				<v-img contain eager width="40" height="40" :src="store.logos.pdf[1]"></v-img>
				<!-- <v-icon size="46">mdi-pdf-box</v-icon> -->
			</v-btn>
		</v-toolbar-items>
	</v-app-bar>
</template>

<script lang="ts">
import store from '../store'
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class AppBar extends Vue {
	store = store
	get pdfUrl() {
		return `https://roblav96.github.io/resume/${document.title}.pdf`
	}
}
</script>
