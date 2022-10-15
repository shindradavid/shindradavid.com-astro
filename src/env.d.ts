/// <reference types="astro/client" />

declare namespace svelte.JSX {
	interface HTMLProps<T> {
		onclickOutsideNav?: (e: CustomEvent) => void;
	}
}
