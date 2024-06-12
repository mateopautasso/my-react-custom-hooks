import { useFetchJson } from '../hooks/useFetchJson'
const getData = async () => fetch('https://retoolapi.dev/CWRZ2H/data')

interface IUser {
	id: number
	image: string
	fullname: string
}

export function UseFetchJson() {
	const { loading, error, data, fetcher } = useFetchJson<IUser[] | []>(getData)

	return (
		<article>
			<header>
				<h2>useFetch Example:</h2>
			</header>

			<section>
				<button onClick={fetcher}>Buscar nuevos resultados</button>
				{loading ? (
					<p>Loading...</p>
				) : data && data.length > 0 ? (
					<ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
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
