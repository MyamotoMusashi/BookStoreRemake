import './BookDetailsPage.css'

import bookService from '../../../services/BookService'

import { useParams } from 'react-router-dom'
import AddToShoppingCartButton from '../../Buttons/AddToShoppingCartButton/AddToShoppingCartButton'
import { useEffect, useState } from 'react'

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
            <div className="col-4 book-details-image-wrapper">
                <img src={book.coverUrl} alt="" srcSet="" className='book-details-image' />
            </div>
            <div className="col-8 book-details-main-content">
                <div className='row'>
                    <div className='col book-details-main-content-header'>
                        <p>{book.title}</p>
                        <p>{book.author}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-8 book-details-overview-wrapper'>
                        <p className='book-details-overview overflow-scroll'>{book.summary}</p>
                    </div>
                    <div className='col-4 book-details-additional-details-wrapper'>
                        <p>Price: $10.96</p>
                        <p>In Stock: 56</p>
                        <AddToShoppingCartButton targetData={book} />
                    </div>
                </div>
            </div>
        </>
    }
}

export default BookDetailsPage