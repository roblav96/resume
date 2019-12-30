<template>
	<v-navigation-drawer
		app
		permanent
		touchless
		bottom
		:clipped="$vuetify.breakpoint.smAndDown"
		:mini-variant="store.mini && $vuetify.breakpoint.smAndDown"
		@click.native="store.mini = false"
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
					<v-list-item-avatar size="28" class="my-0">
						<v-icon size="36">{{ icon }}</v-icon>
					</v-list-item-avatar>
					<v-list-item-content>
						<v-list-item-title class="primary--text">
							<u>{{ text }}</u>
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
				<v-list-item-avatar size="28" class="my-0">
					<v-icon size="32">{{ icon }}</v-icon>
				</v-list-item-avatar>
				<v-list-item-content color="primary">
					<v-list-item-title class="primary--text">
						<u>{{ text }}</u>
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>

		<v-divider></v-divider>

		<v-list>
			<v-list-item v-for="([name, svg], index) in store.technologies" :key="index">
				<v-list-item-avatar class="my-0" size="28" tile>
					<v-img contain eager width="28" height="28" :alt="name" :src="svg"></v-img>
				</v-list-item-avatar>
				<v-list-item-content>
					<v-list-item-title>{{ name }}</v-list-item-title>
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
