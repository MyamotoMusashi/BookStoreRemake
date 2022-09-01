import ProfileOrderItemList from "./ProfileOrderItemList/ProfileOrderItemList"
import OrderOverviewItem from "../../../../OrderOverviewItem/OrderOverviewItem"
import './ProfileOrderItem.css'

function ProfileOrderItem() {
    return <li className="list-group-item profile-order-item">
        <section className="row">
            <OrderOverviewItem className="col-2 profile-order-item-list-overview" />
            <div className="col-10">
                <ProfileOrderItemList/>
            </div>
        </section>
    </li>
}

export default ProfileOrderItem