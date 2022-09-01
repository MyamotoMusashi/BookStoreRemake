import './ShoppingCartOffCanvas.css'

import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton';
import ShoppingCartOffCanvasList from './ShoppingCartOffCanvasList/ShoppingCartOffCanvasList';
import LoginFormModal from '../Forms/LoginForm/LoginFormModal/LoginFormModal';

function ShoppingCart() {
    return <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
        <div className="offcanvas-header">
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            <ShoppingCartOffCanvasList />
            <PrimaryButton id='checkout-btn' text="CHECKOUT" data-bs-toggle="modal" data-bs-target="#loginFormModal"></PrimaryButton>
            <LoginFormModal/>
        </div>
    </div>
}

export default ShoppingCart