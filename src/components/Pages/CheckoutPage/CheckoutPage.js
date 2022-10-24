import { useContext } from "react"
import ProfileOrderItemList from "../Profile/ProfileOrders/ProfileOrderItem/ProfileOrderItemList/ProfileOrderItemList"
import UserInformationForm from "../../Forms/UserInformationForm/UserInformationForm"
import ShippingInformationForm from "../../Forms/ShippingInformationForm/ShippingInformationForm"
import BillingInformationForm from "../../Forms/BillingInformationForm/BillingInformationForm"
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton"
import orderService from "../../../services/OrderService"
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext"
import { useNavigate } from "react-router-dom"

function CheckoutPage() {
    let user = JSON.parse(sessionStorage.getItem('bookstore-all'))
    let shoppingCart = useContext(ShoppingCartContext)
    let data = {
        booksOrdered: shoppingCart.shoppingCart
    }
    let navigate = useNavigate()

    function submitOrder() {
        let order = {
            itemsOrdered: shoppingCart.shoppingCart,
            userId: user.id,
            shippingInformation: user.shippingInformation
        }

        console.log(order)
        orderService.addOrder(order)
            .then(() => {
                shoppingCart.clearShoppingCart()
                navigate('/')
            })
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
            <ProfileOrderItemList order={data.booksOrdered} />
        </div>
        <div className="row">
            <div className="col">
                <PrimaryButton text="Submit Order" onClick={submitOrder} />
            </div>
        </div>
    </div>
}

export default CheckoutPage