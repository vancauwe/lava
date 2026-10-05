import { error } from '@sveltejs/kit';
import { getSeries, seriesList } from '$lib/data/series';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => seriesList.map((s) => ({ slug: s.slug }));

export const load: PageLoad = ({ params }) => {
	const series = getSeries(params.slug);
	if (!series) error(404, 'Series not found');
	return { series };
};
