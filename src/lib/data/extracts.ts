import bicnsfd1 from '$lib/assets/series/because-i-could-not-stop-for-death-1.png';
import bicnsfd2 from '$lib/assets/series/because-i-could-not-stop-for-death-2.png';
import bicnsfd3 from '$lib/assets/series/because-i-could-not-stop-for-death-3.png';
import connections1 from '$lib/assets/series/connections-1.png';
import connections2 from '$lib/assets/series/connections-2.png';
import connections3 from '$lib/assets/series/connections-3.png';
import hir1 from '$lib/assets/series/l-hirondelle-1.png';
import hir2 from '$lib/assets/series/l-hirondelle-2.png';
import hir3 from '$lib/assets/series/l-hirondelle-3.png';
import colchiques1 from '$lib/assets/series/les-colchiques-1.png';
import colchiques2 from '$lib/assets/series/les-colchiques-2.png';
import colchiques3 from '$lib/assets/series/les-colchiques-3.png';
import oneArt1 from '$lib/assets/series/one-art-1.png';
import oneArt2 from '$lib/assets/series/one-art-2.png';
import oneArt3 from '$lib/assets/series/one-art-3.png';

export type SeriesExtract = {
	src: string;
	alt: string;
};

export const seriesExtracts: Record<string, SeriesExtract[]> = {
	connections: [
		{ src: connections1, alt: 'Extract from Connections' },
		{ src: connections2, alt: 'Extract from Connections' },
		{ src: connections3, alt: 'Extract from Connections' }
	],
	'because-i-could-not-stop-for-death': [
		{ src: bicnsfd2, alt: 'Extract from Because I Could Not Stop for Death' },
		{ src: bicnsfd1, alt: 'Extract from Because I Could Not Stop for Death' },
		{ src: bicnsfd3, alt: 'Extract from Because I Could Not Stop for Death' }
	],
	'l-hirondelle': [
		{ src: hir1, alt: 'Extract from L’Hirondelle' },
		{ src: hir2, alt: 'Extract from L’Hirondelle' },
		{ src: hir3, alt: 'Extract from L’Hirondelle' }
	],
	'les-colchiques': [
		{ src: colchiques1, alt: 'Extract from Les Colchiques' },
		{ src: colchiques2, alt: 'Extract from Les Colchiques' },
		{ src: colchiques3, alt: 'Extract from Les Colchiques' }
	],
	'one-art': [
		{ src: oneArt1, alt: 'Extract from One Art' },
		{ src: oneArt2, alt: 'Extract from One Art' },
		{ src: oneArt3, alt: 'Extract from One Art' }
	]
};
