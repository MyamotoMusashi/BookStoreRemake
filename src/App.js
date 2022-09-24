import { Routes, Route, BrowserRouter as Router, BrowserRouter } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';

import Navigation from './components/Navigation/Navigation';
import ShoppingCartOffCanvas from './components/ShoppingCartOffCanvas/ShoppingCartOffCanvas';
import ProtectedRoute from './components/Routes/ProtectedRoute';

import BookDetailsPage from './components/Pages/BookDetailsPage/BookDetailsPage';
import HomePage from './components/Pages/HomePage';
import ProfilePage from './components/Pages/Profile/ProfilePage/ProfilePage';
import UserRegisterPage from './components/Pages/UserRegisterPage/UserRegisterPage';
import OrdersPage from './components/Pages/OrdersPage/OrdersPage';
import OrdersDetailsPage from './components/Pages/OrdersDetailsPage/OrdersDetailsPage';
import CheckoutPage from './components/Pages/CheckoutPage/CheckoutPage';

import shoppingCartService from './services/ShoppingCartService';

import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'

export const Context = createContext()
export const UserContext = createContext()

function App() {
  window.addEventListener("beforeunload", (ev) => {
    ev.preventDefault();
    return ev.returnValue = 'Are you sure you want to close?';
  });

  const [shoppingCart, setShoppingCart] = useState([])
  const [user, setUser] = useState()

  function addToShoppingCart(book) {
    shoppingCartService.addToShoppingCart(book)
    shoppingCartService.getShoppingCart().then(res => {
      setShoppingCart(res)
    })
  }

  function updateUser(updatedUser) {
    setUser(updatedUser)
  }

  return (
    <Context.Provider value={
      {
        shoppingCart: shoppingCart,
        addToShoppingCart: addToShoppingCart
      }
    }>
      <UserContext.Provider value={
        {
          user: user,
          updateUser
        }
      }>

        <BrowserRouter>
          <div className="App container-flux">
            <div className='row navigation primary-color'>
              <div className='col'>
                <Navigation />
              </div>
            </div>
            <div className='row main-content bg-color'>
              <ShoppingCartOffCanvas></ShoppingCartOffCanvas>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/books/:bookId" element={<BookDetailsPage />} />
                <Route path="/users/register" element={<UserRegisterPage />} />
                <Route path='/users/:userId' element={<ProfilePage />} />
                <Route path='/orders' element={<OrdersPage />} />
                <Route path='/orders/:orderId' element={
                  <ProtectedRoute user={true}>
                    <OrdersDetailsPage />
                  </ProtectedRoute>}
                />
                <Route path='/checkout' element={<CheckoutPage />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </UserContext.Provider>
    </Context.Provider>
  );
}

export default App;
