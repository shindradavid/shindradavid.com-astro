<script lang="ts">
	// types
	// components
	import Burger from './Burger.svelte';
	// project
	import { clickOutsideNav } from '@lib/actions';
	// props
	export let pathname: string;
	// state
	let open = false;
</script>

<header>
	<nav aria-label="main navigation" use:clickOutsideNav on:clickOutsideNav={() => (open = false)}>
		<a href="/" aria-current={pathname === '/' ? 'page' : false}>Home</a>
		<a href="/portfolio" aria-current={pathname === '/portfolio' ? 'page' : false}>Portfolio</a>
		<a href="/contact" aria-current={pathname === '/contact' ? 'page' : false}>Contact</a>
		<a href="/FAQ" aria-current={pathname === '/FAQ' ? 'page' : false}>FAQ</a>
		<div class="divider" />
		<a href="/blog" aria-current={pathname === '/blog' ? 'page' : false}>Blog</a>
		<a href="/courses" aria-current={pathname === '/courses' ? 'page' : false}>Courses</a>
	</nav>
	<Burger {open} on:click={() => (open = !open)} />
</header>

<style lang="scss"></style>
