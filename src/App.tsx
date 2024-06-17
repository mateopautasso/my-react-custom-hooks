import { useState } from 'react'
import './App.css'
import { UseDebounce, UseLocalStorage, UseLoadingFetch, UseControlledFetch } from './components'

function App() {
	const [active, setActive] = useState(true)

	const handleClick = () => {
		setActive(!active)
	}

	return (
		<main>
			<h1 style={{ textDecoration: 'underline' }}>Mateo Pautasso - Custom Hooks</h1>
			{active && <UseControlledFetch />}
			<button onClick={handleClick}>{active ? 'Desmontar componente' : 'Montar componente'}</button>
		</main>
	)
}

export default App
