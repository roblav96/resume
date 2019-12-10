<template>
	<v-fade-transition>
		<v-app v-show="ready">
			<SystemBar></SystemBar>
			<AppBar></AppBar>
			<NavigationDrawer></NavigationDrawer>
			<Content></Content>
			<Footer></Footer>
		</v-app>
	</v-fade-transition>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
	components: {
		AppBar: () => import('./components/AppBar.vue'),
		Content: () => import('./components/Content.vue'),
		Footer: () => import('./components/Footer.vue'),
		NavigationDrawer: () => import('./components/NavigationDrawer.vue'),
		SystemBar: () => import('./components/SystemBar.vue'),
	},
})
export default class App extends Vue {
	ready = false
	mounted() {
		setTimeout(() => (this.ready = true), 100)
	}
}
</script>
