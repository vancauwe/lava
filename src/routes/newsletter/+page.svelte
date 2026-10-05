<script lang="ts">
	import NewsletterForm from '$lib/components/NewsletterForm.svelte';
</script>

<svelte:head>
	<title>Newsletter — LAVA</title>
</svelte:head>

<section class="page">
	<header>
		<h1>Newsletter</h1>
		<p class="serif">
			Sign up to hear when a new series is completed or a new exposition opens.
		</p>
	</header>
	<NewsletterForm />
</section>

<style>
	.page {
		display: grid;
		gap: var(--op-space-xl);
		max-width: 36rem;
		animation: fade-up 650ms ease both;
	}

	header {
		display: grid;
		gap: var(--op-space-sm);
	}

	h1 {
		font-size: clamp(2.4rem, 6vw, 3.6rem);
	}

	p {
		margin: 0;
		font-size: 1.5rem;
		line-height: 1.35;
		color: var(--op-text-2);
	}
</style>
