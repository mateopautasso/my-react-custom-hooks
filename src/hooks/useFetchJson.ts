import { useCallback, useEffect, useState } from 'react'

export const useFetchJson = <T>(fetchingFn: () => Promise<Response>, initialCall = true) => {
	//
	const [loading, setLoading] = useState(() => (initialCall ? true : false))
	const [data, setData] = useState<T | null>(null)
	const [error, setError] = useState(false)

	const fetcher = useCallback(async () => {
		setError(false)
		setLoading(true)

		try {
			const request = await fetchingFn()
			if (!request.ok) throw new Error()
			const response = await request.json()
			setData(response)
			//
		} catch (error) {
			setError(true)
			//
		} finally {
			setLoading(false)
			//
		}
	}, [fetchingFn])

	useEffect(() => {
		initialCall && fetchingFn()
	}, [fetchingFn])

	return { loading, error, data, fetcher }
}
