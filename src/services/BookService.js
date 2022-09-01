import server from "../server/server"

function getBooksById(id) {
    return server.books.getBookById(id)
}

const bookService = {
    getBooks: server.books.getBooks,
    getBooksById: getBooksById
}

export default bookService