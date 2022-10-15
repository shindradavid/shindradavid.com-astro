export function clickOutsideNav(node: HTMLElement) {
	const burger = document.getElementById('burger');
	const handleClick = (event: MouseEvent) => {
		if (burger && (event.target as HTMLElement) === burger) return;
		else if (burger && burger.contains(event.target as HTMLElement)) return;
		else if (node && !node.contains(event.target as HTMLElement) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('clickOutsideNav'));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
