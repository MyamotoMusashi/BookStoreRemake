import './ShoppingCartOffCanvasList.css'

import ShoppingCartOffCanvasItem from "../ShoppingCartOffCanvasItem/ShoppingCartOffCanvasItem"

import { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext.js'


function ShoppingCartOffCanvasList() {
    let shoppingCartContext = useContext(ShoppingCartContext)

    function removeItem(index) {
        shoppingCartContext.removeFromShoppingCart(index)
    }


    if (shoppingCartContext.shoppingCart.length > 0) {
        return <ul className='list-group shopping-cart-list'>
            {shoppingCartContext.shoppingCart.map((shoppingCartItem, index) => {
                return <li className='list-group-item shopping-cart-item-wrapper' key={index}>
                    <ShoppingCartOffCanvasItem data={shoppingCartItem} onRemove={() => removeItem(index)} />
                </li>
            })}
        </ul>
    }
    else {
        return <p id="empty-cart-message">Shopping Cart is empty.</p>
    }
}

export default ShoppingCartOffCanvasList