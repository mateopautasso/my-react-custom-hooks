import { useState } from 'react'

export const useLoadingFetch = () => {
	const [loading, setLoading] = useState(false)

	const fetcher = async (url: string, options?: RequestInit) => {
		setLoading(true)

		try {
			return await fetch(url, options)
		} finally {
			setLoading(false)
		}
	}

	return { loading, fetcher }
}
