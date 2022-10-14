import { useContext, useEffect } from 'react';
import PrimaryButton from "../PrimaryButton/PrimaryButton.js"
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext';

function AddToShoppingCartButton(props) {
    const shoppingCartData = useContext(ShoppingCartContext)

    function addToShoppingCart() {
        let book = props.targetData

        shoppingCartData.addToShoppingCart(book)
        shoppingCartData.toggleShow()
    }

    return <PrimaryButton text="Add to Cart" onClick={addToShoppingCart}></PrimaryButton>
}

export default AddToShoppingCartButton