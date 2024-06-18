import { useState } from 'react'
import { formattedLocalStorage } from '../utils'

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

		setLocalStorage((prevState) => ({ ...prevState, [key]: value }))
	}

	const removeItem = (key: string) => {
		const item = window.localStorage.getItem(key)
		if (item) {
			window.localStorage.removeItem(key)
			setLocalStorage((prevState) => {
				const newState = { ...prevState }
				delete newState[key]
				return newState
			})
		}
	}

	return { inLocalStorage, getItem, setItem, removeItem }
}
