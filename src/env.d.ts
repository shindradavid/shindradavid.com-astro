/// <reference types="astro/client" />

declare namespace svelte.JSX {
	interface HTMLProps<T> {
		onclickOutsideNav?: (e: CustomEvent) => void;
	}
}

interface ArticleFrontmatter {
	title: string;
	description: string;
	readingTime: string;
	publishedOn: string;
	tags: string[];
	draft: boolean;
}

type Article = import('astro').MDXInstance<ArticleFrontmatter>;

interface SeoMetadata {
	title: string;
	description: string;
	socialImageURL?: string;
}
