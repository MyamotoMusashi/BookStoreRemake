import SubNavigationButton from "../../Buttons/SubNavigationButton/SubNavigationButton"
import BillingInformationForm from "../../Forms/BillingInformationForm/BillingInformationForm"
import ShippingInformationForm from "../../Forms/ShippingInformationForm/ShippingInformationForm"
import UserInformationForm from "../../Forms/UserInformationForm/UserInformationForm"
import OrderOverviewItem from "../../OrderOverviewItem/OrderOverviewItem"
import ProfileOrderItemList from "../Profile/ProfileOrders/ProfileOrderItem/ProfileOrderItemList/ProfileOrderItemList"

import './OrdersDetailsPage.css'

function OrdersDetailsPage() {
    let userInformation = [
        {
            placeholder: "Username",
            size: 4
        },
        {
            placeholder: "First Name",
            size: 4,
        },
        {
            placeholder: "Last Name",
            size: 4,
        },
        {
            placeholder: "Email",
            size: 4,
        },
        {
            placeholder: "Phone Number",
            size: 4
        }
    ]

    return <>
        <div className='row profile-page-navigation'>
            <div className='col-2'><SubNavigationButton to="?status=notProcessed" text="Not Processed"></SubNavigationButton></div>
            <div className='col-2'><SubNavigationButton to="?status=processed" text="Processed"></SubNavigationButton></div>
            <div className='col-2'><SubNavigationButton to="?status=completed" text="Completed"></SubNavigationButton></div>
        </div>
        <div className='row align-items-start'>
            <div className="col-2">
                <div className="row">
                <OrderOverviewItem />
                </div>
                <div className="row">
                    <div className="col order-secondary-information">
                        <p>History</p>
                        <p>Status</p>
                        <p>Note</p>
                    </div>
                </div>
            </div>
            <div className="col-10">
                <UserInformationForm data={userInformation}/>
                <ShippingInformationForm/>
                <BillingInformationForm/>
                <div className="row">
                    <div className="col">
                        <ProfileOrderItemList />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default OrdersDetailsPage