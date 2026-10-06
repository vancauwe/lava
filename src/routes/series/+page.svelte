<script lang="ts">
	import { resolve } from '$app/paths';
	import { seriesExtracts } from '$lib/data/extracts';
	import { seriesIntro } from '$lib/data/profile';
	import { groupAccentVar, seriesGroups, seriesInGroup } from '$lib/data/series';

	const grouped = seriesGroups.map((group) => ({
		group,
		items: seriesInGroup(group.id)
	}));

	let index = 0;
	const delays = grouped.map(({ items }) =>
		items.map(() => {
			const delay = index * 80;
			index += 1;
			return delay;
		})
	);
</script>

<svelte:head>
	<title>Series — LAVA</title>
</svelte:head>

<section class="page">
	<header class="intro">
		<h1>Series</h1>
		<p class="serif">{seriesIntro}</p>
	</header>

	{#each grouped as { group, items }, g (group.id)}
		<section class="group" aria-labelledby="group-{group.id}">
			<header class="group-head">
				<h2 id="group-{group.id}">{group.title}</h2>
				{#if group.intro}
					<p class="group-intro serif">{group.intro}</p>
				{/if}
			</header>

			<ul class="list">
				{#each items as item, i (item.slug)}
					{@const thumb = seriesExtracts[item.slug]?.[0]}
					<li style={`--accent: ${groupAccentVar[item.group]}; --delay: ${delays[g]?.[i] ?? 0}ms`}>
						<a href={resolve('/series/[slug]', { slug: item.slug })}>
							{#if thumb}
								<img class="thumb" src={thumb.src} alt={thumb.alt} />
							{:else}
								<span class="swatch" aria-hidden="true"></span>
							{/if}
							<span class="meta">
								<span class="year">{item.year}</span>
								<span class="title">{item.title}</span>
								{#if item.compositions}
									<span class="count">{item.compositions} compositions</span>
								{/if}
								<span class="blurb serif">{item.blurb}</span>
							</span>
						</a>
					</li>
				{/each}
			</ul>
		</section>
	{/each}
</section>

<style>
	.page {
		display: grid;
		gap: var(--op-space-xl);
		animation: fade-up 650ms ease both;
	}

	.intro {
		display: grid;
		gap: var(--op-space-sm);
	}

	.intro h1 {
		font-size: clamp(2.4rem, 6vw, 3.6rem);
	}

	.intro p {
		margin: 0;
		max-width: 36rem;
		font-size: 1.4rem;
		color: var(--op-text-2);
	}

	.group {
		display: grid;
		gap: var(--op-space-md);
	}

	.group-head {
		display: grid;
		gap: var(--op-space-xs);
		max-width: 40rem;
	}

	.group-head h2 {
		font-size: clamp(1.6rem, 3vw, 2.2rem);
	}

	.group-intro {
		margin: 0;
		font-size: 1.25rem;
		color: var(--op-text-muted);
	}

	.list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: var(--op-space-md);
	}

	li {
		animation: fade-up 700ms ease both;
		animation-delay: var(--delay);
	}

	a {
		display: grid;
		grid-template-columns: 7.5rem 1fr;
		gap: var(--op-space-md);
		align-items: center;
		text-decoration: none;
		padding-block: var(--op-space-md);
		border-top: 1px solid var(--op-border-subtle);
	}

	li:last-child a {
		border-bottom: 1px solid var(--op-border-subtle);
	}

	.thumb,
	.swatch {
		display: block;
		width: 7.5rem;
		height: 7.5rem;
		object-fit: cover;
		object-position: center;
		border: 1px solid var(--op-border-subtle);
		box-sizing: border-box;
		background: var(--op-surface-2);
		flex-shrink: 0;
	}

	.swatch {
		background:
			linear-gradient(145deg, var(--accent), transparent 70%),
			linear-gradient(325deg, var(--op-surface-2), var(--op-surface));
	}

	.meta {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 0.35rem;
	}

	.year,
	.count {
		font-size: 0.78rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--op-text-faint);
	}

	.title {
		font-family: var(--op-font-heading);
		font-size: clamp(1.5rem, 3vw, 2rem);
		letter-spacing: -0.02em;
	}

	.blurb {
		color: var(--op-text-muted);
		font-size: 1.2rem;
		max-width: 36rem;
	}

	a:hover .title {
		color: var(--op-blue-dark);
	}

	@media (max-width: 560px) {
		a {
			grid-template-columns: 5.5rem 1fr;
			gap: var(--op-space-sm);
		}

		.thumb,
		.swatch {
			width: 5.5rem;
			height: 5.5rem;
		}
	}
</style>
