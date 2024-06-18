export function formattedLocalStorage() {
	const keys = window.localStorage.length
	const objectInLocal: Record<string, any> = {}

	for (let i = 0; i < keys; i++) {
		const key = window.localStorage.key(i)
		if (!key) continue

		const value = window.localStorage.getItem(key)
		if (!value) continue

		try {
			objectInLocal[key] = JSON.parse(value)
		} catch (e) {
			objectInLocal[key] = value
		}
	}

	return objectInLocal
}
