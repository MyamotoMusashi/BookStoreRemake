import SecondaryButton from '../../Buttons/SecondaryButton/SecondaryButton';
import RemoveButton from '../../Buttons/RemoveButton/RemoveButton';
import { useState } from 'react';

function ShoppingCartOffCanvasItem(props) {
    let book = props.data.book
    let [itemQuantity, setItemQuantity] = useState(props.data.quantity)

    function removeItem() {
        props.onRemove(book)
    }

    function increaseItemQuantity() {
        setItemQuantity(itemQuantity+1)
        props.data.quantity = itemQuantity + 1
    }

    function decreaseItemQuantity() {
        if (itemQuantity > 1) {
            setItemQuantity(itemQuantity-1)
            props.data.quantity = itemQuantity - 1
        }
    }

    return <section className='row .shopping-cart-item'>
        <section className='col'>
            <img className='shopping-cart-item-image' src={book.coverUrl} alt="" srcSet="" />
        </section>
        <section className='col'>
            <section className='row'>
                <section>
                    <h2 className='heading'>{book.title}</h2>
                    <h3 className='author'>({book.author})</h3>
                    <p className='price'>${book.price}</p>
                </section>
            </section>
            <div className='row'>
                <div className='col-5'>
                    <div className="row">
                        <div className='col-4'><SecondaryButton text='-' onClick={decreaseItemQuantity}></SecondaryButton></div>
                        <div className='col-4'><SecondaryButton text={itemQuantity}></SecondaryButton></div>
                        <div className='col-4'><SecondaryButton text='+' onClick={increaseItemQuantity}></SecondaryButton></div>
                    </div>
                </div>
                <div className='col-7'><RemoveButton text='X' onClick={removeItem}></RemoveButton></div>
            </div>
        </section>
    </section>
}

export default ShoppingCartOffCanvasItem