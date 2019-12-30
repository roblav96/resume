<template>
	<v-app-bar app :clipped-left="$vuetify.breakpoint.smAndDown">
		<v-app-bar-nav-icon
			v-if="$vuetify.breakpoint.smAndDown"
			@click="store.mini = !store.mini"
			class="mr-2"
		></v-app-bar-nav-icon>

		<v-toolbar-title class="pl-0">
			<p class="headline font-weight-bold">Robert Laverty</p>
			<p class="caption font-mono secondary--text">Full-Stack Product Engineer</p>
		</v-toolbar-title>

		<v-spacer></v-spacer>

		<v-btn
			v-show="$vuetify.breakpoint.smAndDown"
			icon
			color="secondary"
			class="d-print-none"
			:href="pdfUrl"
			target="_blank"
		>
			<v-icon size="46">mdi-pdf-box</v-icon>
		</v-btn>

		<v-toolbar-items v-show="$vuetify.breakpoint.mdAndUp">
			<v-btn
				text
				color="secondary"
				v-for="({ href, icon, text, subtext }, index) in store.socials"
				:key="index"
				:href="href"
				target="_blank"
			>
				<v-icon x-large>{{ icon }}</v-icon>
				<u class="primary--text ml-1 text-lowercase">/{{ subtext }}</u>
			</v-btn>

			<v-btn text color="secondary" class="d-print-none" :href="pdfUrl" target="_blank">
				<v-icon size="46">mdi-pdf-box</v-icon>
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
