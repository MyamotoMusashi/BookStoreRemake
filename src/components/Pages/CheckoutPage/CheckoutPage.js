import { useContext } from "react"
import UserInformationForm from "../../Forms/UserInformationForm/UserInformationForm"
import ShippingInformationForm from "../../Forms/ShippingInformationForm/ShippingInformationForm"
import BillingInformationForm from "../../Forms/BillingInformationForm/BillingInformationForm"
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton"
import orderService from "../../../services/OrderService"
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext"
import { useNavigate } from "react-router-dom"
import ProfileOrderItem from "../Profile/ProfileOrders/ProfileOrderItem/ProfileOrderItem"
import { ToastContext } from "../../contexts/ToastContextProvider"

function CheckoutPage() {
    let user = JSON.parse(sessionStorage.getItem('bookstore-all'))
    let shoppingCart = useContext(ShoppingCartContext)
    let toastContext = useContext(ToastContext)
    let totalPrice = 0
    shoppingCart.shoppingCart.forEach(item => {
        totalPrice = totalPrice + (item.book.price * item.quantity)
    });
    let data = {
        userId: user.id,
        itemsOrdered: shoppingCart.shoppingCart,
        shippingInformation: user.shippingInformation,
        totalPrice: totalPrice.toFixed(2)
    }
    console.log(data)
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
                toastContext.displayMessage('order successfully placed')
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
            <ProfileOrderItem order={data}/>
        </div>
        <div className="row">
            <div className="col">
                <PrimaryButton text="Submit Order" onClick={submitOrder} />
            </div>
        </div>
    </div>
}

export default CheckoutPage