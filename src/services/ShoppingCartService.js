let shoppingCart = JSON.parse(sessionStorage.getItem('bookstore-cart')) || []

function addToShoppingCart(book) {
    shoppingCart.push(book)
}

function getShoppingCart() {
    return new Promise((resolve, reject) => {
        resolve(shoppingCart.slice())
    })
}

function lala() {
    return new Promise((resolve) => {
        resolve(shoppingCart.length)
    })
}

const shoppingCartService = {
    addToShoppingCart: addToShoppingCart,
    getShoppingCart: getShoppingCart,
    lala: lala
}

export default shoppingCartService