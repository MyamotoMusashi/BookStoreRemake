import { Link } from 'react-router-dom'
import Button from '../Buttons/NavigationButton/NavigationButton.js'
import LoginFormModal from '../Forms/LoginForm/LoginFormModal/LoginFormModal.js'

function Navigation() {
    let isUserLogged = sessionStorage.getItem('bookstore-user') != null

    return <nav>
        <Button to="/" text="Home"></Button>
        <Button text="Books"></Button>
        <Button to="/orders" text="Orders"></Button>
        {isUserLogged ?
            <Button to="/users/1?get=profileInfo" text={sessionStorage.getItem('bookstore-user')} />
            :
            <Button to="#loginFormModal" data-bs-toggle="modal" text="Login"></Button>
        }
        <LoginFormModal />
    </nav>
}

export default Navigation