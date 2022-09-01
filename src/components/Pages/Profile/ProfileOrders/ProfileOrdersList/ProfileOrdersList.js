import ProfileOrderItem from "../ProfileOrderItem/ProfileOrderItem"
import './ProfileOrdersList.css'

function ProfileOrdersList() {
    return <ul className="list-group profile-orders-list">
        <ProfileOrderItem/>
        <ProfileOrderItem/>
    </ul>
}

export default ProfileOrdersList