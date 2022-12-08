import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Modal } from "react-bootstrap";

import LoginForm from "../LoginForm/LoginForm"
import SecondaryButton from "../../../Buttons/SecondaryButton/SecondaryButton"

import { UserContext } from "../../../../App";
import { ShoppingCartContext } from "../../../contexts/ShoppingCartContext";

import './LoginFormModal.css'

function LoginFormModal() {
    const navigate = useNavigate()
    const userContext = useContext(UserContext)
    const shoppingCartContext = useContext(ShoppingCartContext)

    const registerUser = () => {
        userContext.toggleShowLogin()
        shoppingCartContext.handleClose()
        navigate('/users/register?type=user')
    }

    const registerGuest = () => {
        userContext.toggleShowLogin()
        shoppingCartContext.handleClose()
        navigate('/checkout?type=guest')
    }

    return <Modal show={userContext.show} id="loginFormModal" centered>
        <Modal.Header closeButton onClick={userContext.handleClose}>
        </Modal.Header>
        <Modal.Body><LoginForm /></Modal.Body>
        <Modal.Footer>
            <SecondaryButton text="Create an account" onClick={registerUser} data-bs-dismiss="modal" />
            <SecondaryButton text="Forgotten password?" onClick={registerGuest} data-bs-dismiss="modal" />
        </Modal.Footer>
    </Modal>
}

export default LoginFormModal