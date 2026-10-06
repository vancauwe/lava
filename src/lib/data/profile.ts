export const artistName = 'LAVA';

export type ProfileSegment = {
	text: string;
	/** Pastel purple + bold highlight */
	accent?: boolean;
};

/** About the Artist — key words in pastel purple (newsletter lilac). */
export const artistProfileSegments: ProfileSegment[] = [
	{ text: 'Diversity', accent: true },
	{ text: ' and ' },
	{ text: 'impact', accent: true },
	{ text: ' define my person and artistic practice. I create from ' },
	{ text: 'emotions', accent: true },
	{ text: ', while acknowledging my role to produce ' },
	{ text: 'thought-provoking', accent: true },
	{
		text: ' representations. My practice is first and foremost for myself: even more so than speech or writing, it is my first form of '
	},
	{ text: 'expression', accent: true },
	{ text: '. I am also fascinated with how others ' },
	{ text: 'resonate', accent: true },
	{ text: ' with my ' },
	{ text: 'compositions', accent: true },
	{ text: '. My goal is for people to ' },
	{ text: 'love it or hate it', accent: true },
	{ text: ', as long as it strikes a match and does not leave them ' },
	{ text: 'indifferent', accent: true },
	{ text: '.' }
];

export const seriesIntro = `Work gathered in three strands — odes to poems, notebooks, and graffiti.`;
