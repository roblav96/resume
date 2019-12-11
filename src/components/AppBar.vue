<template>
	<v-app-bar app fixed :clipped-left="$vuetify.breakpoint.smAndDown" color="secondary">
		<v-app-bar-nav-icon
			v-if="$vuetify.breakpoint.smAndDown"
			@click="$root.$data.mini = !$root.$data.mini"
			class="mr-2"
		></v-app-bar-nav-icon>

		<v-toolbar-title class="pl-0">
			<p class="headline font-weight-bold">Robert Laverty</p>
			<p class="overline text--secondary">Full Stack Product Engineer</p>
		</v-toolbar-title>

		<v-spacer></v-spacer>

		<v-toolbar-items>
			<v-btn
				v-show="!$vuetify.breakpoint.xsOnly"
				text
				href="https://github.com/roblav96"
				target="_blank"
			>
				<v-icon large>mdi-github-box</v-icon>
				<span class="ml-1 text-lowercase">roblav96</span>
			</v-btn>
			<v-btn
				v-show="!$vuetify.breakpoint.xsOnly"
				text
				href="https://www.linkedin.com/in/roblav96/"
				target="_blank"
			>
				<v-icon large>mdi-linkedin-box</v-icon>
				<span class="ml-1 text-lowercase">roblav96</span>
			</v-btn>

			<v-btn
				text
				class="d-print-none"
				href="https://roblav96.github.io/resume/Robert Laverty - Full Stack Product Engineer.pdf"
				target="_blank"
			>
				<v-icon large>mdi-pdf-box</v-icon>
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
}
</script>
