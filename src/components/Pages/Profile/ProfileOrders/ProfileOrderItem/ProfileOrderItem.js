import { object } from "prop-types"

import { Row, Col } from "react-bootstrap"

import ProfileOrderItemList from "./ProfileOrderItemList/ProfileOrderItemList"
import OrderOverviewItem from "../../../../OrderOverviewItem/OrderOverviewItem"

import './ProfileOrderItem.css'

function ProfileOrderItem(props) {
    return <li className="list-group-item profile-order-item">
        <Row>
            <OrderOverviewItem className="col-2 profile-order-item-list-overview" order={props.order}/>
            <Col md={10}>
                <ProfileOrderItemList order={props.order.itemsOrdered}/>
            </Col>
        </Row>
    </li>
}

ProfileOrderItem.propTypes = {
    order: object
}

export default ProfileOrderItem