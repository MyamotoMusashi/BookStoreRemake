import Button from '../../Buttons/NavigationButton/NavigationButton'
import './OpenShoppingCartButton.css'

function OpenShoppingCartButton() {
    return <Button to="#offcanvasTop" data-bs-toggle="offcanvas" aria-controls="offcanvasTop">
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
    </Button>
}

export default OpenShoppingCartButton