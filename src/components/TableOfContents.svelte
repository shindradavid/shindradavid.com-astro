<script lang="ts">
	import type { MarkdownHeading } from 'astro';

	import { onMount } from 'svelte';

	export let headings: MarkdownHeading[];

	headings = headings.filter(({ depth }) => depth > 1 && depth <= 3);

	console.log(headings);

	let currentHeading = '';

	onMount(() => {
		const setCurrent: IntersectionObserverCallback = (entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					const { id } = entry.target;
					if (id === '') continue;
					currentHeading = entry.target.id;
					break;
				}
			}
		};

		const observerOptions: IntersectionObserverInit = {
			// Negative top margin accounts for `scroll-margin`.
			// Negative bottom margin means heading needs to be towards top of viewport to trigger intersection.
			rootMargin: '-100px 0% -66%',
			threshold: 1
		};

		const headingsObserver = new IntersectionObserver(setCurrent, observerOptions);

		// Observe all the headings in the main page content.
		document
			.querySelectorAll('article > section > :is(h2,h3)')
			.forEach((h) => headingsObserver.observe(h));

		// Stop observing when the component is unmounted.
		return () => headingsObserver.disconnect();
	});
</script>

{#if headings.length}
	<nav aria-labelledby="toc-heading" class="toc">
		<h2 id="toc-heading">In this article</h2>
		{#each headings as { slug, text, depth }}
			<a
				href="#{slug}"
				class="toc__item depth-{depth}"
				aria-current={currentHeading === slug ? 'true' : 'false'}
			>
				{text}
			</a>
		{/each}
	</nav>
{/if}

<style lang="scss">
	.toc {
		& > .toc__item {
			&[aria-current='true'] {
				background-color: var(--bg-elevated);
			}
		}
	}
</style>
