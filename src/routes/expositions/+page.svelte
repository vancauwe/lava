<script lang="ts">
	import { resolve } from '$app/paths';
	import { expositionAccentVar, expositionsList } from '$lib/data/expositions';
</script>

<svelte:head>
	<title>Expositions — LAVA</title>
</svelte:head>

<section class="page">
	<header class="intro">
		<h1>Expositions</h1>
		<p class="serif">Shows where the series have been — or will be — seen in public.</p>
	</header>

	<ul class="list">
		{#each expositionsList as item, i (item.slug)}
			<li style={`--accent: ${expositionAccentVar[item.accent]}; --delay: ${i * 80}ms`}>
				<a href={resolve('/expositions/[slug]', { slug: item.slug })}>
					{#if item.image}
						<img class="thumb" src={item.image.src} alt={item.image.alt} />
					{:else}
						<span class="swatch" aria-hidden="true"></span>
					{/if}
					<span class="meta">
						<span class="year">{item.dates}</span>
						<span class="title">{item.title}</span>
						<span class="venue">{item.venue} — {item.place}</span>
						<span class="blurb serif">{item.blurb}</span>
					</span>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	.page {
		animation: fade-up 650ms ease both;
	}

	.intro {
		display: grid;
		gap: var(--op-space-sm);
		margin-bottom: var(--op-space-xl);
	}

	.intro h1 {
		font-size: clamp(2.4rem, 6vw, 3.6rem);
	}

	.intro p {
		margin: 0;
		max-width: 28rem;
		font-size: 1.4rem;
		color: var(--op-text-2);
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

	.year {
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

	.venue {
		font-size: 0.9rem;
		letter-spacing: 0.04em;
		color: var(--op-text-muted);
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
