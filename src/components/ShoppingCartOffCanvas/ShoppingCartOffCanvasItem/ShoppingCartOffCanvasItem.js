import SecondaryButton from '../../Buttons/SecondaryButton/SecondaryButton';
import RemoveButton from '../../Buttons/RemoveButton/RemoveButton';

function ShoppingCartOffCanvasItem(props) {
    let book = props.data

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
                <div className='col-6'><SecondaryButton text='1'>1</SecondaryButton></div>
                <div className='col-6'><RemoveButton text='X'></RemoveButton></div>
            </div>
        </section>
    </section>
}

export default ShoppingCartOffCanvasItem