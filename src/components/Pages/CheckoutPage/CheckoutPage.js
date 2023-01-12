import { useNavigate, useSearchParams } from "react-router-dom"

import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton"
import ProfileOrderItem from "../Profile/ProfileOrders/ProfileOrderItem/ProfileOrderItem"
import PersonalInformationForm from "../../Forms/PersonalInformationForm/PersonalInformationForm"

import { useContext } from "react"
import { ToastContext } from "../../contexts/ToastContextProvider"
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext"
import { UserContext } from "../../../App"
import orderService from "../../../services/OrderService"
import userService from "../../../services/userService"

import './CheckoutPage.css'
import { useState } from "react"

function CheckoutPage() {
    let user = JSON.parse(sessionStorage.getItem('bookstore-all'))
    console.log(user)
    let shoppingCart = useContext(ShoppingCartContext)
    let toastContext = useContext(ToastContext)
    let userContext = useContext(UserContext)
    let totalPrice = 0
    shoppingCart.shoppingCart.forEach(item => {
        totalPrice = totalPrice + (item.book.price * item.quantity)
    });

    let [orderData, setOrderData] = useState({
        userId: user?.id,
        itemsOrdered: shoppingCart.shoppingCart,
        shippingInformation: {},
        totalPrice: totalPrice.toFixed(2)
    })

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

    function submitGuestOrder() {
        userService.updateUserSpring(user.id, user).then(async (user) => {
            let userData = await user.json()
            userContext.updateUser(userData)
        })
    }

    function onHandleUserInputChange(e) {
        if (e.phone) {
            user.phone = e.phone
        }

        if (e.email) {
            user.email = e.email
        }
    }

    function onHandleShippingInputChange(e) {
        console.log(e)
        orderData.shippingInformation = e
        console.log(orderData.shippingInformation)
        setOrderData(JSON.parse(JSON.stringify(orderData)))
        console.log("gei")
        console.log(orderData)
    }

    function onHandleBillingInputChange(e) {
        user.billingInformation = e
    }

    if (guest) {
        return <div>
            <p>Summary of your order below</p>
            <PersonalInformationForm guestForm user={user} onHandleUserInputChange={onHandleUserInputChange} onHandleShippingInputChange={onHandleShippingInputChange} onHandleBillingInputChange={onHandleBillingInputChange} />
            <ProfileOrderItem order={orderData} />
            <PrimaryButton text="Submit Order" onClick={submitGuestOrder} />
        </div>
    }

    return <div className="checkout-page">
        <p>Summary of your order below</p>
        <PersonalInformationForm userForm user={user} onHandleUserInputChange={onHandleUserInputChange} onHandleShippingInputChange={onHandleShippingInputChange} onHandleBillingInputChange={onHandleBillingInputChange} />
        <ProfileOrderItem order={orderData} />
        <PrimaryButton text="Submit Order" onClick={submitOrder} />
    </div>
}

export default CheckoutPage