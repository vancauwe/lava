import bicnsfd2 from '$lib/assets/series/because-i-could-not-stop-for-death-2.png';
import connections1 from '$lib/assets/series/connections-1.png';
import hir1 from '$lib/assets/series/l-hirondelle-1.png';
import colchiques1 from '$lib/assets/series/les-colchiques-1.png';
import oneArt2 from '$lib/assets/series/one-art-2.png';

/** Hero mosaic — up to five extracts chosen for complementary colour. */
export const landingMosaic = [
	{
		src: bicnsfd2,
		alt: 'Extract from Because I Could Not Stop for Death',
		slug: 'because-i-could-not-stop-for-death'
	},
	{
		src: colchiques1,
		alt: 'Extract from Les Colchiques',
		slug: 'les-colchiques'
	},
	{
		src: hir1,
		alt: 'Extract from L’Hirondelle',
		slug: 'l-hirondelle'
	},
	{
		src: connections1,
		alt: 'Extract from Connections',
		slug: 'connections'
	},
	{
		src: oneArt2,
		alt: 'Extract from One Art',
		slug: 'one-art'
	}
] as const;
