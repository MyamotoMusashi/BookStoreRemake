import { array } from "prop-types"

import ProfileOrderItem from "../ProfileOrderItem/ProfileOrderItem"

import './ProfileOrdersList.css'

function ProfileOrdersList(props) {
    return <ul className="list-group profile-orders-list">
        {props.orders.map((order, index) => {
            return <ProfileOrderItem order={order} key={index}/>
        })}
    </ul>
}

ProfileOrdersList.propTypes = {
    orders: array
}

export default ProfileOrdersList