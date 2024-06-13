import { useEffect, useRef } from 'react'

export const useDebounce = (fn: (...args: any[]) => void, delay: number) => {
	const timeout = useRef<number | null>(null)

	const debouncedFunction = (...args: any[]) => {
		if (timeout.current) window.clearTimeout(timeout.current)

		timeout.current = setTimeout(() => {
			fn(...args)
			timeout.current = null
		}, delay)
	}

	useEffect(() => {
		return () => {
			if (timeout.current) clearTimeout(timeout.current)
		}
	}, [])

	return debouncedFunction
}
