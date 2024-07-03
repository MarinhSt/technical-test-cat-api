import { useEffect, useState } from 'react'
import './App.css'

const FACT_API_URL = 'https://catfact.ninja/fact'
// const CAT_IMAGE_API_URL = `https://cataas.com/cat/says/?fontSize=50&fontColor=red`
function App() {
    const [fact, setFact] = useState('')
    const [catImage, setCatImage] = useState('')
    const [newFact, setNewFact] = useState(false)

    useEffect(() => {
        fetch(FACT_API_URL)
            .then(res => res.json())
            .then(({ fact }) => {
                setFact(fact)
            })
    }, [newFact])

    useEffect(() => {
        if(!fact) return
        const firstWord = fact.split(' ', 3).join(' ')
        console.log(firstWord)

        fetch(
            `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
        )
            .then(res => res.json())
            .then(data => {
                console.log(data.tags[0])
                const tags = data.tags[0]
                const url = `https://cataas.com/cat/${!tags ? 'cute' : tags}/says/${firstWord}?fontSize=50&fontColor=red`
                setCatImage(url)
            })
        }, [fact])
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
            <button onClick={() => setNewFact(!newFact)}>Get new fact</button>
        </>
    )
}

export default App
