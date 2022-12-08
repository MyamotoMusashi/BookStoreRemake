import { useContext } from 'react';
import PropTypes from 'prop-types';

import PrimaryButton from "../PrimaryButton/PrimaryButton.js"
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

import './AddToShoppingCartButton.css'

function AddToShoppingCartButton(props) {
    const shoppingCartData = useContext(ShoppingCartContext)

    function addToShoppingCart() {
        let book = props.targetData

        shoppingCartData.addToShoppingCart(book)
        shoppingCartData.toggleShow()
    }

    return <PrimaryButton text="Add to Cart " onClick={addToShoppingCart}>
    </PrimaryButton>
}

AddToShoppingCartButton.propTypes = {
    targetData: PropTypes.object
}

export default AddToShoppingCartButton