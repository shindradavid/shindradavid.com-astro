import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function remarkReadingTime() {
	// All remark and rehype plugins return a separate function
	return function (tree: any, file: any) {
		const textOnPage = toString(tree);
		const readingTime = getReadingTime(textOnPage);
		file.data.astro.frontmatter.readingTime = readingTime.text;
	};
}
