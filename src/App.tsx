import { useState } from 'react'
import './App.css'
import { UseFetchJson, UseDebounce, UseLocalStorage } from './components'

function App() {
	const [active, setActive] = useState(true)

	const handleClick = () => {
		setActive(!active)
	}

	return (
		<main>
			<h1 style={{ textDecoration: 'underline' }}>Mateo Pautasso - Custom Hooks</h1>
			{active && <UseFetchJson />}
			{/* <UseLocalStorage /> */}
			<button onClick={handleClick}>{active ? 'Desmontar componente' : 'Montar componente'}</button>
		</main>
	)
}

export default App
