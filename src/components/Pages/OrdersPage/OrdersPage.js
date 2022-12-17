import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

// import { Table } from 'react-bootstrap'

import { Row, Col, Nav } from 'react-bootstrap'

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
        /*       let tableTemplate = <Table striped bordered hover responsive>
                  <thead>
                      <tr>
                          <th>ID</th>
                          <th>Price</th>
                          <th>Date Ordered</th>
                          <th>Address</th>
                          <th>Status</th>
                      </tr>
                  </thead>
                  <tbody>
                      {orders.map((order, index) => {
                          console.log(order)
                          return <tr key={index}>
                              <td>{order.id}</td>
                              <td>{order.totalPrice}</td>
                              <td>{order.dateCreated}</td>
                              <td>{order.address}</td>
                              <td>{order.status}</td>
                          </tr>
                      })}
                  </tbody>
              </Table> */

        let listTemplate = <BasicList className="orders-list">
            {orders.map((order, index) => {
                return <Link to={`/orders/${order.id}`} key={index}>
                    <OrderOverviewItem order={order} />
                </Link>
            })}
        </BasicList>

        return <>
            <Nav as={Row} variant="pills" defaultActiveKey={searchParams.get("status")} bsPrefix="home-page-subnavigation">
                <Nav.Item as={Col} md={2}>
                    <Nav.Link as={SubNavigationButton} text="Not Processed" to="/orders?status=NotProcessed" eventKey="NotProcessed" bsPrefix="tag-btn"></Nav.Link>
                </Nav.Item>
                <Nav.Item as={Col} md={2}>
                    <Nav.Link as={SubNavigationButton} text="Processed" to="/orders?status=Processed" eventKey="Processed" bsPrefix="tag-btn"></Nav.Link>
                </Nav.Item>
                <Nav.Item as={Col} md={2}>
                    <Nav.Link as={SubNavigationButton} text="Completed" to="/orders?status=Completed" eventKey="Completed" bsPrefix="tag-btn"></Nav.Link>
                </Nav.Item>
            </Nav>
            <Row className='row'>
                <Col>
                    {listTemplate}
                </Col>
            </Row>
        </>
    }
}

export default OrdersPage