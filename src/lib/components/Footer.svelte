<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<p class="serif">Studio notes & series — LAVA</p>
	<p class="meta">© {year} LAVA</p>
</footer>

<style>
	.footer {
		width: min(100% - 2.5rem, var(--op-max));
		margin-inline: auto;
		padding-block: var(--op-space-lg);
		border-top: 1px solid var(--op-footer-border);
		background: transparent;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: var(--op-space-sm);
		color: var(--op-text-muted);
		font-size: 0.95rem;
	}

	.meta {
		margin: 0;
		font-size: 0.85rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
	}

	p {
		margin: 0;
	}
</style>
