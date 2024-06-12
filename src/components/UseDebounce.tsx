import { useState } from 'react'
import { useDebounce } from '../hooks'
import styles from '../css/UseDebounce.module.css'

export function UseDebounce() {
	const [username, setUsername] = useState('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value
		console.log(`¡Nueva petición! | Valor: ${newValue}`)
		setUsername(newValue)
	}

	const handleChangeDebounced = useDebounce(handleChange, 750)

	return (
		<>
			<h2>useDebounce example:</h2>
			<form className={styles.form}>
				<label htmlFor='username'>Buscador</label>
				<input id='username' type='text' onChange={handleChangeDebounced} />
				<p>
					<b>Búsqueda:</b> {username}
				</p>
			</form>
		</>
	)
}
