import server from "../server/server"

function getBooksById(id) {
    return server.books.getBookById(id)
}

function getBookByIdSpring(id) {
    return fetch(`http://localhost:8080/books/${id}`)
}

function getBooksSpring() {
    return fetch('http://localhost:8080/books')
}

const bookService = {
    getBooks: server.books.getBooks,
    getBooksById: getBooksById,
    getBookByIdSpring,
    getBooksSpring: getBooksSpring
}

export default bookService