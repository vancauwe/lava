export type SeriesAccent = 'sage' | 'mist';

export type SeriesGroupId = 'ode-to-poems' | 'notebooks' | 'graffiti';

export type SeriesGroup = {
	id: SeriesGroupId;
	title: string;
	intro?: string;
};

export type Poem = {
	title: string;
	author: string;
	sourceLabel: string;
	sourceHref: string;
	stanzas: string[][];
};

export type PoemNotice = {
	title: string;
	author: string;
	note: string;
	sourceLabel: string;
	sourceHref: string;
};

export type Composition = {
	title: string;
	year: string;
	lines: string[];
};

export type Series = {
	slug: string;
	title: string;
	year: string;
	blurb: string;
	group: SeriesGroupId;
	/** Blue / green pastels only */
	accent: SeriesAccent;
	compositions?: number;
	note?: string;
	works?: Composition[];
	poem?: Poem;
	poemNotice?: PoemNotice;
};

export const seriesGroups: SeriesGroup[] = [
	{
		id: 'ode-to-poems',
		title: 'Ode to Poems',
		intro:
			'These series are designed to be presented to the public in an interactive format, with a box, paper and pen for visitors to leave their own echoes of life to the poem and compositions. These echoes will nurture future compositions.'
	},
	{
		id: 'notebooks',
		title: 'Notebooks'
	},
	{
		id: 'graffiti',
		title: 'Graffiti'
	}
];

