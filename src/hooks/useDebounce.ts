import { useRef } from 'react'

export const useDebounce = (fn: (...args: any[]) => void, delay: number) => {
	const timeout = useRef<number | null>(null)

	return (...args: any[]) => {
		if (timeout.current) window.clearTimeout(timeout.current)

		timeout.current = setTimeout(() => {
			fn(...args)
			timeout.current = null
		}, delay)
	}
}
