import './BookItem.css'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddToShoppingCartButton from '../Buttons/AddToShoppingCartButton/AddToShoppingCartButton';

function BookItem(props) {
    let book = props.data

    return <article className='book-item' data-testid="book-item">
        <img src={book.coverUrl} alt="" srcSet="" className='book-cover' data-testid="book-item-img"/>
        <h2 className='book-heading text-truncate text-break' data-testid="book-item-h2">{book.title}</h2>
        <h3 className='book-author' data-testid="book-item-h3">({book.author})</h3>
        <p className='book-overview' data-testid="book-item-overview">{book.summary.substring(0, 37) + '... '}<span><Link to={"/books/" + book.id} className='read-more-link'>Read more</Link></span></p>
        <p className='book-price' data-testid="book-item-price">${book.price}</p>
        <AddToShoppingCartButton targetData={book} />
    </article>
}

BookItem.propTypes = {
    data: PropTypes.any
}

export default BookItem