<script lang="ts">
	import { resolve } from '$app/paths';
	import { landingMosaic } from '$lib/data/landing';
	import { artistProfileSegments } from '$lib/data/profile';
</script>

<svelte:head>
	<title>LAVA</title>
</svelte:head>

<section class="hero">
	<div class="copy">
		<p class="eyebrow serif">Artistic portfolio</p>
		<h1>LAVA</h1>
		<p class="lede serif">Soft colors, loud images.</p>
		<div class="ctas">
			<p class="stay">Stay up to date with us</p>
			<a class="newsletter" href={resolve('/newsletter')}>Newsletter</a>
		</div>
	</div>

	<ul class="mosaic" aria-label="Series extracts">
		{#each landingMosaic as tile, i (tile.slug)}
			<li class="tile tile-{i + 1}" style={`--delay: ${120 + i * 90}ms`}>
				<a href={resolve('/series/[slug]', { slug: tile.slug })}>
					<img src={tile.src} alt={tile.alt} />
				</a>
			</li>
		{/each}
	</ul>
</section>

<section class="profile">
	<h2>About the Artist</h2>
	<p class="serif">
		{#each artistProfileSegments as part, i (i)}
			{#if part.accent}
				<strong class="accent">{part.text}</strong>
			{:else}
				{part.text}
			{/if}
		{/each}
	</p>
</section>

<style>
	.hero {
		position: relative;
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(12rem, 46%);
		gap: var(--op-space-lg);
		align-items: end;
		min-height: min(72dvh, 38rem);
		padding-block: var(--op-space-xl) var(--op-space-lg);
		animation: fade-up 700ms ease both;
	}

	.copy {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		gap: var(--op-space-md);
		z-index: 1;
		min-width: 0;
	}

	.eyebrow {
		margin: 0;
		font-size: 1.35rem;
		color: var(--op-text-muted);
	}

	h1 {
		font-size: clamp(4.5rem, 18vw, 9.5rem);
		font-weight: 600;
		letter-spacing: 0.12em;
		line-height: 0.9;
		text-transform: uppercase;
	}

	.lede {
		margin: 0;
		max-width: 22rem;
		font-size: clamp(1.35rem, 2.8vw, 1.75rem);
		line-height: 1.35;
		color: var(--op-text-2);
	}

	.ctas {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--op-space-md);
		margin-top: var(--op-space-sm);
	}

	.stay {
		margin: 0;
		font-size: 1.05rem;
		color: var(--op-text);
	}

	.newsletter {
		text-decoration: none;
		padding: 0.85rem 1.25rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		font-size: 0.82rem;
		border: 1px solid var(--op-blue-darker);
		background: var(--op-blue);
		color: var(--op-text-on-blue);
		transition:
			background 180ms ease,
			color 180ms ease;
	}

	.newsletter:hover {
		background: var(--op-text);
		color: var(--op-surface);
	}

	.mosaic {
		list-style: none;
		margin: 0;
		padding: 0;
		position: relative;
		height: min(56dvh, 30rem);
		min-height: 18rem;
	}

	.tile {
		position: absolute;
		margin: 0;
		animation: fade-up 800ms ease both;
		animation-delay: var(--delay);
	}

	.tile a {
		display: block;
		text-decoration: none;
		transition: transform 280ms ease;
	}

	.tile a:hover {
		transform: scale(1.04);
	}

	.tile img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		border: 0.18rem solid var(--op-frame);
		background: var(--op-frame);
		box-sizing: border-box;
	}

	/* Asymmetrical scatter — varied sizes + slight rotation */
	.tile-1 {
		top: 6%;
		left: 2%;
		width: 7.25rem;
		height: 7.25rem;
		transform: rotate(-5deg);
		z-index: 2;
	}

	.tile-2 {
		top: 0;
		right: 4%;
		width: 5.5rem;
		height: 5.5rem;
		transform: rotate(4deg);
		z-index: 3;
	}

	.tile-3 {
		top: 34%;
		left: 34%;
		width: 9.5rem;
		height: 9.5rem;
		transform: rotate(-2deg);
		z-index: 4;
	}

	.tile-4 {
		bottom: 14%;
		left: 0;
		width: 6.25rem;
		height: 6.25rem;
		transform: rotate(6deg);
		z-index: 1;
	}

	.tile-5 {
		bottom: 2%;
		right: 2%;
		width: 8rem;
		height: 8rem;
		transform: rotate(-7deg);
		z-index: 3;
	}

	.profile {
		display: grid;
		gap: var(--op-space-md);
		max-width: 38rem;
		padding-block: var(--op-space-xl) var(--op-space-lg);
		border-top: 1px solid var(--op-border-subtle);
		animation: fade-up 800ms ease both;
	}

	.profile h2 {
		font-size: 0.78rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--op-text-faint);
	}

	.profile p {
		margin: 0;
		font-size: 1.35rem;
		line-height: 1.45;
		color: var(--op-text-2);
	}

	.accent {
		font-weight: 600;
		color: var(--op-blue);
	}

	@media (max-width: 800px) {
		.hero {
			grid-template-columns: 1fr;
			align-items: start;
			gap: var(--op-space-md);
			min-height: 0;
		}

		.mosaic {
			order: -1;
			height: 13.5rem;
			min-height: 13.5rem;
			max-width: 22rem;
			margin-inline: auto;
		}

		.tile-1 {
			top: 8%;
			left: 4%;
			width: 4.5rem;
			height: 4.5rem;
		}

		.tile-2 {
			top: 0;
			right: 10%;
			width: 3.75rem;
			height: 3.75rem;
		}

		.tile-3 {
			top: 28%;
			left: 36%;
			width: 5.75rem;
			height: 5.75rem;
		}

		.tile-4 {
			bottom: 10%;
			left: 8%;
			width: 4rem;
			height: 4rem;
		}

		.tile-5 {
			bottom: 4%;
			right: 6%;
			width: 5rem;
			height: 5rem;
		}
	}
</style>
