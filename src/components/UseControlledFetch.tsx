import { useControlledFetch } from '../hooks'
import { useEffect } from 'react'
import styles from '../css/UseFetchJson.module.css'

interface IUser {
	id: number
	image: string
	fullname: string
}

export function UseControlledFetch() {
	const { data, error, loading, controlledFetch } = useControlledFetch<IUser[] | []>()
	const handleClick = () => controlledFetch('https://retoolapi.dev/CWRZ2H/data')

	useEffect(() => {
		handleClick()
	}, [])

	return (
		<article className={styles.article}>
			{JSON.stringify(loading)}
			<header>
				<h2>useFetchJsonController example:</h2>
			</header>

			<section>
				<button onClick={handleClick}>Buscar nuevos resultados</button>

				{loading ? (
					<p>Loading...</p>
				) : data && data.length > 0 ? (
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

				{error && <p>Error</p>}
			</section>
		</article>
	)
}
