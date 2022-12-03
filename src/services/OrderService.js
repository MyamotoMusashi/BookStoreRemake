function getOrdersByStatus(orderStatus){
    return fetch(`http://localhost:8080/orders?status=${orderStatus}`)
}

function getOrderByOrderId(orderId){
    return fetch(`http://localhost:8080/orders/${orderId}`)
}

function getOrdersByUserId(userId){
    return fetch(`http://localhost:8080/orders?filterByUserId=${userId}`)
}

function addOrder(order) {
    return fetch(`http://localhost:8080/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    })
}

function updateOrder(order) {
    return fetch(`http://localhost:8080/orders/${order.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    })
}

const orderService = {
    getOrdersByStatus,
    getOrderByOrderId,
    getOrdersByUserId,
    addOrder,
    updateOrder
}

export default orderService