export const seriesList: Series[] = [
	{
		slug: 'l-hirondelle',
		title: 'L’Hirondelle',
		year: '2014–2021',
		compositions: 14,
		group: 'ode-to-poems',
		blurb:
			'This series of compositions echoes the poem of Théophile Gautier. Each line echoes a composition. It is rooted in self-affirmation and embracing our growth and freedom.',
		accent: 'sage',
		poem: {
			title: 'L’Hirondelle',
			author: 'Théophile Gautier',
			sourceLabel: 'Wikisource',
			sourceHref: 'https://fr.wikisource.org/wiki/L%E2%80%99Hirondelle_(Gautier)',
			stanzas: [
				[
					'Je suis une hirondelle et non une colombe ;',
					'Ma nature me force à voltiger toujours.',
					'Le nid où des ramiers s’abritent les amours,',
					'S’il y fallait couver, serait bientôt ma tombe.'
				],
				[
					'Pour quelques mois, j’habite un créneau qui surplombe',
					'Et vole, quand l’automne a raccourci les jours,',
					'Pour les blancs minarets quittant les noires tours,',
					'Vers l’immuable azur d’où jamais pleur ne tombe.'
				],
				[
					'Aucun ciel ne m’arrête, aucun lieu ne me tient,',
					'Et dans tous les pays je demeure étrangère ;',
					'Mais partout de l’absent mon âme se souvient.'
				],
				[
					'Mon amour est constant, si mon aile est légère,',
					'Et, sans craindre l’oubli, la folle passagère',
					'D’un bout du monde à l’autre au même cœur revient.'
				]
			]
		}
	},
	{
		slug: 'les-colchiques',
		title: 'Les Colchiques',
		year: '2014–2021',
		compositions: 7,
		group: 'ode-to-poems',
		blurb:
			'This series of compositions echoes the poem by Apollinaire. Each paragraph echoes a composition. It illustrates the bittersweetness of life and its cycles.',
		accent: 'mist',
		works: [
			{
				title: 'Berlin',
				year: '2015',
				lines: [
					'Le pré est vénéneux mais joli en automne',
					'Les vaches y paissant',
					'Lentement s’empoisonnent'
				]
			},
			{
				title: 'The flow',
				year: '2020',
				lines: [
					'Le colchique couleur de cerne et de lilas',
					'Y fleurit tes yeux sont comme cette fleur-là'
				]
			},
			{
				title: 'Wild Child',
				year: '2020',
				lines: [
					'Violâtres comme leur cerne et comme cet automne',
					'Et ma vie pour tes yeux lentement s’empoisonne'
				]
			},
			{
				title: 'From Above',
				year: '2018',
				lines: [
					'Les enfants de l’école viennent avec fracas',
					'Vêtus de hoquetons et jouant de l’harmonica'
				]
			},
			{
				title: 'Délicatesse',
				year: '2020',
				lines: [
					'Ils cueillent les colchiques qui sont comme des mères',
					'Filles de leurs filles et sont couleur de tes paupières'
				]
			},
			{
				title: 'Promesses et Incertitudes',
				year: '2020',
				lines: ['Qui battent comme les fleurs battent au vent dément']
			},
			{
				title: 'Column',
				year: '2016',
				lines: [
					'Le gardien du troupeau chante tout doucement',
					'Tandis que lentes et meuglant les vaches abandonnent',
					'Pour toujours ce grand pré mal fleuri par l’automne'
				]
			}
		],
		poem: {
			title: 'Les Colchiques',
			author: 'Guillaume Apollinaire',
			sourceLabel: 'Wikisource (Alcools)',
			sourceHref: 'https://fr.wikisource.org/wiki/Alcools/Les_Colchiques',
			stanzas: [
				[
					'Le pré est vénéneux mais joli en automne',
					'Les vaches y paissant',
					'Lentement s’empoisonnent',
					'Le colchique couleur de cerne et de lilas',
					'Y fleurit tes yeux sont comme cette fleur-là',
					'Violâtres comme leur cerne et comme cet automne',
					'Et ma vie pour tes yeux lentement s’empoisonne'
				],
				[
					'Les enfants de l’école viennent avec fracas',
					'Vêtus de hoquetons et jouant de l’harmonica',
					'Ils cueillent les colchiques qui sont comme des mères',
					'Filles de leurs filles et sont couleur de tes paupières',
					'Qui battent comme les fleurs battent au vent dément'
				],
				[
					'Le gardien du troupeau chante tout doucement',
					'Tandis que lentes et meuglant les vaches abandonnent',
					'Pour toujours ce grand pré mal fleuri par l’automne'
				]
			]
		}
	},
	{
		slug: 'one-art',
		title: 'One Art',
		year: '2014–2021',
		compositions: 6,
		group: 'ode-to-poems',
		blurb:
			'This series of compositions echoes the poem by Elizabeth Bishop. Each paragraph echoes a composition. It explores the emotions of loss and process of rebirth.',
		accent: 'sage',
		poemNotice: {
			title: 'One Art',
			author: 'Elizabeth Bishop',
			note: 'The poem remains under copyright and is not reproduced here.',
			sourceLabel: 'Poetry Foundation',
			sourceHref: 'https://www.poetryfoundation.org/poems/47536/one-art'
		}
	},
	{
		slug: 'because-i-could-not-stop-for-death',
		title: 'Because I Could Not Stop for Death',
		year: '2014–2021',
		compositions: 10,
		group: 'ode-to-poems',
		blurb:
			'This series of compositions echoes the poem by Emily Dickinson. Several lines echo a composition. It contemplates tranquilly encounters and time.',
		accent: 'mist',
		works: [
			{
				title: 'Nene-sama',
				year: '2020',
				lines: ['Because I could not stop for Death —', 'He kindly stopped for me —']
			},
			{
				title: 'The Prohibited Sketch',
				year: '2020',
				lines: ['The Carriage held but just Ourselves —', 'And Immortality.']
			},
			{
				title: 'The Lone Giant',
				year: '2020',
				lines: [
					'We slowly drove — He knew no haste',
					'And I had put away',
					'My labor and my leisure too,',
					'For His Civility —'
				]
			},
			{
				title: 'Childhood',
				year: '2017',
				lines: ['We passed the School, where Children strove', 'At Recess — in the Ring —']
			},
			{
				title: 'The Face',
				year: '2016',
				lines: ['We passed the Fields of Gazing Grain —', 'We passed the Setting Sun —']
			},
			{
				title: 'From Stone to Color',
				year: '2020',
				lines: ['Or rather — He passed Us —', 'The Dews drew quivering and Chill —']
			},
			{
				title: 'A Powerful Island',
				year: '2021',
				lines: ['For only Gossamer, my Gown —', 'My Tippet — only Tulle —']
			},
			{
				title: 'Hidden Away',
				year: '2019',
				lines: [
					'We paused before a House that seemed',
					'A Swelling of the Ground —',
					'The Roof was scarcely visible —',
					'The Cornice — in the Ground —'
				]
			},
			{
				title: 'Puppets',
				year: '2015',
				lines: ['Since then — ’tis Centuries — and yet', 'Feels shorter than the Day']
			},
			{
				title: 'Douceur de la terre intérieure',
				year: '2020',
				lines: ['I first surmised the Horses’ Heads', 'Were toward Eternity']
			}
		],
		poem: {
			title: 'Because I could not stop for Death',
			author: 'Emily Dickinson',
			sourceLabel: 'Wikisource (1924)',
			sourceHref:
				'https://en.wikisource.org/wiki/The_Complete_Poems_of_Emily_Dickinson/Because_I_could_not_stop_for_Death',
			stanzas: [
				[
					'Because I could not stop for Death,',
					'He kindly stopped for me;',
					'The carriage held but just ourselves',
					'And Immortality.'
				],
				[
					'We slowly drove, he knew no haste,',
					'And I had put away',
					'My labor, and my leisure too,',
					'For his civility.'
				],
				[
					'We passed the school where children played',
					'At wrestling in a ring;',
					'We passed the fields of gazing grain,',
					'We passed the setting sun.'
				],
				[
					'We paused before a house that seemed',
					'A swelling of the ground;',
					'The roof was scarcely visible,',
					'The cornice but a mound.'
				],
				[
					'Since then ’t is centuries; but each',
					'Feels shorter than the day',
					'I first surmised the horses’ heads',
					'Were toward eternity.'
				]
			]
		}
	},
	{
		slug: 'kaleidoscope',
		title: 'Kaleidoscope',
		year: '2025–2026',
		group: 'notebooks',
		blurb: 'A notebook mixing impulsive coloring with pattern composition.',
		accent: 'sage'
	},
	{
		slug: 'connections',
		title: 'Connections',
		year: '2023–ongoing',
		group: 'notebooks',
		blurb:
			'Current art notebook on my profound admiration for the animals I have encountered. It questions the anthropocentric bias of our society.',
		accent: 'sage'
	},
	{
		slug: 'self-portrait',
		title: 'Self Portrait',
		year: '2021–2023',
		group: 'notebooks',
		blurb: 'A long composition in a Japanese goshuin, ill suited for exposition.',
		accent: 'sage'
	},
	{
		slug: 'power-representations',
		title: 'Power Representations',
		year: '2024–ongoing',
		group: 'graffiti',
		blurb:
			'On environmental, feminist and societal topics, for messages I feel are missing from our daily lives. Stencil designs completed, stencil production in process.',
		accent: 'mist'
	}
];

