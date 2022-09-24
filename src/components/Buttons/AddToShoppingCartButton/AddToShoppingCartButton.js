import { useContext, useEffect } from 'react';
import { Context } from '../../../App'
import { useNavigate } from 'react-router-dom';
import PrimaryButton from "../PrimaryButton/PrimaryButton.js"
import { Offcanvas } from 'bootstrap'

function AddToShoppingCartButton(props) {
    const shoppingCartData = useContext(Context),
    navigate = useNavigate()

    function addToShoppingCart() {
        let user = 'gogo'
        let book = props.targetData

        if (!user) {
            return navigate('/users/register', { replace: true })
        }

        shoppingCartData.addToShoppingCart(book)
    }

    return <PrimaryButton text="Add to Cart" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" onClick={addToShoppingCart}></PrimaryButton>
}

export default AddToShoppingCartButton