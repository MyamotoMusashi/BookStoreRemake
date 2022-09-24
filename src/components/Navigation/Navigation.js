import Button from '../Buttons/NavigationButton/NavigationButton.js'
import OpenShoppingCartButton from '../Buttons/OpenShoppingCartButton/OpenShoppingCartButton.js'
import LoginFormModal from '../Forms/LoginForm/LoginFormModal/LoginFormModal.js'

function Navigation() {
    let user = JSON.parse(sessionStorage.getItem('bookstore-all') || null)
    let isUserLogged = user != null
    let isUserAdmin =  user?.role === 'admin'

    return <nav>
        <Button to="/" text="Home"></Button>
        <Button text="Books"></Button>
        {isUserAdmin ? 
        <Button to="/orders" text="Orders"></Button>
            : <></>  }
        {isUserLogged ?
            <Button to={`/users/${user.id}?get=profileInfo`} text={user.username} />
            :
            <Button to="#loginFormModal" data-bs-toggle="modal" text="Login"></Button>
        }
        <LoginFormModal />
        <OpenShoppingCartButton/>
    </nav>
}

export default Navigation