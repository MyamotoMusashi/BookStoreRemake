import PropTypes from 'prop-types';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';


import BookItem from '../BookItem/BookItem';

import './BookList.css'

function BookList(props) {
    const books = props.data

    return <ListGroup as={Row} horizontal className='book-list' aria-label={"list of books"}>
        {books.map((book) => {
            return <ListGroupItem as={Col} className='col-2 book-list-item' key={book.title}>
                <BookItem data={book}></BookItem>
            </ListGroupItem>
        })}
    </ListGroup>
}

BookList.propTypes = {
    data: PropTypes.array
}

export default BookList