import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import authorService from "../../../../../services/AuthorService"

function AuthorDetails() {
    let id = useParams().id
    let [author, setAuthor] = useState()
    let [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        authorService.getAuthorById(id)
            .then(async (authorResponse) => {
                setAuthor(await authorResponse.json())
                setIsLoaded(true)
            })
    }, [])

    if (isLoaded) {
        return <>
            <p>{author.name}</p>
            <p>{author.description}</p>
            <img src={author.pictureUrl} style={{maxHeight:"400px", maxWidth:"400px"}}/>
        </>
    }
}

export default AuthorDetails