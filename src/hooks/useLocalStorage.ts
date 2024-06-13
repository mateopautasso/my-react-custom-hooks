import { useState } from 'react'

function formattedLocalStorage() {
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

export const useLocalStorage = () => {
	const [inLocalStorage, setLocalStorage] = useState(() => (window.localStorage.length ? formattedLocalStorage() : {}))

	const getItem = (key: string) => {
		const item = window.localStorage.getItem(key)
		if (!item) return null
		try {
			return JSON.parse(item)
		} catch (e) {
			return item
		}
	}

	const setItem = (key: string, value: any) => {
		if (typeof value === 'object') {
			const valueToString = JSON.stringify(value)
			window.localStorage.setItem(key, valueToString)
		} else window.localStorage.setItem(key, value)

		setLocalStorage({ ...localStorage, [key]: value })
	}

	const removeItem = (key: string) => {
		const item = window.localStorage.getItem(key)
		if (item) {
			window.localStorage.removeItem(key)
			const currentObject = { ...inLocalStorage }
			delete currentObject[key]
			setLocalStorage(currentObject)
		}
	}

	return { inLocalStorage, getItem, setItem, removeItem }
}
