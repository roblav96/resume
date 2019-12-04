Vue.config.productionTip = false
Vue.config.performance = false
Vue.config.devtools = false

window.vm = new Vue({
	el: '#app',
	data: function() {
		return {
			ready: false,
			socials: [
				['github', 'https://github.com/roblav96'],
				['linkedin', 'https://www.linkedin.com/in/roblav96/'],
			],
			skills: [
				['vuejs', 'Vue.js'],
				['nodejs', 'Node.js'],
				['typescript', 'TypeScript'],
				['redis', 'Redis'],
				['mongodb', 'MongoDB'],
				['aws', 'AWS'],
			],
		}
	},
	vuetify: new Vuetify({
		iconfont: 'nf',
		theme: { dark: true },
	}),
	mounted: function() {
		document.body.classList.remove('hidden')
		this.$vuetify.application.bar = 24
		this.$vuetify.application.footer = 36
		setTimeout(() => {
			this.ready = true
		}, 100)
	},
})
