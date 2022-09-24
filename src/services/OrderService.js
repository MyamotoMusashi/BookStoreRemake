function getAllOrders(){
    return fetch('http://localhost:8080/orders')
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

const orderService = {
    getAllOrders,
    getOrderByOrderId,
    getOrdersByUserId,
    addOrder
}

export default orderService