import ProfileOrderItem from "../ProfileOrderItem/ProfileOrderItem"
import './ProfileOrdersList.css'

function ProfileOrdersList(props) {
    console.log(props.orders)
    return <ul className="list-group profile-orders-list">
        {props.orders.map(order => {
            return <ProfileOrderItem order={order}/>
        })}
    </ul>
}

export default ProfileOrdersList