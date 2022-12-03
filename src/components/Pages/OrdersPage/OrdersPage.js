import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

import SubNavigationButton from "../../Buttons/SubNavigationButton/SubNavigationButton"
import BasicList from "../../Lists/BasicList/BasicList"
import OrderOverviewItem from "../../OrderOverviewItem/OrderOverviewItem"
import orderService from '../../../services/OrderService'

import './OrdersPage.css'

function OrdersPage() {
    let [orders, setOrders] = useState()
    let [isLoaded, setIsLoaded] = useState(false)
    let [searchParams] = useSearchParams();

    useEffect(() => {
        orderService.getOrdersByStatus(searchParams.get("status"))
            .then(async data => {
                setOrders((await data.json()))
                setIsLoaded(true)
            })
    }, [searchParams.get("status")])

    if (isLoaded) {
        return <>
            <div className='row profile-page-navigation'>
                <div className='col-2'><SubNavigationButton to="/orders?status=NotProcessed" text="Not Processed"></SubNavigationButton></div>
                <div className='col-2'><SubNavigationButton to="/orders?status=Processed" text="Processed"></SubNavigationButton></div>
                <div className='col-2'><SubNavigationButton to="/orders?status=Completed" text="Completed"></SubNavigationButton></div>
            </div>
            <div className='row'>
                <div className="col">
                    <BasicList className="orders-list">
                        {orders.map((order, index) => {
                            return <Link to={`/orders/${order.id}`} key={index}>
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