import Vue from 'vue'

export default Vue.observable({
	mini: false,
	ready: false,
	contacts: [
		['mailto:roblav96@gmail.com', 'mdi-gmail', 'roblav96@gmail.com'],
		['tel:1-401-203-3195', 'mdi-phone', '401-203-3195'],
		['https://goo.gl/maps/m7GoP5YY2bd9NL167', 'mdi-google-maps', 'Boston, MA'],
	],
	socials: [
		['https://github.com/roblav96', 'mdi-github-box', 'github/roblav96'],
		['https://www.linkedin.com/in/roblav96/', 'mdi-linkedin-box', 'linkedin/roblav96'],
	],
	stacks: [
		['nf-mdi-language_typescript', 'TypeScript'],
		['nf-mdi-nodejs', 'Node.js'],
		['nf-mdi-vuejs', 'Vue.js'],
		['nf-dev-redis', 'Redis'],
		['nf-dev-mongodb', 'MongoDB'],
		['nf-dev-aws', 'Amazon Web Services'],
		['nf-dev-sublime', 'Sublime Text'],
		['nf-dev-terminal', 'Terminal Ninja'],
	],
})
