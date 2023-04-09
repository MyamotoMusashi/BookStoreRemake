import { useEffect, useState } from "react"
import { Form, Button, InputGroup } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import authorService from "../../../../services/AuthorService"
import bookService from "../../../../services/BookService"
import { ToastContext } from "../../../contexts/ToastContextProvider"
import { useContext } from "react"

function AddBookPage() {
    let [validated, setValidated] = useState()
    let [allAuthors, setAllAuthors] = useState()
    let [bookAuthors, setBookAuthors] = useState([])
    let [selectAuthorOption, setSelectAuthorOption] = useState()
    let [isLoaded, setIsLoaded] = useState(false)
    let toastContext = useContext(ToastContext)
    let navigate = useNavigate()

    useEffect(() => {
        authorService.getAuthors()
            .then(async data => {
                setAllAuthors(await data.json())
                setIsLoaded(true)
            })
    }, [])

    /*checks the form select option if it's different from "Open this select menu" 
    and adds the author if he not of the list of book's auhtors */
    function onAddAuthor() {
        if (selectAuthorOption != "Open this select menu" && bookAuthors.findIndex((author) => author == selectAuthorOption) == -1) {
            bookAuthors.push(selectAuthorOption)
            setBookAuthors(JSON.parse(JSON.stringify(bookAuthors)))
        }
    }

    function onAddBookFormSubmit(e) {
        e.preventDefault()
        if (e.target.checkValidity() == false) {
            e.stopPropagation();
        }
        else {
            const formData = new FormData(e.target)
            const book = Object.fromEntries(formData.entries());
            book.authors = bookAuthors
            bookService.addBook(book)
                .then(async (res) => {
                    const response = await res
                    if (response.status == 200) {
                        toastContext.displayMessage('book successfully added')
                        console.log(await response.json())
                        navigate('/')
                        console.log("success")
                    }
                    else {
                        console.log("failure")
                    }
                })
        }
        setValidated(true)
    }

    function onSelectAuthorOptionChange(event) {
        setSelectAuthorOption(event.target.value)
    }

    if (isLoaded) {
        return <Form noValidate validated={validated} onSubmit={onAddBookFormSubmit} data-testid="add-book-form">
            <Form.Group className="mb-3" controlId="title" data-testid="form-title">
                <Form.Label data-testid="form-title-label">Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" name="title" required data-testid="form-title-input" />
                <Form.Control.Feedback type="invalid" data-validated={validated} data-testid="form-title-feedback">Please enter title.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="summary" data-testid="form-summary">
                <Form.Label data-testid="form-summary-label">Summary</Form.Label>
                <Form.Control as="textarea" rows={10} placeholder="Enter summary" name="summary" data-testid="form-summary-textarea" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="price" data-testid="form-price">
                <Form.Label data-testid="form-price-label">Price</Form.Label>
                <Form.Control type="text" placeholder="Enter price" name="price" data-testid="form-price-input" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="coverUrl" data-testid="form-cover-url">
                <Form.Label data-testid="form-cover-url-label">CoverUrl</Form.Label>
                <Form.Control type="text" placeholder="Enter url to cover picture" name="coverUrl" data-testid="form-cover-url-input" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="authors" data-testid="form-authors">
                <Form.Label data-testid="form-authors-label">Authors</Form.Label>
                <InputGroup data-testid="form-authors-input-group">
                    <Form.Select onChange={onSelectAuthorOptionChange} data-testid="form-authors-input-group-select">
                        <option value="Open this select menu">Open this select menu</option>
                        {allAuthors.map((author) => {
                            return <option value={author.name} key={author.id}>{author.name}</option>
                        })}
                    </Form.Select>
                    <Button id="add-author-button" onClick={onAddAuthor} data-testid="form-authors-input-group-button">Add</Button>
                </InputGroup>
                <div data-testid="form-authors-list-wrapper">
                    <ul data-testid="form-authors-list">
                        {bookAuthors.map((author, index) => {
                            return <p key={index}>{author}</p>
                        })}
                    </ul>
                </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="quantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="text" placeholder="Enter quantity" name="quantity" />
            </Form.Group>
            <Button variant="primary" type="submit" data-testid="add-book-button">
                Add
            </Button>
        </Form>
    }
}

export default AddBookPage