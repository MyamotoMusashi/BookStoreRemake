import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Table } from "react-bootstrap"

import userService from "../../../services/userService"

function UsersPage() {
    let [users, setUsers] = useState()
    let [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        userService.getAllUsersSpring().then(async (users) => {
            setUsers(await users.json())
            setIsLoaded(true)
        })
    }, [])

    if (isLoaded) {
        return <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => {
                    return <tr key={index}>
                        <td>{user.id}</td>
                        <td><Link to={`/users/${user.id}?get=profileInfo`}>{user.username}</Link></td>
                        <td>{user.password}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                    </tr>
                })}
            </tbody>
        </Table>
    }
}


export default UsersPage