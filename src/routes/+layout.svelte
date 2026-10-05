<script lang="ts">
	import '@fontsource/space-grotesk/400.css';
	import '@fontsource/space-grotesk/500.css';
	import '@fontsource/space-grotesk/600.css';
	import '@fontsource/instrument-serif/400.css';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="description" content="LAVA — artistic portfolio, series, and studio newsletter." />
</svelte:head>

<div class="site-shell">
	<Header />
	<main class="site-main">
		{@render children()}
	</main>
	<Footer />
</div>
