import { Carousel } from "react-bootstrap";
import { array } from "prop-types";

import ProfileOrderItemListItem from "../ProfileOrderItemListItem/ProfileOrderItemListItem";

import './ProfileOrderItemList.css'

function ProfileOrderItemList(props) {
    console.log(props)
    
    return <Carousel variant="dark" className="list-group list-group-horizontal d-block w-100 profile-order-item-list">
        {props.order.map((book, index) => {
            return <Carousel.Item key={index}>
                <ProfileOrderItemListItem book={book}/>
            </Carousel.Item>
        })}
    </Carousel>
}

ProfileOrderItemList.propTypes = {
    order: array
}

export default ProfileOrderItemList