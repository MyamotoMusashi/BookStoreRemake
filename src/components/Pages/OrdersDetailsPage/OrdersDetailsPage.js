import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import orderService from "../../../services/OrderService"
import userService from "../../../services/userService"
import SubNavigationButton from "../../Buttons/SubNavigationButton/SubNavigationButton"
import BillingInformationForm from "../../Forms/BillingInformationForm/BillingInformationForm"
import ShippingInformationForm from "../../Forms/ShippingInformationForm/ShippingInformationForm"
import UserInformationForm from "../../Forms/UserInformationForm/UserInformationForm"
import OrderOverviewItem from "../../OrderOverviewItem/OrderOverviewItem"
import ProfileOrderItemList from "../Profile/ProfileOrders/ProfileOrderItem/ProfileOrderItemList/ProfileOrderItemList"

import './OrdersDetailsPage.css'

function OrdersDetailsPage() {
    let { orderId } = useParams()
    let [order, setOrder] = useState()
    let [user, setUser] = useState()
    let [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        orderService.getOrderByOrderId(orderId)
            .then(async (data) => {
                let orderAsync = await data.json()
                setOrder(orderAsync)
                return orderAsync
            })
            .then((data) => {
                console.log(data)
                userService.getUserByIDSpring(data?.userId)
                    .then(async data => {
                        user = await data.json()
                        setUser(user)
                        setIsLoaded(true)
                    })
            })
    }, [])

    if (isLoaded) {
        return <>
            <div className='row profile-page-navigation'>
                <div className='col-2'><SubNavigationButton to="?status=notProcessed" text="Not Processed"></SubNavigationButton></div>
                <div className='col-2'><SubNavigationButton to="?status=processed" text="Processed"></SubNavigationButton></div>
                <div className='col-2'><SubNavigationButton to="?status=completed" text="Completed"></SubNavigationButton></div>
            </div>
            <div className='row align-items-start'>
                <div className="col-2">
                    <div className="row">
                        <OrderOverviewItem order={order} />
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
                    <UserInformationForm basic defaultValues={user}/>
                    <ShippingInformationForm defaultValues={user.shippingInformation}/>
                    <BillingInformationForm defaultValues={user.billingInformation}/>
                    <div className="row">
                        <div className="col">
                            <ProfileOrderItemList order={order} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}

export default OrdersDetailsPage