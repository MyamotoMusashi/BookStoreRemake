import { useEffect, useState } from "react"
import { Row, Table } from "react-bootstrap"
import { Link } from "react-router-dom"

import authorService from "../../../../../services/AuthorService"
import SubNavigation from "../../../../SubNavigation/SubNavigation"

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
            <Row data-testid="subnavigation-wrapper">
                <SubNavigation data={[{ href: "/admin/authors/add", text: "Add Author", type: "link", dataTestId: "add-author"}]} />
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