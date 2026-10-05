<script lang="ts">
	import { resolve } from '$app/paths';
	import { artistProfile } from '$lib/data/profile';
</script>

<svelte:head>
	<title>LAVA</title>
</svelte:head>

<section class="hero">
	<p class="eyebrow serif">Artistic portfolio</p>
	<h1>LAVA</h1>
	<p class="lede serif">Colour-led work in series — soft frames, loud images.</p>
	<div class="ctas">
		<a class="art-series" href={resolve('/series')}>Art Series</a>
		<a class="expositions" href={resolve('/expositions')}>Expositions</a>
		<a class="ghost" href={resolve('/newsletter')}>Newsletter</a>
	</div>
	<div class="wash" aria-hidden="true"></div>
</section>

<section class="profile">
	<h2>Artistic profile</h2>
	<p class="serif">{artistProfile}</p>
</section>

<style>
	.hero {
		position: relative;
		min-height: min(72dvh, 38rem);
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		gap: var(--op-space-md);
		padding-block: var(--op-space-xl) var(--op-space-lg);
		animation: fade-up 700ms ease both;
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
		gap: var(--op-space-sm);
		margin-top: var(--op-space-sm);
	}

	.ctas a {
		text-decoration: none;
		padding: 0.85rem 1.25rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		font-size: 0.82rem;
		border: 1px solid var(--op-blue-darker);
		transition:
			background 180ms ease,
			color 180ms ease;
	}

	.art-series {
		background: var(--op-blue-pale);
		color: var(--op-text-on-blue);
	}

	.art-series:hover {
		background: var(--op-text);
		color: var(--op-surface);
	}

	.expositions {
		background: var(--op-blue);
		color: var(--op-text-on-blue);
	}

	.expositions:hover {
		background: var(--op-text);
		color: var(--op-surface);
	}

	.ghost {
		background: transparent;
	}

	.ghost:hover {
		background: var(--op-surface);
		color: var(--op-text);
	}

	.wash {
		position: absolute;
		inset: auto 0 0 auto;
		width: min(52vw, 28rem);
		height: min(42vw, 22rem);
		background:
			radial-gradient(circle at 30% 40%, var(--op-blue) 0%, transparent 55%),
			radial-gradient(circle at 70% 60%, var(--op-blue-light) 0%, transparent 50%),
			radial-gradient(circle at 50% 80%, var(--op-blue-pale) 0%, transparent 45%);
		opacity: 0.55;
		pointer-events: none;
		filter: blur(8px);
		animation: wash-drift 18s ease-in-out infinite;
		background-size: 140% 140%;
		z-index: -1;
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
</style>
