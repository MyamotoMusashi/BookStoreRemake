import './LoginForm.css'
import PrimaryButton from "../../../Buttons/PrimaryButton/PrimaryButton"
import React from 'react';
import userService from '../../../../services/userService';

function LoginForm() {

    let usernameInput = React.createRef()
    let passwordInput = React.createRef()

    const onLogin = () => {
        userService.authenticateUserSpring(usernameInput.current.value, passwordInput.current.value)
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                }

                return null
            })
            .then(user => {
                if (user) {
                    sessionStorage.setItem('bookstore-user', user.username)
                    sessionStorage.setItem('bookstore-role', user.role)
                    sessionStorage.setItem('bookstore-all', JSON.stringify(user))
                    window.location.reload(true)
                }
            })
    }

    return <>
        <form action="" className='login-form'>
            <input type="text" className="login-form-input" placeholder='Username' ref={usernameInput} />
            <input type="text" className="login-form-input" placeholder='Password' ref={passwordInput} />
        </form>
        <button className="forgotten-password-btn">Forgotten password?</button>
        <PrimaryButton text="Login" onClick={onLogin} />
    </>
}

export default LoginForm