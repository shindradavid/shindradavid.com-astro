<script lang="ts">
	import { onMount } from 'svelte';
	import { formatToLocalTime } from '@lib/datetime';

	let localTime = new Date().toISOString();

	onMount(() => {
		const interval = setInterval(() => {
			localTime = new Date().toISOString();
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	});
</script>

<p>My local time {formatToLocalTime(localTime)}</p>

<style lang="scss">
	p {
		font: inherit;
	}
</style>
