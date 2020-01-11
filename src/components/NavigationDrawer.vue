<template>
	<v-navigation-drawer
		app
		permanent
		touchless
		:clipped="$vuetify.breakpoint.smAndDown"
		:mini-variant="store.mini && $vuetify.breakpoint.smAndDown"
		@click.native="store.mini = false"
		v-touch="{ left: () => (store.mini = true), right: () => (store.mini = false) }"
	>
		<v-img eager src="https://avatars1.githubusercontent.com/u/1457327"></v-img>

		<template v-if="$vuetify.breakpoint.smAndDown">
			<v-list>
				<v-list-item
					v-for="({ href, icon, text }, index) in store.socials"
					:key="index"
					:href="href"
					target="_blank"
				>
					<v-list-item-avatar tile size="28" class="my-0">
						<v-icon size="36" color="secondary">mdi-{{ icon }}</v-icon>
					</v-list-item-avatar>
					<v-list-item-content>
						<v-list-item-title>
							<u class="primary--text font-weight-medium">{{ text }}</u>
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
			<v-divider></v-divider>
		</template>

		<v-list>
			<v-list-item
				v-for="({ href, icon, text }, index) in store.contacts"
				:key="index"
				:href="href"
				target="_blank"
			>
				<v-list-item-avatar tile size="28" class="my-0">
					<v-icon size="32" color="secondary">mdi-{{ icon }}</v-icon>
				</v-list-item-avatar>
				<v-list-item-content>
					<v-list-item-title>
						<u class="primary--text font-weight-medium">{{ text }}</u>
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>

		<v-divider></v-divider>

		<v-list>
			<v-list-item v-for="([icon, text], index) in store.traits" :key="index">
				<v-list-item-avatar tile class="my-0" size="28">
					<v-icon size="32" color="secondary">mdi-{{ icon }}</v-icon>
				</v-list-item-avatar>
				<v-list-item-content class="py-2">
					<v-list-item-subtitle class="body-2" v-html="text"></v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
		</v-list>

		<v-divider></v-divider>

		<v-list>
			<v-list-item v-for="([name, svg], index) in store.technologies" :key="index">
				<v-list-item-avatar tile class="my-0" size="28">
					<v-img contain eager width="28" height="28" :alt="name" :src="svg"></v-img>
				</v-list-item-avatar>
				<v-list-item-content>
					<v-list-item-subtitle class="body-1">{{ name }}</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script lang="ts">
import store from '../store'
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class NavigationDrawer extends Vue {
	store = store
	created() {
		this.store.mini = this.$vuetify.breakpoint.smAndDown
	}
}
</script>