export function getSeries(slug: string): Series | undefined {
	return seriesList.find((s) => s.slug === slug);
}

export function getSeriesGroup(id: SeriesGroupId): SeriesGroup | undefined {
	return seriesGroups.find((g) => g.id === id);
}

export function seriesInGroup(id: SeriesGroupId): Series[] {
	return seriesList.filter((s) => s.group === id);
}

export function pickRandomSeries(excludeSlug: string, count = 3): Series[] {
	const pool = seriesList.filter((s) => s.slug !== excludeSlug);
	const shuffled = [...pool];
	for (let i = shuffled.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		const current = shuffled[i];
		const swap = shuffled[j];
		if (current && swap) {
			shuffled[i] = swap;
			shuffled[j] = current;
		}
	}
	return shuffled.slice(0, count);
}

/** Series palette: green (sage) + soft blue (mist) */
export const accentVar: Record<SeriesAccent, string> = {
	sage: 'var(--op-blue-pale)',
	mist: 'var(--op-info)'
};

/** Fallback widget wash when a series has no extract image */
export const groupAccentVar: Record<SeriesGroupId, string> = {
	'ode-to-poems': 'var(--op-blue-pale)',
	notebooks: 'var(--op-blue-pale)',
	graffiti: 'var(--op-info)'
};
