import { useContext, useState } from "react"
import { useNavigate, useSearchParams } from 'react-router-dom'

import { Row, Col, Form } from "react-bootstrap"

import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton"
import AddressInformationForm from "../AddressInformationForm/AddressInformationForm"
import GuestInformationForm from "../GuestInformationForm/GuestInformationForm"

import userService from "../../../services/userService"
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext"
import User from "../../../entities/User"

import './RegisterForm.css'
import PersonalInformationForm from "../PersonalInformationForm/PersonalInformationForm"

function RegisterForm() {

    let [searchParams] = useSearchParams();
    const [validated, setValidated] = useState();
    let navigate = useNavigate()
    let user = new User()

    let shoppingCart = useContext(ShoppingCartContext).shoppingCart

    function handleUserInputChange(e) {
        user.username = e.username
        user.password = e.password
        user.confirmPassword = e.confirmPassword
        user.firstName = e.firstName
        user.lastName = e.lastName
        user.phone = e.phone
        user.email = e.email
    }

    function handleShippingInputChange(e) {
        user.shippingInformation = e
    }

    function handleBillingInputChange(e) {
        user.billingInformation = e
    }

    function registerUser(event) {
        const form = event.target.parentElement.children[0].children[1].children[1]
        const personalInformationForm = event.target.parentElement.children[0].children[0].children[1]
        const billingInformationForm = event.target.parentElement.children[0].children[2].children[1]

        if (form.checkValidity() === false || personalInformationForm.checkValidity() === false || billingInformationForm.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();

        }
        else if (form.checkValidity() === true && personalInformationForm.checkValidity() === true && billingInformationForm.checkValidity() === true) {
            userService.registerUserSpring(user).then(async (userSpring) => {
                let bla = await userSpring.json()
                sessionStorage.setItem('bookstore-user', bla.username)
                sessionStorage.setItem('bookstore-role', bla.role)
                sessionStorage.setItem('bookstore-all', JSON.stringify(bla))
                sessionStorage.setItem('bookstore-cart', JSON.stringify(shoppingCart))
                navigate('/', { replace: true })
            })
        }

        setValidated(true);
    }

    function registerGuest() {
        userService.registerGuestSpring(user).then(
            navigate('/', { replace: true })
        )
    }

    const registerReactForm = <Row className="user-register-form-wrapper">
        <Col md={6} className="offset-3 user-register-form">
            <Form noValidate validated={validated}>
                <PersonalInformationForm userForm userFormExtended onHandleBillingInputChange={handleBillingInputChange} onHandleShippingInputChange={handleShippingInputChange} onHandleUserInputChange={handleUserInputChange}/>
                <PrimaryButton text="Register" onClick={registerUser} />
            </Form>
        </Col>
    </Row>

    const registerGuestForm = <div className="row user-register-form-wrapper">
        <div className="col-6 offset-3 user-register-form">
            <GuestInformationForm onChange={handleUserInputChange} />
            <AddressInformationForm onChange={handleShippingInputChange} />
            <AddressInformationForm />
            <div className="row user-register-form-register-btn-wrapper">
                <PrimaryButton text="Register" onClick={registerGuest} />
            </div>
        </div>
    </div>

    if (searchParams.get('type') === 'guest') {
        return registerGuestForm
    }
    else if (searchParams.get('type') === 'user') {
        return registerReactForm
    }
}

export default RegisterForm