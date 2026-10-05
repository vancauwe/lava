<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	const links = [
		{ href: '/', label: 'Home', match: (id: string | null) => id === '/' },
		{
			href: '/series',
			label: 'Series',
			match: (id: string | null) => id === '/series' || id === '/series/[slug]'
		},
		{
			href: '/expositions',
			label: 'Expositions',
			match: (id: string | null) => id === '/expositions' || id === '/expositions/[slug]'
		},
		{
			href: '/newsletter',
			label: 'Newsletter',
			match: (id: string | null) => id === '/newsletter' || id === '/newsletter/thanks'
		}
	] as const;
</script>

<header class="header">
	<a class="brand" href={resolve('/')}>LAVA</a>
	<nav aria-label="Primary">
		{#each links as link (link.href)}
			<a href={resolve(link.href)} aria-current={link.match(page.route.id) ? 'page' : undefined}>
				{link.label}
			</a>
		{/each}
	</nav>
</header>

<style>
	.header {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: var(--op-space-md);
		width: min(100% - 2.5rem, var(--op-max));
		margin-inline: auto;
		padding-block: var(--op-space-md);
		border-bottom: 1px solid var(--op-border-subtle);
	}

	.brand {
		font-family: var(--op-font-heading);
		font-size: clamp(1.35rem, 2.4vw, 1.7rem);
		font-weight: 600;
		letter-spacing: 0.18em;
		text-decoration: none;
		text-transform: uppercase;
	}

	.brand:hover {
		color: var(--op-text);
	}

	nav {
		display: flex;
		flex-wrap: wrap;
		gap: var(--op-space-md);
	}

	nav a {
		font-size: 0.92rem;
		letter-spacing: 0.04em;
		text-decoration: none;
		color: var(--op-text-muted);
		position: relative;
	}

	nav a::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -0.15em;
		width: 0;
		height: 1px;
		background: var(--op-blue-mid);
		transition: width 220ms ease;
	}

	nav a:hover,
	nav a[aria-current='page'] {
		color: var(--op-text);
	}

	nav a:hover::after,
	nav a[aria-current='page']::after {
		width: 100%;
	}
</style>
