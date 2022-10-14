import { useContext } from 'react'
import Button from '../../Buttons/NavigationButton/NavigationButton'
import './OpenShoppingCartButton.css'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

function OpenShoppingCartButton() {
    const shoppingCartData = useContext(ShoppingCartContext)

    function toggleShow() {
        shoppingCartData.toggleShow()
    }

    return <Button to="#offcanvasTop" onClick={toggleShow}>
        {shoppingCartData.shoppingCart.length > 0
            ? <i id="shopping-cart-with-items" className="fa fa-shopping-cart" aria-hidden="true" value={shoppingCartData.shoppingCart.length}></i>
            : <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        }
    </Button>
}

export default OpenShoppingCartButton