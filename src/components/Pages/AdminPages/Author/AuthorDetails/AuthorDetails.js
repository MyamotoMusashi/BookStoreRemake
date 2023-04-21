import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import authorService from "../../../../../services/AuthorService"
import SubNavigation from "../../../../SubNavigation/SubNavigation"

function AuthorDetails() {
    let id = useParams().id
    let edit = useParams().edit
    let [author, setAuthor] = useState()
    let [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        authorService.getAuthorById(id)
            .then(async (authorResponse) => {
                setAuthor(await authorResponse.json())
                setIsLoaded(true)
            })
    }, [])

    console.log(edit)

    function onEditAuthor(e){
        console.log(e)
        console.log("here")
    }

    if (isLoaded) {
        return <>
            <SubNavigation data={
                [
                    { href: `/authors/${author.id}/edit`, text: "Edit Author", type:"link", onClick:onEditAuthor },
                    { href: `/authors/${author.id}/disable`, text: "Disable Author", type: "button" },
                    { href: `/authors/${author.id}/delete`, text: "Delete Author", type: "button" }
                ]
            } />
            <p>{author.name}</p>
            <p>{author.description}</p>
            <img src={author.pictureUrl} style={{ maxHeight: "400px", maxWidth: "400px" }} />
        </>
    }
}

export default AuthorDetails