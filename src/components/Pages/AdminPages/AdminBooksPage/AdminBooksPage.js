import { useEffect, useState } from "react"
import { Table, Row, Col, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

import SubNavigationButton from "../../../Buttons/SubNavigationButton/SubNavigationButton"
import bookService from "../../../../services/BookService"
import SubNavigation from "../../../SubNavigation/SubNavigation"

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
        console.log(books)

        return <>
            <div>
                <Row data-testid="subnavigation-wrapper">
                    <SubNavigation data={[{href: "/admin/books/add", text: "Add Book", type: "link"}]}>
                    <Nav.Item as={Col} md={2} data-testid="subnavigation-search-books-item">
                            <input type="text" placeholder="Search Books" data-testid="subnavigation-search-books-item-input"/>
                            <Nav.Link as={SubNavigationButton} text="Search" to="/orders?status=Completed" eventKey="Completed" bsPrefix="tag-btn" data-testid="subnavigation-search-books-item-link"></Nav.Link>
                        </Nav.Item>
                    </SubNavigation>
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
                                return <tr key={index}>
                                    <td>{book.id}</td>
                                    <td><Link to={`/books/${book.id}`}>{book.title}</Link></td>
                                    <td>{book.authors.map((author) => {
                                        return <p key={author.id}>{author.name}</p>
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