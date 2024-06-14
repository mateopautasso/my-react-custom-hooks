import { useFetchJson } from '../hooks/useFetchJson'
import styles from '../css/UseFetchJson.module.css'

// const getData = async () => {
// 	const request = await fetch('https://retoolapi.dev/CWRZ2H/datas')
// 	if (!request.ok) throw new Error()
// 	const response = await request.json()
// 	return response
// }

const getData = async () => fetch('https://retoolapi.dev/CWRZ2H/data')

interface IUser {
	id: number
	image: string
	fullname: string
}

export function UseFetchJson() {
	const { loading, error, data, fetcher } = useFetchJson<IUser[] | []>(getData, true)

	return (
		<article className={styles.article}>
			<header>
				<h2>useFetch example:</h2>
			</header>

			<section>
				<button onClick={fetcher}>Buscar nuevos resultados</button>

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
					data && data.length === 0 && <p>No se encontraron resultados.</p>
				)}
				{error && <p>Ocurrió un error.</p>}
			</section>
		</article>
	)
}
