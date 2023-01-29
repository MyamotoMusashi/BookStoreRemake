import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { Link } from "react-router-dom"

import bookService from "../../../../services/BookService"

function AdminBooks() {
    let [books, setBooks] = useState()
    let [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        bookService.getBooksSpring()
            .then(async data => {
                setBooks(await data.json())
                setIsLoaded(true)
            })
    }, [])

    if (isLoaded) {

        return <>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Cover Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => {
                        console.log(book)
                        return <tr key={index}>
                            <td>{book.id}</td>
                            <td><Link to={`/books/${book.id}`}>{book.title}</Link></td>
                            <td>{book.author}</td>
                            <td><img src={book.coverUrl} style={{maxHeight: '60px'}}/></td>
                            <td>{book.price}</td>
                            <td>Book Quantity</td>
                            <td>{book.summary}</td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </>
    }
}

export default AdminBooks