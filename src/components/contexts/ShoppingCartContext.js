import { element } from "prop-types";
import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

export function ShoppingCartContextProvider(props) {
    const [shoppingCart, setShoppingCart] = useState(JSON.parse(sessionStorage.getItem('bookstore-cart')) || [])
    const [show, setShow] = useState(false);

    function addToShoppingCart(book) {
        let itemInTheShoppingCart = shoppingCart.find((item) => item.book.id === book.id)
        
        if(itemInTheShoppingCart) {
            itemInTheShoppingCart.quantity += 1
        }

        else {
            let item = {
                book: book,
                quantity: 1
            }   
            shoppingCart.push(item)
        }

        setShoppingCart(shoppingCart)
    }

    function removeFromShoppingCart(index) {
        shoppingCart.splice(index, 1)
        setShoppingCart(JSON.parse(JSON.stringify(shoppingCart)))
    }

    function clearShoppingCart() {
        sessionStorage.removeItem('bookstore-cart')
        setShoppingCart([])
    }

    function saveShoppingCart(shoppingCart) {
        setShoppingCart(shoppingCart)
    }

    const handleClose = () => {
        setShow(false)
    };

    const toggleShow = () => {
        setShow((s) => !s)
    };

    return <ShoppingCartContext.Provider value={
        {
            shoppingCart: shoppingCart,
            show: show,
            addToShoppingCart: addToShoppingCart,
            removeFromShoppingCart,
            clearShoppingCart,
            saveShoppingCart,
            handleClose: handleClose,
            toggleShow
        }
    }>
        {props.children}
    </ShoppingCartContext.Provider>
}

ShoppingCartContextProvider.propTypes = {
    children: element
}