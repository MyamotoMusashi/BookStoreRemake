import { useEffect, useState } from "react"
import { Row, Nav, Col, Table } from "react-bootstrap"
import { Link } from "react-router-dom"

import SubNavigationButton from "../../../../Buttons/SubNavigationButton/SubNavigationButton"

import authorService from "../../../../../services/AuthorService"

function AdminAuthorsPage() {
    let [authors, setAuthors] = useState([])
    let [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        authorService.getAuthors()
            .then(async (res) => {
                setAuthors(await res.json())
                setIsLoaded(true)
            })
    }, [])

    if (isLoaded) {
        return <div>
            <Row>
                <Nav as={Row} variant="pills" bsPrefix="home-page-subnavigation">
                    <Nav.Item as={Col} md={2}>
                        <Nav.Link as={SubNavigationButton} text="Add Author" to="/admin/authors/add" bsPrefix="tag-btn"></Nav.Link>
                    </Nav.Item>
                </Nav>
            </Row>
            <Row>
                {authors.length > 0
                    ? <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                               <th>Id</th>
                               <th>Name</th>
                               <th>Description</th>
                               <th>Picture</th>
                            </tr>
                        </thead>
                        <tbody>
                            {authors.map((author) => {
                                return <tr key={author.id}>
                                    <td>{author.id}</td>
                                    <td><Link to={`/authors/${author.id}`}>{author.name}</Link></td>
                                    <td>{author.description}</td>
                                    <td><img src={author.pictureUrl} style={{ maxHeight: '60px', minWidth: '60px' }} /></td>

                                </tr>
                            })}
                        </tbody>
                    </Table>
                    : <p>There are currently no authors</p>
                }
            </Row>
        </div>
    }
}

export default AdminAuthorsPage