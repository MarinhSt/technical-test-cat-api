import { useEffect, useState } from 'react'

const FACT_API_URL = 'https://catfact.ninja/fact'

export const useCatFact = () => {
    const [fact, setFact] = useState('')
    const [newFact, setNewFact] = useState(false)

    useEffect(() => {
        fetch(FACT_API_URL)
            .then(res => res.json())
            .then(({ fact }) => {
                setFact(fact)
            })
    }, [newFact])

    const changeFact = () => {
        setNewFact(!newFact)
    }

    return { fact, changeFact }
}
