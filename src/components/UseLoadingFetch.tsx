import { useLoadingFetch } from '../hooks/useLoadingFetch'
import { useEffect, useState } from 'react'
import styles from '../css/UseLoadingFetch.module.css'

interface IUser {
	id: number
	image: string
	fullname: string
}

export function UseLoadingFetch() {
	const [data, setData] = useState<IUser[] | []>([])
	const { loading, fetcher } = useLoadingFetch()

	const handleClick = () => {
		fetcher('https://retoolapi.dev/CWRZ2H/data')
			.then((res) => res.json())
			.then((res) => setData(res))
			.catch((err) => console.log(err))
	}

	useEffect(() => {
		handleClick()
	}, [])

	return (
		<article className={styles.article}>
			<header>
				<h2>useFetch example:</h2>
			</header>

			<section>
				<button onClick={handleClick}>Buscar nuevos resultados</button>

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
