import './ShoppingCartOffCanvas.css'

import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton';
import ShoppingCartOffCanvasList from './ShoppingCartOffCanvasList/ShoppingCartOffCanvasList';
import LoginFormModal from '../Forms/LoginForm/LoginFormModal/LoginFormModal';

import { Modal } from 'bootstrap'
import { useNavigate } from 'react-router-dom';

function ShoppingCartOffCanvas(props) {
    let user = sessionStorage.getItem('bookstore-all')
    let navigate = useNavigate()
    
    function checkout() {
        if (user) {
            navigate('/checkout')
        }
        else {
            let loginFormModal = new Modal(document.getElementById('loginFormModal'))   
            loginFormModal.toggle()
        }
    }

    return <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
        <div className="offcanvas-header">

            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            <ShoppingCartOffCanvasList />
            <PrimaryButton id='checkout-btn' text="CHECKOUT" onClick={checkout}></PrimaryButton>
            <LoginFormModal />
        </div>
    </div>
}

export default ShoppingCartOffCanvas