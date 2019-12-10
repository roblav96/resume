<template>
	<v-system-bar app height="24" color="primary">
		<v-spacer></v-spacer>
		<v-icon>mdi-signal</v-icon>
		<v-icon>mdi-signal-5g</v-icon>
		<v-icon>mdi-battery-charging</v-icon>
		<span class="font-weight-medium">11:11</span>
	</v-system-bar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class SystemBar extends Vue {
	mounted() {
		this.$vuetify.application.bar = 24
	}
}
</script>
