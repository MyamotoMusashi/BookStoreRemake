import { useNavigate, useSearchParams } from "react-router-dom"

import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton"
import ProfileOrderItem from "../Profile/ProfileOrders/ProfileOrderItem/ProfileOrderItem"
import PersonalInformationForm from "../../Forms/PersonalInformationForm/PersonalInformationForm"

import { useContext } from "react"
import { ToastContext } from "../../contexts/ToastContextProvider"
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext"
import orderService from "../../../services/OrderService"

function CheckoutPage() {
    let user = JSON.parse(sessionStorage.getItem('bookstore-all'))
    let shoppingCart = useContext(ShoppingCartContext)
    let toastContext = useContext(ToastContext)
    let totalPrice = 0
    shoppingCart.shoppingCart.forEach(item => {
        totalPrice = totalPrice + (item.book.price * item.quantity)
    });
    let data = {
        userId: user?.id,
        itemsOrdered: shoppingCart.shoppingCart,
        shippingInformation: user?.shippingInformation,
        totalPrice: totalPrice.toFixed(2)
    }

    let [searchParams] = useSearchParams()
    let guest = searchParams.get('type') == 'guest'

    let navigate = useNavigate()

    function submitOrder() {
        let order = {
            itemsOrdered: shoppingCart.shoppingCart,
            userId: user.id,
            shippingInformation: user.shippingInformation
        }

        orderService.addOrder(order)
            .then(() => {
                shoppingCart.clearShoppingCart()
                toastContext.displayMessage('order successfully placed')
                navigate('/')
            })
    }

    if (user) {
        return <div>
            <p>Summary of your order below</p>
            <PersonalInformationForm readOnly user={user} />
            <ProfileOrderItem order={data} />
            <PrimaryButton text="Submit Order" onClick={submitOrder} />
        </div>
    }
    else if (guest) {
        return <div>
            <p>Summary of your order below</p>
            <PersonalInformationForm reactGuest user={user} />
            <ProfileOrderItem order={data} />
            <PrimaryButton text="Submit Order" onClick={submitOrder} />
        </div>
    }
}

export default CheckoutPage