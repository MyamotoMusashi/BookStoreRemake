function getAllUsersSpring() {
    return fetch('http://localhost:8080/users')
}

function getUserByIDSpring(id) {
    return fetch(`http://localhost:8080/users/${id}`)
}

function authenticateUserSpring(username, password) {
    return fetch(`http://localhost:8080/auth/user?username=${username}&&password=${password}`, {
        method: 'GET',
        credentials: 'include'
    })
}

function registerUserSpring(user) {
    return fetch(`http://localhost:8080/users?type=user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
}

function registerGuestSpring(user) {
    
    return fetch(`http://localhost:8080/users?type=guest`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
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
    getAllUsersSpring,
    getUserByIDSpring,
    authenticateUserSpring,
    registerUserSpring,
    registerGuestSpring,
    updateUserSpring
}

export default userService