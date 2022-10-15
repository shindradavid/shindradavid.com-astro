<script lang="ts">
	import Burger from './Burger.svelte';

	import { clickOutsideNav } from '@lib/actions';

	export let url: string;

	let open = false;
</script>

<header>
	<nav aria-label="main navigation" use:clickOutsideNav on:clickOutsideNav={() => (open = false)}>
		<a href="/" aria-current={url === '/' ? 'page' : false}>Home</a>
		<a href="/portfolio" aria-current={url === '/portfolio' ? 'page' : false}>Portfolio</a>
		<a href="/contact" aria-current={url === '/contact' ? 'page' : false}>Contact</a>
		<a href="/FAQ" aria-current={url === '/FAQ' ? 'page' : false}>FAQ</a>
		<div class="divider" />
		<a href="/blog" aria-current={url === '/blog' ? 'page' : false}>Blog</a>
		<a href="/courses" aria-current={url === '/courses' ? 'page' : false}>Courses</a>
	</nav>
	<Burger {open} on:click={() => (open = !open)} />
</header>

<style lang="scss"></style>
