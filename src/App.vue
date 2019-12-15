<template>
	<v-fade-transition>
		<v-app v-show="store.ready">
			<SystemBar></SystemBar>
			<AppBar></AppBar>
			<NavigationDrawer></NavigationDrawer>
			<Content></Content>
			<Footer></Footer>
		</v-app>
	</v-fade-transition>
</template>

<script lang="ts">
import store from './store'
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
	store = store
	mounted() {
		setTimeout(() => (this.store.ready = true), 100)
	}
}
</script>

<style src="./assets/nerd-fonts-generated.css" />
<style src="@ibm/plex/css/ibm-plex.css" />
<style src="@mdi/font/css/materialdesignicons.css" />
<style src="vuetify/dist/vuetify.css" />
<style src="./styles.css" />
