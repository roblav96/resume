import logos from './assets/logos.json'
import Vue from 'vue'

console.log(`logos ->`, logos)

export default Vue.observable({
	logos,
	mini: false,
	ready: false,

	contacts: [
		{
			href: 'mailto:roblav96@gmail.com',
			icon: 'mdi-gmail',
			text: 'roblav96@gmail.com',
		},
		{
			href: 'tel:1-401-203-3195',
			icon: 'mdi-phone',
			text: '401-203-3195',
		},
		{
			href: 'https://goo.gl/maps/m7GoP5YY2bd9NL167',
			icon: 'mdi-google-maps',
			text: 'Boston, MA',
		},
	],

	socials: [
		{
			href: 'https://github.com/roblav96',
			icon: 'mdi-github-box',
			text: 'github/roblav96',
			subtext: 'roblav96',
		},
		{
			href: 'https://www.linkedin.com/in/roblav96/',
			icon: 'mdi-linkedin-box',
			text: 'linkedin/roblav96',
			subtext: 'roblav96',
		},
	],

	stacks: [
		{ icon: 'nf-mdi-language_typescript', text: 'TypeScript' },
		{ icon: 'nf-mdi-nodejs', text: 'Node.js' },
		{ icon: 'nf-mdi-vuejs', text: 'Vue.js' },
		{ icon: 'nf-dev-redis', text: 'Redis' },
		{ icon: 'nf-dev-mongodb', text: 'MongoDB' },
		{ icon: 'nf-dev-aws', text: 'Amazon Web Services' },
		{ icon: 'nf-dev-sublime', text: 'Sublime Text' },
		{ icon: 'nf-dev-terminal', text: 'Terminal Ninja' },
	],

	experiences: [
		{
			logo: 'dochub.png',
			title: 'Lead Product Engineer',
			company: 'DocHub',
			href: 'https://dochub.com/',
			duration: 'May 2019 – Oct 2019',
			description: `Scaled product, integrated Google Analytics App+Web, analyzed product usage, stripped out useless features`,
			tech: ['nf-dev-ruby_on_rails', 'nf-dev-coffeescript', 'nf-dev-ember'],
		},
		{
			logo: 'kava.png',
			title: 'Senior Full-Stack Software Engineer',
			company: 'Kava Labs',
			href: 'https://www.kava.io/',
			duration: 'Sep 2018 – Apr 2019',
			description: `Designed, developed, and deployed customer-facing 'Kava Switch' blockchain platform`,
			tech: '',
		},
		{
			logo: 'gethuman.png',
			title: 'Senior Full-Stack Software Engineer',
			company: 'GetHuman',
			href: 'https://gethuman.com/',
			duration: 'Sep 2016 – Aug 2017',
			description: `Designed, developed, and deployed their native mobile platform on iOS & Android using NativeScript`,
			tech: '',
		},
		{
			logo: 'dell-emc.png',
			title: 'Full-Stack Software Engineer',
			company: 'EMC Corporation',
			href: 'https://mitrend.com/',
			duration: 'Sep 2015 – Dec 2015',
			description: `Worked in an agile environment using scrum methodologies & Helped development of their scanner reporting user interface`,
			tech: '',
		},
		{
			logo: 'boustris.png',
			title: 'Head of Information Technology',
			company: 'Boustris & Sons',
			href: 'http://boustrisandsons.com/',
			duration: 'Sep 2012 – Aug 2015',
			description: `Developed their fire alarm testing and inspection application & Troubleshoot, repair, and installed networked IT systems in commercial buildings`,
			tech: '',
		},
		{
			logo: 'facepunch.jpg',
			title: 'Game Developer',
			company: 'Facepunch Studios',
			href: 'https://facepunch.com/',
			duration: 'Jul 2007 – Aug 2009',
			description: `'Developed games on Steam using the Lua programming language`,
			tech: '',
		},
	],
})
