import './ShoppingCartOffCanvasList.css'

import ShoppingCartOffCanvasItem from "../ShoppingCartOffCanvasItem/ShoppingCartOffCanvasItem"

import { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext.js'


function ShoppingCartOffCanvasList() {
    let shoppingCartContext = useContext(ShoppingCartContext)

    function removeItem(index){
        shoppingCartContext.removeFromShoppingCart(index)
    }


    return <ul className='list-group shopping-cart-list'>
        {shoppingCartContext.shoppingCart.length > 0
            ?
            shoppingCartContext.shoppingCart.map((shoppingCartItem, index) => {
                return <li className='list-group-item shopping-cart-item-wrapper' key={index}>
                    <ShoppingCartOffCanvasItem data={shoppingCartItem} onRemove={() => removeItem(index)} />
                </li>

            })
            :
            <li className='list-group-item shopping-cart-item-wrapper shopping-cart-list-only-child'>
                <p>Shopping Cart is empty.</p>
            </li>
        }
    </ul>
}

export default ShoppingCartOffCanvasList