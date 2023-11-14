import logos from './logos'
import Vue from 'vue'

export default Vue.observable({
	logos,
	mini: false,
	ready: false,

	contacts: [
		{
			href: 'mailto:roblav96@gmail.com',
			icon: 'email',
			text: 'roblav96@gmail.com',
		},
		{
			href: 'tel:1-401-203-3195',
			icon: 'phone',
			text: '401-203-3195',
		},
		{
			href: 'https://goo.gl/maps/3PKrydopCY37mP8e8',
			icon: 'map-marker',
			text: 'New York, NY',
		},
	],

	socials: [
		{
			href: 'https://github.com/roblav96',
			icon: 'github',
			svg: logos.github[1],
			text: 'github/roblav96',
			subtext: 'roblav96',
		},
		{
			href: 'https://www.linkedin.com/in/roblav96/',
			icon: 'linkedin',
			svg: logos.linkedin[1],
			text: 'linkedin/roblav96',
			subtext: 'roblav96',
		},
	],

	traits: [
		['human-greeting', 'Altruistic, ego-free, humble, open-minded'],
		['account-tie', 'Leader, openly criticize, will take charge'],
		['teach', 'Eager to learn, more eager to teach'],
		['comment-quote-outline', '<i>"If you want to go far, go together"</i>'],
		['microphone-variant', 'Public seminar speaker & event attendee'],
		['counter', '+2,000 GitHub contributions yearly'],
	],

	technologies: [
		logos.typescript,
		logos.nodejs,
		logos.react,
		logos.vuejs,
		logos.aws,
		logos.docker,
		logos.redis,
		logos.postgresql,
		logos.mongodb,
		logos.googleanalytics,
		logos.terminal,
		logos.electron,
		logos.sublimetext,
	],

	experiences: [
		{
			href: 'https://www.crowdpass.co/',
			logo: 'crowdpass.svg',
			company: 'CrowdPass',
			title: 'Lead Software Engineer',
			duration: 'Jan 2023 – Current',
			description: `Designed and built the frontend, backend, and mobile app for an RFID+NFC wristband entry access system, then deployed to events hosted by Lamborghini, Ecolab, Palm Springs Surf Club, and Jonas Brothers Tour`,
			// description: `Event landing page, event appearance settings, ticketing dashboard, attendee badge printing, etc.`,
			technologies: [
				logos.typescript,
				logos.react,
				logos.nodejs,
				logos.deno,
				logos.websocket,
				logos.postgresql,
				logos.aws,
				logos.githubactions,
				logos.figma,
				logos.sentry,
			],
		},
		{
			href: 'https://www.exacare.com/',
			logo: 'exacare.png',
			company: 'ExaCare',
			title: 'Founding Frontend Software Engineer',
			duration: 'May 2022 – Dec 2022',
			description: `Built the entire frontend from the ground up, precisely following a Figma design`,
			technologies: [
				logos.typescript,
				logos.react,
				logos.nodejs,
				logos.postgresql,
				logos.serverless,
				logos.docker,
				logos.aws,
				logos.lambda,
			],
		},
		{
			href: 'https://github.com/roblav96/futon-media',
			logo: 'emby.png',
			company: 'Futon Media',
			title: 'Creator',
			duration: 'Sep 2018 – Feb 2022',
			description: `Instantly stream Movies and TV Shows via Emby Media`,
			technologies: [
				logos.typescript,
				logos.nodejs,
				logos.deno,
				logos.react,
				logos.rxjs,
				logos.redis,
				logos.csharp,
				logos.dotnet,
			],
		},
		{
			href: 'https://joinjuno.com/',
			logo: 'leveredge.png',
			company: 'LeverEdge',
			title: 'Lead Software Engineer',
			duration: 'Feb 2020 – Apr 2020',
			description: `Upgraded frontend to use Nuxt.js, created a LinkedIn scraper with headless Puppeteer`,
			technologies: [
				logos.typescript,
				logos.laravel,
				logos.php,
				logos.vuejs,
				logos.nuxt,
				logos.figma,
				logos.googleanalytics,
				logos.docker,
				logos.aws,
				logos.ec2,
			],
		},
		{
			href: 'https://dochub.com/',
			logo: 'dochub.svg',
			company: 'DocHub',
			title: 'Lead Software Engineer',
			duration: 'May 2019 – Oct 2019',
			description: `Scaled product, integrated analytics/metrics, upgraded frontend to use TypeScript`,
			technologies: [
				logos.typescript,
				logos.emberjs,
				logos.coffeescript,
				logos.bootstrap,
				logos.tailwindcss,
				logos.sass,
				logos.webpack,
				logos.ruby,
				logos.rails,
				logos.googleanalytics,
				logos.docker,
				logos.aws,
				logos.nginx,
				logos.chef,
				logos.opsworks,
				logos.ec2,
				logos.iam,
				logos.rds,
			],
		},
		{
			href: 'https://www.kava.io/',
			logo: 'kava.svg',
			company: 'Kava Labs',
			title: 'Senior Full-Stack Software Engineer',
			duration: 'Sep 2018 – Apr 2019',
			description: `Designed, developed, and deployed customer-facing 'Kava Switch' blockchain platform`,
			technologies: [
				logos.typescript,
				logos.nodejs,
				logos.vuejs,
				logos.vuetify,
				logos.electron,
				logos.sass,
				logos.webpack,
				logos.bitcoin,
				logos.ethereum,
				logos.redis,
				logos.nginx,
				logos.ec2,
			],
		},
		{
			href: 'https://github.com/roblav96/robinhood.tools',
			logo: 'robinhood.svg',
			company: 'Robinhood Tools',
			title: 'Creator',
			duration: 'Dec 2016 – Aug 2018',
			description: `Advanced tools and resources for trading equities on Robinhood`,
			technologies: [
				logos.typescript,
				logos.nodejs,
				logos.vuejs,
				logos.bulma,
				logos.sass,
				logos.websocket,
				logos.redis,
				logos.nginx,
			],
		},
		{
			href: 'https://gethuman.com/',
			logo: 'gethuman.png',
			company: 'GetHuman',
			title: 'Senior Full-Stack Software Engineer',
			duration: 'Sep 2016 – Aug 2017',
			description: `Designed, developed, and deployed native mobile platform on iOS & Android using NativeScript`,
			technologies: [
				logos.typescript,
				logos.nativescript,
				logos.apple,
				logos.android,
				logos.amplitude,
				logos.nodejs,
				logos.angular,
				logos.webpack,
				logos.stripe,
				logos.mongodb,
				logos.mocha,
			],
		},
		{
			href: 'https://mitrend.com/',
			logo: 'dell-emc.svg',
			company: 'EMC Corporation',
			title: 'Full-Stack Software Engineer',
			duration: 'Sep 2015 – Dec 2015',
			description: `Helped develop scanner reporting front-end in an agile environment using scrum methodologies`,
			technologies: [
				logos.nodejs,
				logos.mongodb,
				logos.mocha,
				logos.backbonejs,
				logos.marionettejs,
				logos.highcharts,
			],
		},
	],

	educations: [
		// {
		// 	href: 'https://open.spotify.com/show/59I1XnvAB9fQzSj9SIKCoI?si=bc8a428695ec4ca6',
		// 	logo: 'soft-skills-engineering.jpeg',
		// 	company: 'Soft Skills Engineering',
		// 	title: 'Favorite software engineering podcast',
		// },
		{
			href: 'https://www.yourprimer.com/',
			logo: 'google-primer.png',
			company: 'Google Primer',
			title: 'Grow With Google Program',
			description: `Insights from trusted industry experts insights from trusted industry experts into jargon-free interactive lessons featuring practical next steps for reaching your business or career goals`,
		},
		{
			href: 'https://www.uri.edu/',
			logo: 'uri.svg',
			company: 'University of Rhode Island',
			title: 'Computer Science',
			duration: 'Sep 2009 – June 2010',
			description: `Voluntarily resigned due to outdated curriculum`,
		},
	],
})
