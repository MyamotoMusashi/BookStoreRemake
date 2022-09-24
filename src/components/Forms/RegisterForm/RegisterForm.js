import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton"
import BillingInformationForm from "../BillingInformationForm/BillingInformationForm"
import ShippingInformationForm from "../ShippingInformationForm/ShippingInformationForm"
import UserInformationForm from "../UserInformationForm/UserInformationForm"
import GuestInformationForm from "../GuestInformationForm/GuestInformationForm"

import userService from "../../../services/userService"

import { useNavigate, useSearchParams } from 'react-router-dom'

import './RegisterForm.css'


function RegisterForm() {

    let [searchParams, setSearchParams] = useSearchParams();
    let navigate = useNavigate()
    let user = {
        username: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        shippingInformation: {},
        billingInformation: {}
    }

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
        user.billingInformation = e
    }

    function registerUser() {
        userService.registerUserSpring(user).then(
            navigate('/', {replace: true})
        )
    }

    const registerUserForm = <div className="row user-register-form-wrapper">
        <div className="col-6 offset-3 user-register-form">
            <UserInformationForm extended onChange={handleUserInputChange} />
            <ShippingInformationForm onChange={handleShippingInputChange} />
            <BillingInformationForm />
            <div className="row user-register-form-register-btn-wrapper">
                <PrimaryButton text="Register" onClick={registerUser} />
            </div>
        </div>
    </div>

    const registerGuestForm = <div className="row user-register-form-wrapper">
        <div className="col-6 offset-3 user-register-form">
            <GuestInformationForm />
            <ShippingInformationForm />
            <BillingInformationForm />
            <div className="row user-register-form-register-btn-wrapper">
                <PrimaryButton text="Register" />
            </div>
        </div>
    </div>

    if (searchParams.get('type') === 'guest') {
        return registerGuestForm
    }
    else if (searchParams.get('type') === 'user') {
        return registerUserForm
    }
}

export default RegisterForm