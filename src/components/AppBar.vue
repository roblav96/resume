<template>
	<v-app-bar app fixed :clipped-left="$vuetify.breakpoint.smAndDown" color="secondary">
		<v-app-bar-nav-icon
			v-if="$vuetify.breakpoint.smAndDown"
			@click="store.mini = !store.mini"
			class="mr-2"
		></v-app-bar-nav-icon>

		<v-toolbar-title class="pl-0">
			<p class="headline font-weight-bold">Robert Laverty</p>
			<p class="overline text--secondary">Full-Stack Product Engineer</p>
		</v-toolbar-title>

		<v-spacer></v-spacer>

		<v-toolbar-items v-show="$vuetify.breakpoint.smAndUp">
			<v-btn
				text
				v-for="([href, icon, title, subtitle], index) in store.socials"
				:key="index"
				:href="href"
				target="_blank"
			>
				<v-icon large>{{ icon }}</v-icon>
				<span class="ml-1 text-lowercase">{{ subtitle }}</span>
			</v-btn>
			<v-btn text class="d-print-none" :href="pdfUrl" target="_blank">
				<v-icon large>mdi-pdf-box</v-icon>
			</v-btn>
		</v-toolbar-items>

		<v-btn
			v-show="$vuetify.breakpoint.xsOnly"
			icon
			class="d-print-none"
			:href="pdfUrl"
			target="_blank"
		>
			<v-icon large>mdi-pdf-box</v-icon>
		</v-btn>
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
