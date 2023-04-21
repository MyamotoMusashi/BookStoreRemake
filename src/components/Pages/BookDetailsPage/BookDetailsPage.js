import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

import AddToShoppingCartButton from '../../Buttons/AddToShoppingCartButton/AddToShoppingCartButton'

import bookService from '../../../services/BookService'

import './BookDetailsPage.css'
import SubNavigation from '../../SubNavigation/SubNavigation'
import { ToastContext } from '../../contexts/ToastContextProvider'

function BookDetailsPage() {
    let id = useParams().bookId
    let [book, setBook] = useState()
    let [isLoaded, setIsLoaded] = useState(false)
    let navigate = useNavigate()
    let toastContext = useContext(ToastContext)

    useEffect(() => {
        bookService.getBookByIdSpring(id)
            .then(async data => {
                setBook(await data.json())
                setIsLoaded(true)
            })
    }, [])

    function onDeleteBook(){
        bookService.deleteBook(id)
            .then(async response => {
                if (response.status === 200){
                    toastContext.displayMessage("book successfully deleted")
                    navigate("/admin/books")
                }
                else {
                    toastContext.displayErrorMessage("Bibbidi Bobbidi something went wrong. Please try again")
                }
            })
    }

    if (isLoaded) {
        return <>
            <Col className='book-details-wrapper'>
                <Row data-testid="subnavigation-wrapper">
                    <SubNavigation data={[
                        { text: "Edit Book", type: "link", href: "edit", dataTestId:"edit-book"},
                        { text: "Disable Book", type: "button", dataTestId: "disable-book"},
                        { text: "Delete Book", type: "button", dataTestId: "delete-book", onClick: onDeleteBook}
                    ]} />
                </Row>
                <Row>
                    <div className='col book-details-main-content-header'>
                        <p>{book.title}</p>
                        <p>{book.author}</p>
                    </div>
                </Row>
                <Row>
                    <Col md={3} className="book-details-image-wrapper">
                        <img src={book.coverUrl} alt="" srcSet="" className='book-details-image' />
                        <p className='book-details-price'>Price: $10.96</p>
                        <p>In Stock: 56</p>
                        <AddToShoppingCartButton targetData={book} />
                    </Col>
                    <Col md={6} className="book-details-main-content">
                        <p className='book-details-overview overflow-scroll'>{book.summary}</p>
                    </Col>
                </Row>
            </Col>
        </>
    }
}

export default BookDetailsPage