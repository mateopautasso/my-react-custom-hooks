import { useFetchLoading } from '../hooks/useFetchLoading'
import { useEffect, useState } from 'react'
import styles from '../css/UseFetchJson.module.css'

const getData = async () => fetch('https://retoolapi.dev/CWRZ2H/data')

interface IUser {
	id: number
	image: string
	fullname: string
}

export function UseFetchLoading() {
	const { loading, fetcher } = useFetchLoading(getData)
	const [data, setData] = useState<IUser[] | []>([])

	useEffect(() => {
		fetcher()
			.then((res) => res.json())
			.then((res) => setData(res))
			.catch((err) => console.log(err))
	}, [])

	return (
		<article className={styles.article}>
			<header>
				<h2>useFetch example:</h2>
			</header>

			<section>
				<button onClick={fetcher}>Buscar nuevos resultados</button>

				{loading ? (
					<p>Loading...</p>
				) : data.length > 0 ? (
					<ul>
						{data.map((item) => (
							<li key={item.id}>
								<p>{item.fullname}</p>
								<img src={item.image} alt={item.fullname} />
							</li>
						))}
					</ul>
				) : (
					<p>No se encontraron resultados.</p>
				)}
			</section>
		</article>
	)
}
