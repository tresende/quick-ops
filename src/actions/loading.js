export function removeLoadingItem(id) {
	return {
		type: 'END_LOADING',
		payload: id,
	};
}

export function addLoadingItem(id) {
	return {
		type: 'START_LOADING',
		payload: id,
	};
}
