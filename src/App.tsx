import './App.css'
import { UseFetchJson, UseDebounce, UseLocalStorage } from './components'

function App() {
	return (
		<main>
			<h1 style={{ textDecoration: 'underline' }}>Mateo Pautasso - Custom Hooks</h1>
			{/* <UseFetchJson /> */}
			<UseLocalStorage />
		</main>
	)
}

export default App
