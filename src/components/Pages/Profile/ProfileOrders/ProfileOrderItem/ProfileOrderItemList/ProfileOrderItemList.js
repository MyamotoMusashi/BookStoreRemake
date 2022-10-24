import { Carousel } from "react-bootstrap";

import ProfileOrderItemListItem from "../ProfileOrderItemListItem/ProfileOrderItemListItem";

import './ProfileOrderItemList.css'

function ProfileOrderItemList(props) {
    console.log(props)
    
    return <Carousel variant="dark" className="list-group list-group-horizontal d-block w-100 profile-order-item-list">
        {props.order.map(book => {
            return <Carousel.Item>
                <ProfileOrderItemListItem book={book}/>
            </Carousel.Item>
        })}
    </Carousel>
}

export default ProfileOrderItemList