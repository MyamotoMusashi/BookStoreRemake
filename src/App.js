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
import LoginFormModal from './components/Forms/LoginForm/LoginFormModal/LoginFormModal'

import {ShoppingCartContext, ShoppingCartContextProvider} from './components/contexts/ShoppingCartContext.js'
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'

export const UserContext = createContext()

function App() {
  window.addEventListener("beforeunload", (ev) => {
    ev.preventDefault();
    return ev.returnValue = 'Are you sure you want to close?';
  });

  const [showLogin, setShowLogin] = useState(false)
  const [user, setUser] = useState()

  function updateUser(updatedUser) {
    setUser(updatedUser)
  }

  function handleCloseLogin() {
    setShowLogin(false)
  }

  function toggleShowLogin() {
    setShowLogin((s) => !s)
  }

  return (
    <ShoppingCartContextProvider>
      <UserContext.Provider value={
        {
          user: user,
          show: showLogin,
          updateUser,
          handleClose: handleCloseLogin,
          toggleShowLogin
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
              <LoginFormModal />
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
    </ShoppingCartContextProvider>
  );
}

export default App;
