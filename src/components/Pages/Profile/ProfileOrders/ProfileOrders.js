import { useEffect, useState } from "react"
import orderService from "../../../../services/OrderService"
import ProfileOrdersList from "./ProfileOrdersList/ProfileOrdersList"
import { useParams } from "react-router-dom"

function ProfileOrders() {
    let [orders, setOrders] = useState()
    let [isLoaded, setIsLoaded] = useState(false)
    let { userId } = useParams()

    useEffect(() => {
        orderService.getOrdersByUserId(userId)
            .then(async (data) => {
                setOrders(await data.json())
                setIsLoaded(true)
            })
    }, [])

    if (isLoaded) {
        return <div className="row profile-order-wrapper">
            <div className="col profile-orders-wrapper">
                {orders.length > 0
                    ? <ProfileOrdersList orders={orders} />
                    : <p>You dont have any orders yet.</p>
                }
            </div>
        </div>
    }
}

export default ProfileOrders