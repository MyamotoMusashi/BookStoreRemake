/* eslint-disable no-undef */
import './ShoppingCartOffCanvas.css'
import Offcanvas from 'react-bootstrap/Offcanvas'

import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton';
import ShoppingCartOffCanvasList from './ShoppingCartOffCanvasList/ShoppingCartOffCanvasList';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext.js'

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
                <PrimaryButton id='checkout-btn' text="CHECKOUT" onClick={checkout}>
                    <i className="mx-3 fa fa-arrow-right" aria-hidden="true"></i>
                </PrimaryButton>
            </Offcanvas.Body>
        </Offcanvas>
    </>
}

export default ShoppingCartOffCanvas