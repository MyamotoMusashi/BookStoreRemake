function getAuthors() {
    return fetch('http://localhost:8080/authors', {
        method: 'GET',
        credentials: "include"
    })
}

function getAuthorById(id) {
    return fetch(`http://localhost:8080/authors/${id}`, {
        method: 'GET',
        credentials: 'include'
    })
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