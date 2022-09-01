import {Link} from 'react-router-dom'

import './OrdersPage.css'

import SubNavigationButton from "../../Buttons/SubNavigationButton/SubNavigationButton"
import BasicList from "../../Lists/BasicList/BasicList"
import OrderOverviewItem from "../../OrderOverviewItem/OrderOverviewItem"


function OrdersPage() {
    return <>
        <div className='row profile-page-navigation'>
            <div className='col-2'><SubNavigationButton to="?status=notProcessed" text="Not Processed"></SubNavigationButton></div>
            <div className='col-2'><SubNavigationButton to="?status=processed" text="Processed"></SubNavigationButton></div>
            <div className='col-2'><SubNavigationButton to="?status=completed" text="Completed"></SubNavigationButton></div>
        </div>
        <div className='row'>
            <div className="col">
                <BasicList className="orders-list">
                    <Link to="/orders/1">
                        <OrderOverviewItem />
                    </Link>
                    <OrderOverviewItem />
                    <OrderOverviewItem />
                    <OrderOverviewItem />
                    <OrderOverviewItem />
                    <OrderOverviewItem />
                    <OrderOverviewItem />
                    <OrderOverviewItem />
                    <OrderOverviewItem />
                    <OrderOverviewItem />
                </BasicList>
            </div>
        </div>
    </>
}

export default OrdersPage