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

const bookService = {
    getBookByIdSpring,
    getBooksSpring: getBooksSpring,
    addBook
}

export default bookService