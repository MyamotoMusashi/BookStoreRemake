import SecondaryButton from '../../Buttons/SecondaryButton/SecondaryButton';
import RemoveButton from '../../Buttons/RemoveButton/RemoveButton';
import cover from '../../BookItem/cover.jfif';

function ShoppingCartOffCanvasItem() {
    return <section className='row .shopping-cart-item'>
        <section className='col'>
            <img className='shopping-cart-item-image' src={cover} alt="" srcSet="" />
        </section>
        <section className='col'>
            <section className='row'>
                <section>
                    <h2 className='heading'>A Game of Thrones</h2>
                    <h3 className='author'>(George R. R Martin)</h3>
                    <p className='price'>$10.96</p>
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