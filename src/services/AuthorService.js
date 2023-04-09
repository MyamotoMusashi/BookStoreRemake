function getAuthors() {
    return fetch('http://localhost:8080/authors')
}

function getAuthorById(id) {
    return fetch(`http://localhost:8080/authors/${id}`)
}

function addAuthor(author) {
    return fetch(`http://localhost:8080/authors`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(author)
    })
}

const authorService = {
    getAuthors,
    getAuthorById,
    addAuthor
}

export default authorService