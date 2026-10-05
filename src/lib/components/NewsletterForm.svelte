<script lang="ts">
	import { PUBLIC_KIT_FORM_ACTION } from '$env/static/public';

	const configured = Boolean(PUBLIC_KIT_FORM_ACTION);
</script>

{#if configured}
	<form class="form" method="post" action={PUBLIC_KIT_FORM_ACTION}>
		<label>
			<span>Name</span>
			<input
				type="text"
				name="fields[first_name]"
				autocomplete="given-name"
				placeholder="Optional"
			/>
		</label>
		<label>
			<span>Email</span>
			<input
				type="email"
				name="email_address"
				autocomplete="email"
				required
				placeholder="you@example.com"
			/>
		</label>
		<button type="submit">Subscribe</button>
	</form>
{:else}
	<form class="form" aria-describedby="newsletter-hint">
		<label>
			<span>Name</span>
			<input type="text" name="fields[first_name]" disabled placeholder="Optional" />
		</label>
		<label>
			<span>Email</span>
			<input type="email" name="email_address" disabled required placeholder="you@example.com" />
		</label>
		<button type="submit" disabled>Subscribe</button>
		<p id="newsletter-hint" class="hint serif">
			Connect Kit via <code class="mono">PUBLIC_KIT_FORM_ACTION</code> (form embed
			<code class="mono">action</code> URL). In Kit, set the post-subscribe redirect to
			<code class="mono">/newsletter/thanks/</code> and disable double opt-in.
		</p>
	</form>
{/if}

<style>
	.form {
		display: grid;
		gap: var(--op-space-md);
		max-width: 28rem;
	}

	label {
		display: grid;
		gap: var(--op-space-xs);
		font-size: 0.85rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--op-text-muted);
	}

	input {
		appearance: none;
		border: 1px solid var(--op-border);
		background: var(--op-surface);
		color: var(--op-text);
		padding: 0.85rem 1rem;
		border-radius: var(--op-radius);
	}

	input:focus {
		outline: 2px solid var(--op-blue);
		outline-offset: 2px;
	}

	input:disabled {
		opacity: 0.65;
		cursor: not-allowed;
	}

	button {
		justify-self: start;
		border: 1px solid var(--op-blue-darker);
		background: var(--op-blue);
		color: var(--op-text-on-blue);
		padding: 0.85rem 1.4rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		font-size: 0.85rem;
		cursor: pointer;
		transition:
			background 180ms ease,
			transform 180ms ease;
	}

	button:hover:not(:disabled) {
		background: var(--op-blue-light);
	}

	button:disabled {
		opacity: 0.65;
		cursor: not-allowed;
	}

	.hint {
		margin: 0;
		color: var(--op-text-muted);
		font-size: 1.15rem;
		line-height: 1.4;
	}

	code {
		font-size: 0.8em;
	}
</style>
