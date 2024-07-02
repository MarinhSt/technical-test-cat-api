import { useEffect, useState } from 'react'
import './App.css'

const FACT_API_URL = 'https://catfact.ninja/fact'
function App() {
    const [fact, setFact] = useState('')
    const [newFact, setNewFact] = useState(false)

    useEffect(() => {
        fetch(FACT_API_URL)
            .then(res => res.json())
            .then(({ fact }) => setFact(fact))
    }, [newFact])

    return (
        <>
            <h1>Cat App</h1>
            {fact && <p>{fact}</p>}
            <button onClick={() => setNewFact(!newFact)}>Get new fact</button>
        </>
    )
}

export default App
