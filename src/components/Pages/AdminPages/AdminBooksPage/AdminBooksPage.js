import { useEffect, useState } from "react"
import { Table, Row, Col, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

import SubNavigationButton from "../../../Buttons/SubNavigationButton/SubNavigationButton"
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
            <div>
                <Row>
                    <Nav as={Row} variant="pills" bsPrefix="home-page-subnavigation">
                        <Nav.Item as={Col} md={2}>
                            <Nav.Link as={SubNavigationButton} text="Add Book" to="/admin/books/add" eventKey="NotProcessed" bsPrefix="tag-btn"></Nav.Link>
                        </Nav.Item>
                        <Nav.Item as={Col} md={2}>
                            <input type="text" placeholder="Search Books"/>
                            <Nav.Link as={SubNavigationButton} text="Search" to="/orders?status=Completed" eventKey="Completed" bsPrefix="tag-btn"></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Row>
                <Row>
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
                                    <td>{book.authors.map((author) => {
                                        return <span key={author}>{author}</span>
                                    })}
                                    </td>
                                    <td><img src={book.coverUrl} style={{ maxHeight: '60px' }} /></td>
                                    <td>{book.price}</td>
                                    <td>Book Quantity</td>
                                    <td>{book.summary}</td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
                </Row>
            </div>
        </>
    }
}

export default AdminBooks