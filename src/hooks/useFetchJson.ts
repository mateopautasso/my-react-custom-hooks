import { useCallback, useEffect, useState } from 'react'

export const useFetchJson = <T>(fetchingFn: () => Promise<Response>, initialCall = true) => {
	const [loading, setLoading] = useState(initialCall)
	const [data, setData] = useState<T | null>(null)
	const [error, setError] = useState(false)

	const fetcher = useCallback(async () => {
		setError(false)
		setLoading(true)

		try {
			const request = await fetchingFn()
			if (!request.ok) throw new Error()
			const response = await request.json()
			//
			setData(response)
		} catch (error) {
			// Acá se manejaría el error de forma personalizada de ser necesario...
			console.error('Fetching error:', error)
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
