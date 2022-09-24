import './ShoppingCartOffCanvasList.css'

import ShoppingCartOffCanvasItem from "../ShoppingCartOffCanvasItem/ShoppingCartOffCanvasItem"

import { useContext } from 'react'
import { Context } from '../../../App'


function ShoppingCartOffCanvasList(props) {
    let shoppingCartData = useContext(Context).shoppingCart


    return <ul className='list-group shopping-cart-list'>
        {shoppingCartData.length > 0
            ?
            shoppingCartData.map((shoppingCartItem, index) => {
                return <li className='list-group-item shopping-cart-item-wrapper' key={index}>
                    <ShoppingCartOffCanvasItem data={shoppingCartItem} />
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