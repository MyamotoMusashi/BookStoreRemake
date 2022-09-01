import './ShoppingCartOffCanvasList.css'

import ShoppingCartOffCanvasItem from "../ShoppingCartOffCanvasItem/ShoppingCartOffCanvasItem"

function ShoppingCartOffCanvasList() {
    return <ul className='list-group shopping-cart-list'>
        <li className='list-group-item shopping-cart-item-wrapper'>
            <ShoppingCartOffCanvasItem />
        </li>
        <li className='list-group-item shopping-cart-item-wrapper'>
            <ShoppingCartOffCanvasItem />
        </li>
        <li className='list-group-item shopping-cart-item-wrapper'>
            <ShoppingCartOffCanvasItem />
        </li>
        <li className='list-group-item shopping-cart-item-wrapper'>
            <ShoppingCartOffCanvasItem />
        </li>
        <li className='list-group-item shopping-cart-item-wrapper'>
            <ShoppingCartOffCanvasItem />
        </li>
    </ul>
}

export default ShoppingCartOffCanvasList