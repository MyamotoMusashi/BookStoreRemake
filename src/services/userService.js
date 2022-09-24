import server from "../server/server"

function getAllUsers() {
    return server.users.getAllUsers()
}

function getAllUsersSpring() {
    return fetch('http://localhost:8080/users')
}

function getUserByID(id) {
    return server.users.getUserByID(id)
}

function getUserByIDSpring(id) {
    return fetch(`http://localhost:8080/users/${id}`)
}

function authenticateUser(username, password) {
    return server.users.authenticateUser(username, password)
}

function authenticateUserSpring(username, password) {
    return fetch(`http://localhost:8080/auth/user?username=${username}&&password=${password}`)
}

function registerUser(user) {
    return server.users.registerUser(user)
}

function registerUserSpring(user) {
    return fetch(`http://localhost:8080/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
}

function updateUser(user) {
    return server.users.updateUser(user)
}

function updateUserSpring(userId, changedInputs) {
    return fetch(`http://localhost:8080/users/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(changedInputs)
    })

}

const userService = {
    getAllUsers,
    getUserByID,
    getUserByIDSpring,
    authenticateUser,
    authenticateUserSpring,
    registerUser,
    registerUserSpring,
    updateUser,
    updateUserSpring
}

export default userService