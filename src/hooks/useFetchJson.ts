import { useCallback, useEffect, useState } from 'react'

export const useFetchJson = <T>(fetchingFn: () => Promise<Response>, initialCall = true) => {
	const [loading, setLoading] = useState(initialCall)
	const [data, setData] = useState<T | null>(null)
	const [error, setError] = useState(false)

	const fetcher = useCallback(async () => {
		setError(false)
		setLoading(true)

		try {
			const response = await fetchingFn()
			if (!response.ok) throw new Error()
			setData(await response.json())
		} catch (error) {
			// Acá se manejaría el error de forma personalizada de ser necesario. Ej:
			console.error('Fetching error:', error)
			//
			setError(true)
		} finally {
			setLoading(false)
		}
	}, [fetchingFn])

	useEffect(() => {
		initialCall && fetcher()
	}, [fetcher, initialCall])

	return { loading, error, data, fetcher }
}
