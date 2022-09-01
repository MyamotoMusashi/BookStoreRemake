import ProfileOrderItemListItem from "../ProfileOrderItemListItem/ProfileOrderItemListItem";
import orderAvatar from './order-avatar.png'

import './ProfileOrderItemList.css'

function ProfileOrderItemList() {
    return <ul className="list-group list-group-horizontal">
        <ProfileOrderItemListItem />
        <ProfileOrderItemListItem />
        <ProfileOrderItemListItem />
        <ProfileOrderItemListItem />
        <ProfileOrderItemListItem />
        <ProfileOrderItemListItem />
        <ProfileOrderItemListItem />
    </ul>
}

export default ProfileOrderItemList