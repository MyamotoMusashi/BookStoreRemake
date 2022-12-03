import './LoginForm.css'
import PrimaryButton from "../../../Buttons/PrimaryButton/PrimaryButton"
import React, { useContext } from 'react';
import userService from '../../../../services/userService';
import { ShoppingCartContext } from '../../../contexts/ShoppingCartContext';
import { useState } from 'react';

function LoginForm() {

    let usernameInput = React.createRef()
    let passwordInput = React.createRef()
    let shoppingCart = useContext(ShoppingCartContext).shoppingCart
    let [invalid, setInvalild] = useState(false)

    const onLogin = () => {
        userService.authenticateUserSpring(usernameInput.current.value, passwordInput.current.value)
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                }

                setInvalild(true)
                return null
            })
            .then(user => {
                if (user) {
                    sessionStorage.setItem('bookstore-user', user.username)
                    sessionStorage.setItem('bookstore-role', user.role)
                    sessionStorage.setItem('bookstore-all', JSON.stringify(user))
                    sessionStorage.setItem('bookstore-cart', JSON.stringify(shoppingCart))
                    window.location.reload(true)
                }
            })
    }

    return <>
        <form action="" className='login-form'>
            <input type="text" className="login-form-input" placeholder='Username' ref={usernameInput} />
            <input type="password" className="login-form-input" placeholder='Password' ref={passwordInput} />
        </form>
        <button className="forgotten-password-btn">Forgotten password?</button>
        <PrimaryButton text="Login" onClick={onLogin} />
        {invalid
            ? <p className="error">Invalid username or password. Please check your credentials and try again.</p>
            : <></>
        }
    </>
}

export default LoginForm