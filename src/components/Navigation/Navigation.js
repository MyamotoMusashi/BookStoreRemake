import Dropdown from 'react-bootstrap/Dropdown'
import { useNavigate } from 'react-router-dom'
import LinkContainer from 'react-router-bootstrap/LinkContainer.js'

import Button from '../Buttons/NavigationButton/NavigationButton.js'
import OpenShoppingCartButton from '../Buttons/OpenShoppingCartButton/OpenShoppingCartButton.js'

import './Navigation.css'
import { useContext } from 'react'
import { UserContext } from '../../App.js'
import { ShoppingCartContext } from '../contexts/ShoppingCartContext.js'


function Navigation() {
    let user = JSON.parse(sessionStorage.getItem('bookstore-all') || null)
    let isUserLogged = user != null
    let isUserAdmin = user?.role === 'admin'
    let navigate = useNavigate()
    const userContext = useContext(UserContext)
    const shoppingCartContext = useContext(ShoppingCartContext)

    function lala() {
        sessionStorage.removeItem('bookstore-all')
        shoppingCartContext.clearShoppingCart()
        navigate('/')
    }

    return <nav>
        <Button to="/" text="Home"></Button>
        <Button text="Books"></Button>
        {isUserAdmin ?
            <Button to="/orders" text="Orders"></Button>
            : <></>}
        {isUserLogged ?
            <>
                <Dropdown>
                    <Dropdown.Toggle as='a' variant="success" id="dropdown-basic">
                        {user.username}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <LinkContainer to={`/users/${user.id}?get=profileInfo`}>
                            <Dropdown.Item>My Profile</Dropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={`/users/${user.id}?get=myOrders`}>
                            <Dropdown.Item>My Orders</Dropdown.Item>
                        </LinkContainer>
                        <Dropdown.Item as="button" onClick={lala}>Sign out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </>
            :
            <Button to="#loginFormModal" text="Login" onClick={userContext.toggleShowLogin}></Button>

        }
        <OpenShoppingCartButton />
    </nav>
}

export default Navigation