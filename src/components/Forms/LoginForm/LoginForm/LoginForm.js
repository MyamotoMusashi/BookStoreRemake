import './LoginForm.css'
import PrimaryButton from "../../../Buttons/PrimaryButton/PrimaryButton"
import React from 'react';

function LoginForm() {

    let usernameInput = React.createRef()
    let passwordInput = React.createRef()

    const onLogin = () => {
        if (usernameInput.current.value === 'gogo' && passwordInput.current.value === 'mogo') {
            sessionStorage.setItem("bookstore-user", "gogo")
            window.location.reload(true)
        }
    }

    return <>
        <form action="" className='login-form'>
            <input type="text" className="login-form-input" placeholder='Username' ref={usernameInput} />
            <input type="text" className="login-form-input" placeholder='Password' ref={passwordInput} />
        </form>
        <button className="forgotten-password-btn">Forgotten password?</button>
        <PrimaryButton text="Login" onClick={onLogin}/>
    </>
}

export default LoginForm