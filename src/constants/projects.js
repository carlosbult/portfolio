import { komikult, leaderboard, math, movie, nyeusi, space } from '../assets';

export const projects = [
	{
		id: 'project-1',
		name: 'projects:fonet.name',
		description: 'projects:fonet.description',
		tags: [
			{
				name: 'Next Js',
			},
			{
				name: 'Tailwind',
			},
			{
				name: 'Express JS',
			},
			{
				name: 'Mongo DB',
			},
      {
				name: 'MySql',
			},
      {
				name: 'AWS S3',
			},
			{ name: 'Amazon Web Services' },
		],
		image: komikult,
		demo: 'https://cliente.fonet.com.ve',
	},
	{
		id: 'project-3',
		name: 'projects:transportex.name',
		description: `projects:transportex.description`,
		tags: [
			{
				name: 'React Native',
			},
		],
		image: movie,
		// repo: 'https://github.com/shaqdeff/Movie-Metro',
		demo: 'https://play.google.com/store/apps/details?id=com.japcode.transportexmobileapp&hl=es_VE&gl=US',
	},
	{
		id: 'project-4',
		name: 'projects:froz.name',
		description: 'projects:froz.description',
		tags: [
			{
				name: 'React JS',
			},
			{
				name: 'Express JS',
			},
			{
				name: 'Mongo DB',
			},
		],
		image: nyeusi,
		demo: 'https://frozsports.com',
	},
];
