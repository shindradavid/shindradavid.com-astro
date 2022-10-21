<script lang="ts">
	// props
	export let open: boolean;
</script>

<span aria-hidden="true" id="burger" class="burger" class:open on:click>
	<span class="bar" />
	<span class="bar" />
	<span class="bar" />
</span>

<style lang="scss">
	@use 'src/styles/abstracts/mixins' as *;
	@use 'src/styles/abstracts/pallette' as *;
	@use 'src/styles/abstracts/variables' as *;

	.burger {
		box-sizing: content-box;
		$bar-height: 4px;
		width: 25px;
		height: 5 * $bar-height;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border: 1px solid currentColor;
		background-color: inherit;
		color: inherit;
		padding: 4px;

		@include screen-lg {
			display: none;
		}

		& > .bar {
			transition: 0.5s;
			width: 100%;
			height: $bar-height;
			background-color: currentColor;
		}

		&.open > .bar:nth-child(2) {
			opacity: 0;
		}

		&.open > .bar:nth-child(1) {
			transform: translateY(8px) rotate(45deg);
		}

		&.open > .bar:nth-child(3) {
			transform: translateY(-8px) rotate(-45deg);
		}
	}
</style>
