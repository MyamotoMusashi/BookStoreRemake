import ProfileOrderItemList from "./ProfileOrderItemList/ProfileOrderItemList"
import OrderOverviewItem from "../../../../OrderOverviewItem/OrderOverviewItem"
import './ProfileOrderItem.css'

function ProfileOrderItem(props) {
    return <li className="list-group-item profile-order-item">
        <section className="row">
            <OrderOverviewItem className="col-2 profile-order-item-list-overview" order={props.order}/>
            <div className="col-10">
                <ProfileOrderItemList order={props.order}/>
            </div>
        </section>
    </li>
}

export default ProfileOrderItem