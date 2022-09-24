const users = [
    {
        id: 1,
        username: 'gogo',
        password: 'mogo',
        firstName: 'Gogo',
        lastName: 'Mogov',
        email: 'gogo.mogov@email.com',
        phone: '1234567890',
        shippingInformation: {
            address1: 'Lozengrad 1',
            address2: '',
            country: 'Bulgaria',
            city: 'Elhovo',
            zipCode: '8700'
        },
        billingInformation: {
            address1: 'Lozengrad 1',
            address2: '',
            country: 'Bulgaria',
            city: 'Elhovo',
            zipCode: '8700'
        },
        role: 'user'
    },
    {
        id: 2,
        username: 'admin',
        password: 'admin',
        role: 'admin'
    },
    {
        id: 3,
        username: 'pesho',
        password: 'pesho',
        firstName: 'Pesho',
        lastName: 'Peshov',
        email: 'pesho.peshov@email.com',
        phone: '1234567890',
        shippingInformation: {
            address1: 'Lozengrad 1',
            address2: '',
            country: 'Bulgaria',
            city: 'Elhovo',
            zipCode: '8700'
        },
        billingInformation: {
            address1: null,
            address2: null,
            country: null,
            city: null,
            zipCode: null
        },
        role: 'user'
    }
]

function getAllUsers() {
    return users.slice()
}

function getUserByID(id) {
    return users.filter(u => u.id === 1)[0]
}

function authenticateUser(username, password) {
    return users.filter(user => user.username === username && user.password === password)[0]
}

function registerUser(user) {
    user.role = 'user'
    user.id = users.length+1
    users.push(user)
}

function updateUser(user) {
    let userToBeUpdatedIndex = users.findIndex(u => u.id == user.id)
    users[userToBeUpdatedIndex] = user
}


const usersDB = {
    getAllUsers: getAllUsers,
    getUserByID: getUserByID,
    authenticateUser: authenticateUser,
    registerUser: registerUser,
    updateUser: updateUser
}

export default usersDB