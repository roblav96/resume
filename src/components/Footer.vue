<template>
	<v-footer app :height="height" color="black">
		<v-spacer></v-spacer>
		<v-spacer></v-spacer>
		<v-icon dense color="grey" class="mdi-rotate-270">mdi-triangle</v-icon>
		<v-spacer></v-spacer>
		<v-icon dense color="grey" class="mx-">mdi-circle</v-icon>
		<v-spacer></v-spacer>
		<v-icon dense color="grey" class="">mdi-square</v-icon>
		<v-spacer></v-spacer>
		<v-spacer></v-spacer>
	</v-footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {
	height = 36
	mounted() {
		this.$vuetify.application.footer = this.height
	}
}
</script>
