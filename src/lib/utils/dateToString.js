export function dateAndTime(date = new Date()) {
	const now = new Date();
	if (now.getFullYear() === date.getFullYear()) {
		return date.toLocaleTimeString('ko-KR', {
			month: 'numeric',
			day: 'numeric',
			hour: 'numeric',
			minute: '2-digit'
		});
	}

	return date.toLocaleTimeString('ko-KR', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		hour: 'numeric',
		minute: '2-digit'
	});
}

export function shortDate(date = new Date()) {
	return date
		.toLocaleDateString('ko-KR', {
			year: '2-digit',
			month: '2-digit',
			day: '2-digit'
		})
		.replaceAll(' ', '');
}
