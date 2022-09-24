import ProfileOrderItemListItem from "../ProfileOrderItemListItem/ProfileOrderItemListItem";

import './ProfileOrderItemList.css'

function ProfileOrderItemList(props) {
    return <ul className="list-group list-group-horizontal">
        {props.order.booksOrdered.map(book => {
            return <ProfileOrderItemListItem book={book}/>
        }) }
    </ul>
}

export default ProfileOrderItemList