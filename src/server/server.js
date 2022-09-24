import booksDB from "./db/books"
import usersDB from './db/users'

const server = {
    books: {
        getBooks: booksDB.getBooks,
        getBookById: booksDB.getBookById
    },
    users: {
        getAllUsers: usersDB.getAllUsers,
        getUserByID: usersDB.getUserByID,
        registerUser: usersDB.registerUser,
        authenticateUser: usersDB.authenticateUser,
        updateUser: usersDB.updateUser
    }
}

export default server