import orderAvatar from '../Pages/Profile/ProfileOrders/ProfileOrderItem/ProfileOrderItemList/order-avatar.png'
import './OrderOverviewItem.css'

function OrderOverviewItem(props) {
    let customClassName = 'order-overview ' + (props.className || '')

    return <div className={customClassName.trim()}>
        <img src={orderAvatar} alt="" width='180px' height='180px' />
        <p>$200</p>
        <p>31-07-2022</p>
        <p>#008 Tandang Sora Street, Saranay, Isabela, Philippines</p>
    </div>
}

export default OrderOverviewItem