import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { createContext, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

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
import UsersPage from './components/Pages/UsersPage/UsersPage';
import SupportPage from './components/Pages/SupportPage/SupportPage';
import AdminBooksPage from './components/Pages/AdminPages/AdminBooksPage/AdminBooksPage';
import AdminAuthorsPage from './components/Pages/AdminPages/Author/AdminAuthorsPage/AdminAuthorsPage';
import AddBookPage from './components/Pages/AdminPages/AddBookPage/AddBookPage'
import LoginFormModal from './components/Forms/LoginForm/LoginFormModal/LoginFormModal'
import InfoToast from './components/toasts/InfoToast';

import { ShoppingCartContextProvider } from './components/contexts/ShoppingCartContext.js'
import { ToastContextProvider } from './components/contexts/ToastContextProvider';

import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import AddAuthor from './components/Pages/AdminPages/Author/AddAuthor/AddAuthor';
import AuthorDetails from './components/Pages/AdminPages/Author/AuthorDetails/AuthorDetails';
import EditBookPage from './components/Pages/EditBookPage/EditBookPage';

export const UserContext = createContext()

function App() {
  window.addEventListener("beforeunload", (ev) => {
    ev.preventDefault();
    return ev.returnValue = 'Are you sure you want to close?';
  });

  const [showLogin, setShowLogin] = useState(false)
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('bookstore-all') || null))

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
    <ToastContextProvider>
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
              <Row className='navigation'>
                <Col>
                  <Navigation />
                </Col>
              </Row>
              <Row className='main-content bg-color'>
                <ShoppingCartOffCanvas></ShoppingCartOffCanvas>
                <LoginFormModal />
                <InfoToast />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/books/:bookId" element={<BookDetailsPage />} />
                  <Route path="/books/:bookId/edit" element={<EditBookPage/>}/>
                  <Route path="/users/register" element={<UserRegisterPage />} />
                  <Route path='/users/:userId' element={<ProfilePage />} />
                  <Route path='/orders' element={<OrdersPage />} />
                  <Route path='/orders/:orderId' element={
                    <ProtectedRoute user={true}>
                      <OrdersDetailsPage />
                    </ProtectedRoute>}
                  />
                  <Route path='/checkout' element={<CheckoutPage />} />
                  <Route path='/users' element={<UsersPage />} />
                  <Route path='/support' element={<SupportPage />} />
                  <Route path='/admin/books' element={<AdminBooksPage/>}></Route>
                  <Route path='/admin/books/add' element={<AddBookPage/>}></Route>
                  <Route path='/admin/authors' element={<AdminAuthorsPage/>}></Route>
                  <Route path="/authors/:id" element={<AuthorDetails/>}>
                    <Route path="edit" element={<AuthorDetails/>}></Route>
                  </Route>
                  <Route path='/admin/authors/add' element={<AddAuthor/>}></Route>
                </Routes>
              </Row>
            </div>
          </BrowserRouter>
        </UserContext.Provider>
      </ShoppingCartContextProvider>
    </ToastContextProvider>
  );
}

export default App;
