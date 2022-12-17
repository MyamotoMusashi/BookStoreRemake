import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { Row, Col } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import PersonalInformationForm from "../../Forms/PersonalInformationForm/PersonalInformationForm"
import SubNavigationButton from "../../Buttons/SubNavigationButton/SubNavigationButton"
import OrderOverviewItem from "../../OrderOverviewItem/OrderOverviewItem"
import ProfileOrderItemList from "../Profile/ProfileOrders/ProfileOrderItem/ProfileOrderItemList/ProfileOrderItemList"

import orderService from "../../../services/OrderService"
import userService from "../../../services/userService"

import './OrdersDetailsPage.css'

function OrdersDetailsPage() {
    let { orderId } = useParams()
    let [order, setOrder] = useState()
    let [user, setUser] = useState()
    let [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        orderService.getOrderByOrderId(orderId)
            .then(async (data) => {
                let orderAsync = await data.json()
                setOrder(orderAsync)
                return orderAsync
            })
            .then((data) => {
                userService.getUserByIDSpring(data?.userId)
                    .then(async data => {
                        user = await data.json()
                        setUser(user)
                        setIsLoaded(true)
                    })
            })
    }, [])

    function processOrder(orderStatus) {
        order.status = orderStatus
        orderService.updateOrder(order).then(async (data) => {
            setOrder(await data.json())
        })
    }

    if (isLoaded) {
        return <>
            <Row className='home-page-subnavigation'>
                <Col md={2}><SubNavigationButton to="/orders?status=NotProcessed" text="Not Processed"></SubNavigationButton></Col>
                <Col md={2}><SubNavigationButton to="/orders?status=Processed" text="Processed"></SubNavigationButton></Col>
                <Col md={2}><SubNavigationButton to="/orders?status=Completed" text="Completed"></SubNavigationButton></Col>
            </Row>
            <Row className='order-details-wrapper align-items-start'>
                <Col md={2}>
                    <Row>
                        <OrderOverviewItem order={order} />
                    </Row>
                    <Row>
                        <Col className="order-secondary-information">
                            <p>History</p>
                            <DropdownButton id="dropdown-item-button" title="Status">
                                <Dropdown.ItemText>Current Status is: {order.status}</Dropdown.ItemText>
                                <Dropdown.Item as="button" onClick={() => processOrder("Processed")}>Mark as Processed</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={() => processOrder("Completed")}>Mark as Completed</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={() => processOrder("NotProcessed")}>Mark as Not Processed</Dropdown.Item>
                            </DropdownButton>
                            <p>Note</p>
                        </Col>
                    </Row>
                </Col>
                <Col md={10}>
                    <PersonalInformationForm user={user} userForm readOnly />
                    <Row>
                        <Col>
                            <ProfileOrderItemList order={order.itemsOrdered} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    }
}

export default OrdersDetailsPage