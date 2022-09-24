import { useContext } from "react"
import { Context } from "../../../App"
import ProfileOrderItemList from "../Profile/ProfileOrders/ProfileOrderItem/ProfileOrderItemList/ProfileOrderItemList"
import UserInformationForm from "../../Forms/UserInformationForm/UserInformationForm"
import ShippingInformationForm from "../../Forms/ShippingInformationForm/ShippingInformationForm"
import BillingInformationForm from "../../Forms/BillingInformationForm/BillingInformationForm"
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton"
import orderService from "../../../services/OrderService"
import { useLayoutEffect } from "react"

function CheckoutPage() {
    let user = JSON.parse(sessionStorage.getItem('bookstore-all'))
    let shoppingCart = useContext(Context)
    console.log(shoppingCart.shoppingCart)
    let data = {
        booksOrdered: shoppingCart.shoppingCart
    }

    function submitOrder(){
        let order = {
            booksOrdered: shoppingCart.shoppingCart,
            userId: user.id,
            shippingInformation: user.shippingInformation
        }
        
        orderService.addOrder(order)
    }

    return <div>
        <p>Summary of your order below</p>
        <div className="row">

            <div className="col">
                <div className="row">
                    <div className="col">
                        <UserInformationForm readOnly basic defaultValues={user} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ShippingInformationForm basic defaultValues={user?.shippingInformation} readOnly />
                    </div>
                    <div className="col">
                        <BillingInformationForm defaultValues={user?.billingInformation} readOnly />
                    </div>
                </div>
            </div>
            <ProfileOrderItemList order={data} />
        </div>
        <div className="row">
            <div className="col">
                <PrimaryButton text="Submit Order" onClick={submitOrder}/>
            </div>
        </div>
    </div>
}

export default CheckoutPage