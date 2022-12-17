import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import Pagination from '../Pagination/Pagination'
import Sidebar from '../Sidebar/Sidebar';
import SubNavigationButton from '../Buttons/SubNavigationButton/SubNavigationButton.js';
import BookList from '../BookList/BookList';

import bookService from '../../services/BookService';

import './HomePage.css'

function HomePage() {
    let [books, setBooks] = useState([])

    useEffect(() => {
        bookService.getBooksSpring().then(async res => {
            setBooks(await res.json())
        })
    })

    return <>
        <Col className='home-page-main'>
            <Row className='home-page-subnavigation'>
                <div className='col'><SubNavigationButton></SubNavigationButton></div>
                <div className='col'><input type="text" placeholder='Search' /></div>
            </Row>
            <Row>
                <Col md={10} className='book-list-wrapper offset-1'>
                    <BookList data={books} aria-label={"latest articles"}></BookList>
                </Col>
                <Col md={1} className='sidebar-wrapper mt-5'>
                    <Sidebar />
                </Col>
            </Row>
            <Row>
                <Col className='home-page-footer align-self-center'>
                    <Pagination />
                </Col>
            </Row>
        </Col>
    </>
}

export default HomePage