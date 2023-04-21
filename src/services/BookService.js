function getBookByIdSpring(id) {
    return fetch(`http://localhost:8080/books/${id}`)
}

function getBooksSpring() {
    return fetch('http://localhost:8080/books')
}

function addBook(book) {
    return fetch(`http://localhost:8080/books`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    })
}

function deleteBook(id) {
    return fetch(`http://localhost:8080/books/${id}`, {
        method: 'DELETE'
    })
}

const bookService = {
    getBookByIdSpring,
    getBooksSpring: getBooksSpring,
    addBook,
    deleteBook
}

export default bookService