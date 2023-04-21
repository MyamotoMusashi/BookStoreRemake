import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PrimaryButton from "../../../Buttons/PrimaryButton/PrimaryButton"

import userService from '../../../../services/userService';
import { UserContext } from "../../../../App";
import { ShoppingCartContext } from '../../../contexts/ShoppingCartContext';

import './LoginForm.css'

function LoginForm() {

    let navigate = useNavigate()
    let usernameInput = React.createRef()
    let passwordInput = React.createRef()
    const userContext = useContext(UserContext)
    const shoppingCartContext = useContext(ShoppingCartContext)
    let shoppingCart = shoppingCartContext.shoppingCart
    let [invalid, setInvalild] = useState(false)

    const onLogin = () => {
        userService.authenticateUserSpring(usernameInput.current.value, passwordInput.current.value)
            .then(async response => {
                if (response.status === 200) {
                    return response.json()
                }

                setInvalild(true)
                return null
            })
            .then(user => {
                if (user) {
                    console.log(user)
                    sessionStorage.setItem('bookstore-user', user.username)
                    sessionStorage.setItem('bookstore-role', user.role)
                    sessionStorage.setItem('bookstore-all', JSON.stringify(user))
                    sessionStorage.setItem('bookstore-cart', JSON.stringify(shoppingCart))
                    userContext.updateUser(user)
                    window.location.reload(true)
                }
            })
    }

    const onGuest = () => {
        userContext.toggleShowLogin()
        userService.registerGuestSpring({}).then(async (user) => {
            let userData = await user.json()
            sessionStorage.setItem('bookstore-user', userData.username)
            sessionStorage.setItem('bookstore-role', userData.role)
            sessionStorage.setItem('bookstore-all', JSON.stringify(userData))
            sessionStorage.setItem('bookstore-cart', JSON.stringify(shoppingCart))
            console.log(userData)
            userContext.updateUser(userData)

            if (shoppingCartContext.show){
                shoppingCartContext.handleClose()
                navigate('/checkout')
            }
            else {
                navigate('/')
            }
        })
    }

    return <>
        <form action="" className='login-form'>
            <input type="text" className="login-form-input" placeholder='Username' ref={usernameInput} />
            <input type="password" className="login-form-input" placeholder='Password' ref={passwordInput} />
        </form>
        <button className="forgotten-password-btn" onClick={onGuest}>Continue as Guest</button>
        <PrimaryButton text="Login" onClick={onLogin} />
        {invalid
            ? <p className="error">Invalid username or password. Please check your credentials and try again.</p>
            : <></>
        }
    </>
}

export default LoginForm