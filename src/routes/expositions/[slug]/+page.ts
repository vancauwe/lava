import { error } from '@sveltejs/kit';
import { expositionsList, getExposition } from '$lib/data/expositions';
import { getSeries } from '$lib/data/series';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => expositionsList.map((e) => ({ slug: e.slug }));

export const load: PageLoad = ({ params }) => {
	const exposition = getExposition(params.slug);
	if (!exposition) error(404, 'Exposition not found');

	const series = exposition.seriesSlugs
		.map((slug) => getSeries(slug))
		.filter((s): s is NonNullable<typeof s> => Boolean(s));

	return { exposition, series };
};
