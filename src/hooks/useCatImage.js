import { useEffect, useState } from 'react'

export const useCatImage = ({fact}) => {
    const [catImage, setCatImage] = useState('')
    useEffect(() => {
        if (!fact) return
        const firstWord = fact.split(' ', 3).join(' ')
        console.log(firstWord)

        fetch(
            `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
        )
            .then(res => res.json())
            .then(data => {
                console.log(data.tags[0])
                const tags = data.tags[0]
                const url = `https://cataas.com/cat/${
                    !tags ? 'cute' : tags
                }/says/${firstWord}?fontSize=50&fontColor=red`
                setCatImage(url)
            })
    }, [fact])

    return {catImage}
}
