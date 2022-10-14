import orderAvatar from '../Pages/Profile/ProfileOrders/ProfileOrderItem/ProfileOrderItemList/order-avatar.png'
import './OrderOverviewItem.css'

function OrderOverviewItem(props) {
    let customClassName = 'order-overview ' + (props.className || '')

    return <div className={customClassName.trim()}>
        <img src={orderAvatar} alt="" width='180px' height='180px' />
        <p>${props.order.totalPrice}</p>
        <p>{props.order.dateCreated}</p>
        <p>{props.order.shippingInformation?.address1}, {props.order.shippingInformation?.city}, {props.order.shippingInformation?.country} {props.order.shippingInformation?.zipCode}</p>
    </div>
}

export default OrderOverviewItem