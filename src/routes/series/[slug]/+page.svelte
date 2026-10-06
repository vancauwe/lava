<script lang="ts">
	import { resolve } from '$app/paths';
	import { seriesExtracts } from '$lib/data/extracts';
	import { accentVar, getSeriesGroup, pickRandomSeries, type Series } from '$lib/data/series';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const series = $derived(data.series);
	const group = $derived(getSeriesGroup(series.group));
	const extracts = $derived(seriesExtracts[series.slug] ?? []);
	/* Client-only shuffle; $derived would prerender a mismatched pick. */
	/* eslint-disable-next-line svelte/prefer-writable-derived */
	let recommended = $state<Series[]>([]);

	$effect(() => {
		recommended = pickRandomSeries(series.slug, 3);
	});
</script>

<svelte:head>
	<title>{series.title} — LAVA</title>
</svelte:head>

<div class="series-theme theme-{series.slug}">
	<article class="detail">
		<p class="crumb">
			<a href={resolve('/series')}>Series</a>
			<span aria-hidden="true">/</span>
			<span>{series.title}</span>
		</p>

		<header>
			{#if group}
				<p class="group-label">{group.title}</p>
			{/if}
			<p class="year">{series.year}</p>
			<h1>{series.title}</h1>
			{#if series.compositions}
				<p class="count">{series.compositions} compositions</p>
			{/if}
			<p class="blurb serif">{series.blurb}</p>
			{#if series.poem}
				<p class="source">
					Poem by {series.poem.author} —
					<a href={series.poem.sourceHref} rel="external noreferrer">{series.poem.sourceLabel}</a>
				</p>
			{/if}
			{#if series.poemNotice}
				<p class="source">
					{series.poemNotice.note}
					<a href={series.poemNotice.sourceHref} rel="external noreferrer"
						>{series.poemNotice.sourceLabel}</a
					>
				</p>
			{/if}
		</header>

		{#if extracts.length}
			<ul class="extracts">
				{#each extracts as extract (extract.src)}
					<li>
						<img src={extract.src} alt={extract.alt} />
					</li>
				{/each}
			</ul>
		{:else}
			<div class="field" aria-hidden="true"></div>
		{/if}

		{#if series.works?.length && series.poem}
			<section class="associations" aria-labelledby="works-title">
				<div class="assoc-head">
					<h2 id="works-title">Compositions</h2>
					<h2 id="poem-title">{series.poem.title}</h2>
				</div>
				<ol>
					{#each series.works as work, i (work.title)}
						<li>
							<div class="assoc-left">
								<p class="work-head">
									<span class="work-label">
										<span class="work-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span
										>
										<span class="work-title">{work.title}</span>
									</span>
									<span class="work-year">{work.year}</span>
								</p>
							</div>
							<p class="assoc-right work-lines serif">
								{#each work.lines as line, j (j)}
									{line}{#if j < work.lines.length - 1}<br />{/if}
								{/each}
							</p>
						</li>
					{/each}
				</ol>
			</section>
		{:else if series.works?.length}
			<section class="works" aria-labelledby="works-title">
				<h2 id="works-title">Compositions</h2>
				<ol>
					{#each series.works as work, i (work.title)}
						<li>
							<p class="work-head">
								<span class="work-label">
									<span class="work-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
									<span class="work-title">{work.title}</span>
								</span>
								<span class="work-year">{work.year}</span>
							</p>
							<p class="work-lines serif">
								{#each work.lines as line, j (j)}
									{line}{#if j < work.lines.length - 1}<br />{/if}
								{/each}
							</p>
						</li>
					{/each}
				</ol>
			</section>
		{:else if series.poem}
			<section class="poem" aria-labelledby="poem-title">
				<h2 id="poem-title">{series.poem.title}</h2>
				<p class="poem-meta">{series.poem.author}</p>
				{#each series.poem.stanzas as stanza, i (i)}
					<p class="stanza serif">
						{#each stanza as line, j (j)}
							{line}{#if j < stanza.length - 1}<br />{/if}
						{/each}
					</p>
				{/each}
			</section>
		{/if}
	</article>
</div>

{#if recommended.length}
	<section class="recommended" aria-labelledby="recommended-title">
		<h2 id="recommended-title">Other series to discover</h2>
		<ul>
			{#each recommended as item (item.slug)}
				{@const thumb = seriesExtracts[item.slug]?.[0]}
				<li style={`--accent: ${accentVar[item.accent]}`}>
					<a href={resolve('/series/[slug]', { slug: item.slug })}>
						{#if thumb}
							<img class="thumb" src={thumb.src} alt={thumb.alt} />
						{:else}
							<span class="swatch" aria-hidden="true"></span>
						{/if}
						<span class="rec-meta">
							<span class="rec-year">{item.year}</span>
							<span class="rec-title">{item.title}</span>
						</span>
					</a>
				</li>
			{/each}
		</ul>
	</section>
{/if}

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

	.group-label,
	.year,
	.count {
		margin: 0;
		font-size: 0.78rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--op-text-faint);
	}

	.group-label {
		color: var(--op-text-muted);
	}

	h1 {
		font-size: clamp(2.6rem, 7vw, 4rem);
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
		line-height: 1.45;
		color: var(--op-text-muted);
		max-width: 36rem;
	}

	.source a {
		color: var(--op-text-2);
	}

	.extracts {
		list-style: none;
		margin-inline: auto;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(3, 7.5rem);
		gap: var(--op-space-md);
		width: max-content;
		justify-content: center;
	}

	.extracts li {
		margin: 0;
		width: 7.5rem;
	}

	.extracts img {
		width: 7.5rem;
		height: 7.5rem;
		object-fit: cover;
		object-position: center;
		display: block;
		border: 0.2rem solid var(--op-frame);
		background: var(--op-frame);
		box-sizing: border-box;
	}

	.associations {
		display: grid;
		gap: var(--op-space-md);
	}

	.assoc-head {
		display: grid;
		grid-template-columns: minmax(8rem, 0.85fr) minmax(0, 1.25fr);
		gap: var(--op-space-lg);
		align-items: baseline;
	}

	.associations ol {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0;
		border-top: 1px solid var(--op-border);
	}

	.associations li {
		display: grid;
		grid-template-columns: minmax(8rem, 0.85fr) minmax(0, 1.25fr);
		gap: var(--op-space-lg);
		align-items: start;
		padding-block: var(--op-space-md);
		border-bottom: 1px solid var(--op-border-subtle);
	}

	.assoc-left {
		min-width: 0;
	}

	.assoc-right {
		min-width: 0;
	}

	.works ol {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0;
		border-top: 1px solid var(--op-border);
	}

	.works li {
		display: grid;
		gap: var(--op-space-xs);
		padding-block: var(--op-space-md);
		border-bottom: 1px solid var(--op-border-subtle);
	}

	.work-head {
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: var(--op-space-sm);
		align-items: baseline;
	}

	.assoc-left .work-head {
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		gap: 0.25rem;
	}

	.work-label {
		display: inline-flex;
		align-items: baseline;
		gap: 0.55rem;
		min-width: 0;
	}

	.work-num {
		font-family: var(--op-font-heading);
		font-size: 0.7rem;
		font-weight: 500;
		letter-spacing: 0.16em;
		color: var(--op-text);
		font-variant-numeric: tabular-nums;
		flex-shrink: 0;
	}

	.work-title {
		font-family: var(--op-font-heading);
		font-size: 1.2rem;
		color: var(--op-text);
	}

	.work-year {
		font-size: 0.78rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--op-text-faint);
	}

	.work-lines {
		margin: 0;
		font-size: 1.15rem;
		line-height: 1.45;
		color: var(--op-text-muted);
		max-width: 36rem;
	}

	.poem {
		display: grid;
		gap: var(--op-space-md);
		max-width: 38rem;
		padding-top: var(--op-space-sm);
		border-top: 1px solid var(--op-border-subtle);
	}

	.poem-meta {
		margin: 0;
		font-size: 0.85rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--op-text-muted);
	}

	.stanza {
		margin: 0;
		font-size: 1.2rem;
		line-height: 1.5;
		color: var(--op-text-2);
	}

	@media (max-width: 640px) {
		.assoc-head,
		.associations li {
			grid-template-columns: 1fr;
			gap: var(--op-space-xs);
		}
	}

	.field {
		min-height: clamp(8rem, 22vw, 14rem);
		max-width: 22rem;
		border: 1px solid var(--op-border-subtle);
		background: linear-gradient(180deg, var(--series-a), var(--op-surface));
	}

	h2 {
		font-size: clamp(1.6rem, 3vw, 2.1rem);
	}

	.recommended {
		display: grid;
		gap: var(--op-space-md);
		margin-top: var(--op-space-xl);
		padding-block: var(--op-space-xl);
		background: var(--op-surface);
		/* Break out of site-main width so the white band is full-bleed */
		margin-inline: calc(50% - 50vw);
		width: 100vw;
		padding-inline: max(1.25rem, calc((100vw - var(--op-max)) / 2));
		box-sizing: border-box;
		border-top: 1px solid var(--op-border-subtle);
	}

	.recommended ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: var(--op-space-sm);
	}

	.recommended a {
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

	.rec-meta {
		display: grid;
		gap: 0.2rem;
		min-width: 0;
	}

	.rec-year {
		font-size: 0.72rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--op-text-faint);
	}

	.rec-title {
		font-family: var(--op-font-heading);
		font-size: 1.15rem;
		letter-spacing: -0.02em;
	}

	.recommended a:hover .rec-title {
		color: var(--op-blue-dark);
	}

	@media (max-width: 560px) {
		.extracts {
			grid-template-columns: repeat(3, 5.5rem);
			gap: var(--op-space-sm);
		}

		.extracts li,
		.extracts img {
			width: 5.5rem;
			height: 5.5rem;
		}

		.recommended a {
			grid-template-columns: 3.75rem 1fr;
			gap: var(--op-space-sm);
		}

		.thumb,
		.swatch {
			width: 3.75rem;
			height: 3.75rem;
		}
	}
</style>
