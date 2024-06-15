import { useCallback, useState } from 'react'

export const useFetchLoading = (fetchingFn: () => Promise<any>) => {
	const [loading, setLoading] = useState(false)

	const fetcher = useCallback(async () => {
		setLoading(true)

		try {
			return await fetchingFn()
		} finally {
			setLoading(false)
		}
	}, [fetchingFn])

	return { loading, fetcher }
}
