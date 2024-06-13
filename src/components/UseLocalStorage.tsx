import { useLocalStorage } from '../hooks/useLocalStorage'
import styles from '../css/UseLocalStorage.module.css'

export function UseLocalStorage() {
	const { inLocalStorage, getItem, setItem, removeItem } = useLocalStorage()

	console.log(inLocalStorage)

	return (
		<section className={styles.section}>
			<h2>useLocalStorage example:</h2>
			<div>
				<button onClick={() => console.log(getItem('themes'))}>Obtener item 'themes'</button>
				<button onClick={() => setItem('themes', { first: 'dark', second: 'blue' })}>Setear item 'themes'</button>
				<button onClick={() => removeItem('themes')}>Borrar item 'themes'</button>
			</div>
			<div>
				<button onClick={() => console.log(getItem('number'))}>Obtener item 'number'</button>
				<button onClick={() => setItem('number', 1)}>Setear item 'number'</button>
				<button onClick={() => removeItem('number')}>Borrar item 'number'</button>
			</div>
			<div>
				<button onClick={() => console.log(getItem('language'))}>Obtener item 'language'</button>
				<button onClick={() => setItem('language', 'es')}>Setear item 'language'</button>
				<button onClick={() => removeItem('language')}>Borrar item 'language'</button>
			</div>
			<p>Resultados en consola!</p>
		</section>
	)
}
