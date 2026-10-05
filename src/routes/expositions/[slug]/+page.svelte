<script lang="ts">
	import { resolve } from '$app/paths';
	import { accentVar } from '$lib/data/series';
	import { expositionAccentVar } from '$lib/data/expositions';
	import { seriesExtracts } from '$lib/data/extracts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const exposition = $derived(data.exposition);
	const series = $derived(data.series);
</script>

<svelte:head>
	<title>{exposition.title} — LAVA</title>
</svelte:head>

<article class="detail">
	<p class="crumb">
		<a href={resolve('/expositions')}>Expositions</a>
		<span aria-hidden="true">/</span>
		<span>{exposition.title}</span>
	</p>

	<header>
		<p class="year">{exposition.dates}</p>
		<h1>{exposition.title}</h1>
		<p class="venue">{exposition.venue} — {exposition.place}</p>
		<p class="blurb serif">{exposition.blurb}</p>
		{#if exposition.eventUrl}
			<p class="source">
				<a href={exposition.eventUrl} rel="external noreferrer">Event page</a>
			</p>
		{/if}
	</header>

	{#if exposition.image}
		<figure class="photo">
			<img src={exposition.image.src} alt={exposition.image.alt} />
		</figure>
	{:else}
		<div
			class="field"
			style={`--accent: ${expositionAccentVar[exposition.accent]}`}
			aria-hidden="true"
		></div>
	{/if}

	{#if series.length}
		<section class="shown" aria-labelledby="shown-title">
			<h2 id="shown-title">Series shown</h2>
			<ul>
				{#each series as item (item.slug)}
					{@const thumb = seriesExtracts[item.slug]?.[0]}
					<li style={`--accent: ${accentVar[item.accent]}`}>
						<a href={resolve('/series/[slug]', { slug: item.slug })}>
							{#if thumb}
								<img class="thumb" src={thumb.src} alt={thumb.alt} />
							{:else}
								<span class="swatch" aria-hidden="true"></span>
							{/if}
							<span class="meta">
								<span class="meta-year">{item.year}</span>
								<span class="meta-title">{item.title}</span>
							</span>
						</a>
					</li>
				{/each}
			</ul>
		</section>
	{/if}
</article>

<style>
	.detail {
		display: grid;
		gap: var(--op-space-lg);
		animation: fade-up 650ms ease both;
	}

	.crumb {
		display: flex;
		gap: 0.5rem;
		margin: 0;
		font-size: 0.85rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--op-text-faint);
	}

	.crumb a {
		color: var(--op-text-muted);
		text-decoration: none;
	}

	.crumb a:hover {
		color: var(--op-text);
	}

	header {
		display: grid;
		gap: var(--op-space-sm);
		max-width: 40rem;
	}

	.year {
		margin: 0;
		font-size: 0.78rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--op-text-faint);
	}

	h1 {
		font-size: clamp(2.6rem, 7vw, 4rem);
	}

	.venue {
		margin: 0;
		font-size: 0.95rem;
		letter-spacing: 0.04em;
		color: var(--op-text-muted);
	}

	.blurb {
		margin: 0;
		font-size: 1.55rem;
		line-height: 1.35;
		color: var(--op-text-2);
	}

	.source {
		margin: 0;
		font-size: 0.95rem;
		color: var(--op-text-muted);
	}

	.source a {
		color: var(--op-text-2);
	}

	.photo {
		margin: 0;
		max-width: min(100%, 42rem);
	}

	.photo img {
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 4 / 3;
		object-fit: cover;
		object-position: center;
		border: 1px solid var(--op-border-subtle);
		background: var(--op-surface-2);
	}

	.field {
		min-height: clamp(8rem, 22vw, 14rem);
		max-width: 22rem;
		border: 1px solid var(--op-border-subtle);
		background:
			radial-gradient(ellipse at 20% 30%, var(--accent) 0%, transparent 55%),
			linear-gradient(160deg, var(--op-surface-2), var(--op-bg));
	}

	.shown {
		display: grid;
		gap: var(--op-space-md);
		border-top: 1px solid var(--op-border-subtle);
		padding-top: var(--op-space-md);
	}

	h2 {
		font-size: clamp(1.6rem, 3vw, 2.1rem);
	}

	.shown ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: var(--op-space-sm);
	}

	.shown a {
		display: grid;
		grid-template-columns: 4.5rem 1fr;
		align-items: center;
		gap: var(--op-space-md);
		text-decoration: none;
		padding-block: var(--op-space-xs);
	}

	.thumb,
	.swatch {
		display: block;
		width: 4.5rem;
		height: 4.5rem;
		object-fit: cover;
		object-position: center;
		border: 1px solid var(--op-border-subtle);
		background: var(--op-surface-2);
		box-sizing: border-box;
	}

	.swatch {
		background: linear-gradient(145deg, var(--accent), var(--op-surface-2));
	}

	.meta {
		display: grid;
		gap: 0.2rem;
		min-width: 0;
	}

	.meta-year {
		font-size: 0.72rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--op-text-faint);
	}

	.meta-title {
		font-family: var(--op-font-heading);
		font-size: 1.15rem;
		letter-spacing: -0.02em;
	}

	.shown a:hover .meta-title {
		color: var(--op-blue-dark);
	}
</style>
