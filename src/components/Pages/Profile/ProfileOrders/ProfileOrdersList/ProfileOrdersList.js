import ProfileOrderItem from "../ProfileOrderItem/ProfileOrderItem"
import './ProfileOrdersList.css'

function ProfileOrdersList(props) {
    return <ul className="list-group profile-orders-list">
        {props.orders.map(order => {
            return <ProfileOrderItem order={order}/>
        })}
    </ul>
}

export default ProfileOrdersList