import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation/Navigation';

import BookDetailsPage from './components/Pages/BookDetailsPage/BookDetailsPage';
import HomePage from './components/Pages/HomePage';
import ProfilePage from './components/Pages/Profile/ProfilePage/ProfilePage';
import UserRegisterPage from './components/Pages/UserRegisterPage/UserRegisterPage';
import OrdersPage from './components/Pages/OrdersPage/OrdersPage';
import OrdersDetailsPage from './components/Pages/OrdersDetailsPage/OrdersDetailsPage';



function App() {
  return (
    <div className="App container-flux">
      <div className='row navigation primary-color'>
        <div className='col'>
          <Navigation />
        </div>
      </div>
      <div className='row main-content bg-color'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books/:bookId" element={<BookDetailsPage />} />
          <Route path="/users/register" element={<UserRegisterPage />} />
          <Route path='/users/1' element={<ProfilePage />} />
          <Route path='/orders' element={<OrdersPage />} />
          <Route path='/orders/1' element={<OrdersDetailsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
