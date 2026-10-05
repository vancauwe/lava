import lutryPhoto from '$lib/assets/expositions/expose-ton-art-lutry.jpg';

export type ExpositionAccent = 'lilac' | 'blush';

export type ExpositionImage = {
	src: string;
	alt: string;
};

export type Exposition = {
	slug: string;
	title: string;
	year: string;
	dates: string;
	venue: string;
	place: string;
	blurb: string;
	/** Orange / violet pastels only */
	accent: ExpositionAccent;
	eventUrl?: string;
	image?: ExpositionImage;
	/** Series slugs shown at this exposition */
	seriesSlugs: string[];
};

export const expositionsList: Exposition[] = [
	{
		slug: 'creapoly',
		title: 'CREApoly',
		year: '2026',
		dates: '9–12 October 2026',
		venue: 'Foyer SG',
		place: 'EPFL, Lausanne',
		blurb:
			'An exhibition by and for EPFL staff and doctoral students — a space for free, creative expression as part of the 2026 Health days and Les Culturelles Festival. Les Colchiques was shown here.',
		accent: 'lilac',
		eventUrl: 'https://memento.epfl.ch/event/join-creapoly-an-exhibition-by-and-for-epfl-staff/',
		seriesSlugs: ['les-colchiques']
	},
	{
		slug: 'expose-ton-art-lutry',
		title: 'Expose ton Art',
		year: '2026',
		dates: '15 August 2026',
		venue: 'Quais de Lutry',
		place: 'Lutry',
		blurb:
			'Open-air market exhibition organised by the Société de Développement de Lutry. Because I Could Not Stop for Death and One Art were shown here.',
		accent: 'blush',
		eventUrl: 'https://www.sdlutry.ch/d-tails-et-inscription/expose-ton-art-15-aout',
		image: {
			src: lutryPhoto,
			alt: 'Framed works on folding tables at Expose ton Art on the Quais de Lutry, harbour and sailboats beyond'
		},
		seriesSlugs: ['because-i-could-not-stop-for-death', 'one-art']
	}
];

export function getExposition(slug: string): Exposition | undefined {
	return expositionsList.find((e) => e.slug === slug);
}

/** Expositions palette: violet (lilac) + orange/peach (blush) */
export const expositionAccentVar: Record<ExpositionAccent, string> = {
	lilac: 'var(--op-blue)',
	blush: 'var(--op-blue-light)'
};
