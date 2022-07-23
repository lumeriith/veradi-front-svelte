export function dateAndTime(date = new Date()) {
	const now = new Date();
	if (now.getFullYear() === date.getFullYear()) {
		return ` ${date.toLocaleTimeString('ko-KR', {
			month: 'numeric',
			day: 'numeric',
			hour: 'numeric',
			minute: '2-digit'
		})}`;
	}

	return ` ${date.toLocaleTimeString('ko-KR', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		hour: 'numeric',
		minute: '2-digit'
	})}`;
}
