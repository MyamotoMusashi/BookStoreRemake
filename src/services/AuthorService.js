function getAuthors() {
    return fetch('http://localhost:8080/books')
}

const authorService = {
    getAuthors
}

export default authorService