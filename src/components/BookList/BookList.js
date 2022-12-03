import PropTypes from 'prop-types';

import BookItem from '../BookItem/BookItem';
import './BookList.css'

function BookList(props) {
    const books = props.data

    return <ul className='row list-group list-group-horizontal book-list' aria-label={"list of books"}>
        {books.map((book) => {
            return <li className='col-2 list-group-item book-list-item' key={book.title}>
                <BookItem data={book}></BookItem>
            </li>
        })}
    </ul>
}

BookList.propTypes = {
    data: PropTypes.array
}

export default BookList