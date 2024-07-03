import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

function App() {
    const { fact, changeFact } = useCatFact()
    const { catImage } = useCatImage({ fact })

    return (
        <>
            <h1>Cat App</h1>
            {fact && <p>{fact}</p>}
            {catImage && (
                <img
                    style={{ width: '300px' }}
                    src={catImage}
                    alt="a cat image recovered from the API with the firsts three words"
                />
            )}
            <button onClick={() => changeFact()}>Get new fact</button>
        </>
    )
}

export default App
