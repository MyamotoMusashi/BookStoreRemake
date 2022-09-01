import BookItem from '../BookItem/BookItem';
import './BookList.css'

function BookList(props) {
    const books = props.data

    return <ul className='row list-group list-group-horizontal book-list'>
        {books.map((book) => {
            return <li className='col-2 list-group-item book-list-item'>
                <BookItem data={book}></BookItem>
            </li>
        })}
    </ul>
}

export default BookList