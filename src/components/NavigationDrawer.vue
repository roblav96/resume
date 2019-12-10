<template>
	<v-navigation-drawer
		app
		permanent
		touchless
		:clipped="$vuetify.breakpoint.smAndDown"
		:mini-variant="$root.$data.mini && $vuetify.breakpoint.smAndDown"
		@click.native="$root.$data.mini = false"
	>
		<v-img eager src="https://avatars1.githubusercontent.com/u/1457327"></v-img>

		<template v-if="$vuetify.breakpoint.xsOnly">
			<v-list>
				<v-list-item
					v-for="([href, icon, title], index) in socials"
					:key="index"
					:href="href"
					target="_blank"
				>
					<v-list-item-action>
						<v-icon>{{ icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>{{ title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
			<v-divider></v-divider>
		</template>

		<v-list>
			<v-list-item v-for="([icon, title], index) in contacts" :key="index">
				<v-list-item-action>
					<v-icon>{{ icon }}</v-icon>
				</v-list-item-action>
				<v-list-item-content>
					<v-list-item-title>{{ title }}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>

		<v-divider></v-divider>

		<v-list>
			<v-list-item v-for="([icon, title], index) in stacks" :key="index">
				<v-list-item-action>
					<v-icon>{{ icon }}</v-icon>
				</v-list-item-action>
				<v-list-item-content>
					<v-list-item-title>{{ title }}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class NavigationDrawer extends Vue {}
</script>
