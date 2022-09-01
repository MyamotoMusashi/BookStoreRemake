import './BookDetailsPage.css'

import cover from '../../BookItem/cover.jfif'

import PrimaryButton from '../../Buttons/PrimaryButton/PrimaryButton'
import ShoppingCartOffCanvas from '../../ShoppingCartOffCanvas/ShoppingCartOffCanvas'

import bookService from '../../../services/BookService'

import {useParams} from 'react-router-dom'

function BookDetailsPage() {
    let id = useParams().bookId
    let book = bookService.getBooksById(id)

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
                    <PrimaryButton text="Add to Cart" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"/>
                    <ShoppingCartOffCanvas/>
                </div>
            </div>
        </div>
    </>
}

export default BookDetailsPage