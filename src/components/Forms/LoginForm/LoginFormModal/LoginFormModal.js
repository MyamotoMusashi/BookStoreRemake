import { Modal } from "react-bootstrap";

import SecondaryButton from "../../../Buttons/SecondaryButton/SecondaryButton"
import LoginForm from "../LoginForm/LoginForm"
import { useNavigate } from "react-router-dom";

import './LoginFormModal.css'
import { useContext, useState } from "react";
import { UserContext } from "../../../../App";

function LoginFormModal() {
    const navigate = useNavigate()
    const [show, setShow] =  useState(true)
    const userContext = useContext(UserContext)

    const registerUser = () => {
        navigate('/users/register?type=user')
    }

    const registerGuest = () => {
        navigate('/users/register?type=guest')
    }

    function handleClose(){
        setShow(false)
    }

    return <Modal show={userContext.show} id="loginFormModal" centered>
        <Modal.Header closeButton onClick={userContext.handleClose}>
        </Modal.Header>
        <Modal.Body><LoginForm /></Modal.Body>
        <Modal.Footer>
            <SecondaryButton text="Create an account" onClick={registerUser} data-bs-dismiss="modal" />
            <SecondaryButton text="Continue as Guest" onClick={registerGuest} data-bs-dismiss="modal" />
        </Modal.Footer>
    </Modal>
}

export default LoginFormModal