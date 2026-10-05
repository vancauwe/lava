<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>Thank you — LAVA</title>
</svelte:head>

<section class="page">
	<p class="eyebrow">Newsletter</p>
	<h1>Thank you</h1>
	<p class="serif">You’re on the list — quiet notes from the studio ahead.</p>
	<div class="links">
		<a href={resolve('/series')}>View series</a>
		<a class="ghost" href={resolve('/')}>Home</a>
	</div>
</section>

<style>
	.page {
		display: grid;
		gap: var(--op-space-md);
		max-width: 28rem;
		padding-block: var(--op-space-lg);
		animation: fade-up 650ms ease both;
	}

	.eyebrow {
		margin: 0;
		font-size: 0.78rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--op-text-faint);
	}

	h1 {
		font-size: clamp(2.4rem, 6vw, 3.6rem);
	}

	.serif {
		margin: 0;
		font-size: 1.5rem;
		line-height: 1.35;
		color: var(--op-text-2);
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		gap: var(--op-space-sm);
		margin-top: var(--op-space-sm);
	}

	.links a {
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

	.links a:hover {
		background: var(--op-blue-light);
		color: var(--op-text);
	}

	.links a.ghost {
		background: transparent;
		color: var(--op-text);
	}

	.links a.ghost:hover {
		background: var(--op-surface);
	}
</style>
