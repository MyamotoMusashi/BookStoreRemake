import { useContext } from 'react'
import './OpenShoppingCartButton.css'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

function OpenShoppingCartButton() {
    const shoppingCartData = useContext(ShoppingCartContext)

    function toggleShow() {
        shoppingCartData.toggleShow()
    }

    return <button onClick={toggleShow} className="nav-btn">
        {shoppingCartData.shoppingCart.length > 0
            ? <i id="shopping-cart-with-items" className="fa fa-shopping-cart" aria-hidden="true" value={shoppingCartData.shoppingCart.length}></i>
            : <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        }
    </button>
}

export default OpenShoppingCartButton