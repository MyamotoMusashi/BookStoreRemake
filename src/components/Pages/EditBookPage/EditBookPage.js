import { useEffect, useState } from "react"
import BookForm from "../../Forms/BookForm/BookForm"
import bookService from "../../../services/BookService"
import { useParams } from "react-router-dom"

function EditBookPage() {
    let id = useParams().bookId
    let [book, setBook] = useState()
    let [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        bookService.getBookByIdSpring(id)
            .then(async (res) => {
                if (res.status == 200) {
                    setBook(await res.json())
                    setIsLoaded(true)
                }
            })
    }, [])

    function onEditFormSubmit(e) {
        console.log(e)
    }

    if (isLoaded) {
        return <BookForm data={book} onSubmit={onEditFormSubmit} actionButton={{text: "Edit"}} />
    }
}

export default EditBookPage