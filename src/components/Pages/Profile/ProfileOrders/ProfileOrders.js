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
                console.log(orders)
                setIsLoaded(true)
            })
    }, [])

    if (isLoaded) {
        return <div className="row">
            <div className="col">
                <ProfileOrdersList orders={orders}/>
            </div>
        </div>
    }
}

export default ProfileOrders