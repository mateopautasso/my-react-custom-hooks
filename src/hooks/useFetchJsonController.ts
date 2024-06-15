import { useRef, useState, useEffect } from 'react'

interface ReturnType<T> {
	data: T | null
	error: boolean
	loading: boolean
	controlledFetch: (url: string, options?: RequestInit) => Promise<void>
}

export const useFetchJsonController = <T>(): ReturnType<T> => {
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState<T | null>(null)
	const [error, setError] = useState(false)

	const controller = useRef<AbortController | null>(null)

	const controlledFetch = async (url: string, options?: RequestInit) => {
		if (controller.current) controller.current.abort()
		const newController = new AbortController()
		controller.current = newController

		setLoading(true)
		setError(false)

		try {
			const request = await fetch(url, { ...options, signal: newController.signal })
			if (!request.ok) throw new Error()
			setData(await request.json())
		} catch (error: any) {
			if (error.name !== 'AbortError') {
				setError(true)
				// Acá se manejaría el error de forma personalizada de ser necesario.
			}
		} finally {
			controller.current === newController && setLoading(false)
		}
	}

	useEffect(() => {
		return () => {
			controller.current && controller.current.abort()
		}
	}, [])

	return { data, error, loading, controlledFetch }
}
