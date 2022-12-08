import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

import AddToShoppingCartButton from '../../Buttons/AddToShoppingCartButton/AddToShoppingCartButton'

import bookService from '../../../services/BookService'

import './BookDetailsPage.css'

function BookDetailsPage() {
    let id = useParams().bookId
    let [book, setBook] = useState()
    let [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        bookService.getBookByIdSpring(id)
            .then(async data => {
                setBook(await data.json())
                setIsLoaded(true)
            })
    }, [])

    if (isLoaded) {
        return <>
            <Col className='book-details-wrapper'>
                <Row>
                    <div className='col book-details-main-content-header'>
                        <p>{book.title}</p>
                        <p>{book.author}</p>
                    </div>
                </Row>
                <Row>
                    <Col md={3} className="book-details-image-wrapper">
                        <img src={book.coverUrl} alt="" srcSet="" className='book-details-image' />
                    </Col>
                    <Col md={6} className="book-details-main-content">
                        <p className='book-details-overview overflow-scroll'>{book.summary}</p>
                    </Col>
                    <Col md={3} className='book-details-additional-details-wrapper'>
                        <p>Price: $10.96</p>
                        <p>In Stock: 56</p>
                        <AddToShoppingCartButton targetData={book} />
                    </Col>
                </Row>
            </Col>
        </>
    }
}

export default BookDetailsPage