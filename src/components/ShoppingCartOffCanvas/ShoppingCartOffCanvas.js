import './ShoppingCartOffCanvas.css'
import Offcanvas from 'react-bootstrap/Offcanvas'

import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton';
import ShoppingCartOffCanvasList from './ShoppingCartOffCanvasList/ShoppingCartOffCanvasList';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext.js'

const options = [
    {
        name: 'Enable backdrop (default)',
        scroll: false,
        backdrop: true,
    },
    {
        name: 'Disable backdrop',
        scroll: false,
        backdrop: false,
    },
    {
        name: 'Enable body scrolling',
        scroll: true,
        backdrop: false,
    },
    {
        name: 'Enable both scrolling & backdrop',
        scroll: true,
        backdrop: true,
    },
];

function ShoppingCartOffCanvas(props) {
    let user = sessionStorage.getItem('bookstore-all')
    let navigate = useNavigate()

    const shoppingCartData = useContext(ShoppingCartContext)
    const userContext = useContext(UserContext)

    function checkout() {
        sessionStorage.setItem('bookstore-cart', JSON.stringify(shoppingCartData.shoppingCart))
        if (user) {
            navigate('/checkout')
            shoppingCartData.toggleShow()
        }
        else {
            userContext.toggleShowLogin()
        }
    }

    return <>
        <Offcanvas id="offcanvasTop" show={shoppingCartData.show} onHide={shoppingCartData.handleClose} placement="end" {...props}>
            <Offcanvas.Header closeButton>
            </Offcanvas.Header>
            <Offcanvas.Body className='offcanvas-body'>
                <ShoppingCartOffCanvasList />
                <PrimaryButton id='checkout-btn' text="CHECKOUT" onClick={checkout}></PrimaryButton>
            </Offcanvas.Body>
        </Offcanvas>
    </>
}

export default ShoppingCartOffCanvas