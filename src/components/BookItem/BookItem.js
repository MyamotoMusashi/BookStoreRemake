import './BookItem.css'
import { Link } from 'react-router-dom';

import cover from './cover.jfif';
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton.js"
import ShoppingCartOffCanvas from '../ShoppingCartOffCanvas/ShoppingCartOffCanvas.js';


function BookItem(props) {
    let book = props.data

    console.log(book)
    return <article className='book-item'>
        <img src={book.coverUrl} alt="" srcSet="" className='book-cover'/>
        <h2 className='book-heading'>{book.title}</h2>
        <h3 className='book-author'>({book.author})</h3>
        <p className='book-overview'>{book.summary.substring(0, 38)}... <span><Link to={"/books/" + book.id} className='read-more-link'>Read more</Link></span></p>
        <p className='book-price'>${book.price}</p>
        <PrimaryButton text="Add to Cart" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"></PrimaryButton>
        <ShoppingCartOffCanvas></ShoppingCartOffCanvas>
    </article>
}

export default BookItem