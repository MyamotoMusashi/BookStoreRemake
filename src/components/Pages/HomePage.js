import './HomePage.css'

import Pagination from '../Pagination/Pagination'
import Sidebar from '../Sidebar/Sidebar';
import SubNavigationButton from '../Buttons/SubNavigationButton/SubNavigationButton.js';
import BookList from '../BookList/BookList';

import bookService from '../../services/BookService';

function HomePage() {
    let books = bookService.getBooks()

    return <>
        <div className='col-11 .home-page-main'>
            <div className='row'>
                <div className='col'><SubNavigationButton></SubNavigationButton></div>
                <div className='col'><input type="text" placeholder='Search' /></div>
            </div>
            <div className='row'>
                <div className='col book-list-wrapper'>
                    <BookList data={books}></BookList>
                </div>
            </div>
            <div className='row'>
                <div className='col align-self-center'>
                    <Pagination />
                </div>
            </div>
        </div>
        <div className='col-1 sidebar-wrapper'>
            <Sidebar />
        </div>
    </>
}

export default HomePage