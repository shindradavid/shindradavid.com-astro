export const formatDate = (date: string): string => {
	let options: Intl.DateTimeFormatOptions = {
		weekday: 'short',
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	};
	return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
};

export const formatToLocalTime = (date: string) => {
	let options: Intl.DateTimeFormatOptions = {
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		timeZone: 'EAT',
		timeZoneName: 'short'
	};
	return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
};

export const formatToUTCDateTime = (date: string): string => {
	let options: Intl.DateTimeFormatOptions = {
		hour: 'numeric',
		minute: 'numeric',
		weekday: 'short',
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		timeZone: 'UTC',
		timeZoneName: 'short'
	};
	return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
};
