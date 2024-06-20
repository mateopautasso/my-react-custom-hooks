import styles from '../css/UseDebounce.module.css'
import { useState } from 'react'
import { useDebounce } from '../hooks'

export function UseDebounce() {
	const [search, setSearch] = useState('')
	const [searchDebounced, setSearchDebounced] = useState('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchDebounced(e.target.value)
	const handleChangeDebounced = useDebounce(handleChange, 750)

	return (
		<section>
			<h2>useDebounce example:</h2>
			<form className={styles.form}>
				<fieldset>
					<h3>Sin useDebounce:</h3>
					<div>
						<label htmlFor='search-field'>Buscador</label>
						<input id='search-field' type='text' onChange={(e) => setSearch(e.target.value)} />
					</div>
					<p>
						<b>Búsqueda:</b> {search}
					</p>
				</fieldset>
				<fieldset>
					<h3>Con useDebounce:</h3>
					<div>
						<label htmlFor='search-debounced-field'>Buscador</label>
						<input id='search-debounced-field' type='text' onChange={handleChangeDebounced} />
					</div>
					<p>
						<b>Búsqueda:</b> {searchDebounced}
					</p>
				</fieldset>
			</form>
		</section>
	)
}
