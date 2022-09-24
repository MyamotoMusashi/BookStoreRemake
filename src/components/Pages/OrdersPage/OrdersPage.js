import { Link } from 'react-router-dom'

import './OrdersPage.css'

import SubNavigationButton from "../../Buttons/SubNavigationButton/SubNavigationButton"
import BasicList from "../../Lists/BasicList/BasicList"
import OrderOverviewItem from "../../OrderOverviewItem/OrderOverviewItem"
import orderService from '../../../services/OrderService'
import { useEffect, useState } from 'react'


function OrdersPage() {
    let [orders, setOrders] = useState()
    let [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        orderService.getAllOrders()
            .then(async data => {
                setOrders((await data.json()))
                setIsLoaded(true)
                console.log(await orders)
            })
    }, [])

    if (isLoaded) {
        return <>
            <div className='row profile-page-navigation'>
                <div className='col-2'><SubNavigationButton to="?status=notProcessed" text="Not Processed"></SubNavigationButton></div>
                <div className='col-2'><SubNavigationButton to="?status=processed" text="Processed"></SubNavigationButton></div>
                <div className='col-2'><SubNavigationButton to="?status=completed" text="Completed"></SubNavigationButton></div>
            </div>
            <div className='row'>
                <div className="col">
                    <BasicList className="orders-list">
                        {orders.map(order => {
                            return <Link to={`/orders/${order.id}`}>
                                <OrderOverviewItem order={order}/>
                            </Link>
                        })}
                    </BasicList>
                </div>
            </div>
        </>
    }
}

export default OrdersPage