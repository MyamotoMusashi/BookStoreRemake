import booksDB from "./db/books"

const server = {
    books: {
        getBooks: booksDB.getBooks,
        getBookById: booksDB.getBookById
    }
}

export default server