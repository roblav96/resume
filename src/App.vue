<template>
	<div id="app">
		<v-app>
			<v-content>
				<v-container>Hello world</v-container>
			</v-content>
		</v-app>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class App extends Vue {}
</script>
