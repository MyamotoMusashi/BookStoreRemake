import { useState } from 'react';
import { object, func } from 'prop-types';

import SecondaryButton from '../../Buttons/SecondaryButton/SecondaryButton';
import RemoveButton from '../../Buttons/RemoveButton/RemoveButton';

import './ShoppingCartOffCanvasItem.css'

function ShoppingCartOffCanvasItem(props) {
    let book = props.data.book
    let [itemQuantity, setItemQuantity] = useState(props.data.quantity)

    function removeItem() {
        props.onRemove(book)
    }

    function increaseItemQuantity() {
        setItemQuantity(itemQuantity + 1)
        props.data.quantity = itemQuantity + 1
    }

    function decreaseItemQuantity() {
        if (itemQuantity > 1) {
            setItemQuantity(itemQuantity - 1)
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
                        <div className='col-4'>
                            <SecondaryButton onClick={decreaseItemQuantity}>
                                <i className="fa fa-minus" aria-hidden="true"></i>
                            </SecondaryButton>
                        </div>
                        <div className='col-4'><SecondaryButton text={itemQuantity}></SecondaryButton></div>
                        <div className='col-4'>
                            <SecondaryButton onClick={increaseItemQuantity}>
                                <i className="fa fa-plus" aria-hidden="true"></i>
                            </SecondaryButton>
                        </div>
                    </div>
                </div>
                <div className='col-7'>
                    <RemoveButton onClick={removeItem}>
                        <i className="fa fa-trash-o"></i>
                    </RemoveButton>
                </div>
            </div>
        </section>
    </section>
}

ShoppingCartOffCanvasItem.propTypes = {
    data: object,
    onRemove: func
}

export default ShoppingCartOffCanvasItem