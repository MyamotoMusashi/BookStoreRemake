import './BookItem.css'
import { Link } from 'react-router-dom';
import AddToShoppingCartButton from '../Buttons/AddToShoppingCartButton/AddToShoppingCartButton';

function BookItem(props) {
    let book = props.data

    return <article className='book-item' data-testid="book-item">
        <img src={book.coverUrl} alt="" srcSet="" className='book-cover' />
        <h2 className='book-heading text-truncate text-break'>{book.title}</h2>
        <h3 className='book-author'>({book.author})</h3>
        <p className='book-overview'>{book.summary.substring(0, 37) + '... '}<span><Link to={"/books/" + book.id} className='read-more-link'>Read more</Link></span></p>
        <p className='book-price'>${book.price}</p>
        <AddToShoppingCartButton targetData={book} />
    </article>
}

export default BookItem