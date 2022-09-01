import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton"
import BillingInformationForm from "../BillingInformationForm/BillingInformationForm"
import ShippingInformationForm from "../ShippingInformationForm/ShippingInformationForm"
import UserInformationForm from "../UserInformationForm/UserInformationForm"
import GuestInformationForm from "../GuestInformationForm/GuestInformationForm"

import { useSearchParams } from 'react-router-dom'

import './RegisterForm.css'

function RegisterForm() {

    let [searchParams, setSearchParams] = useSearchParams();

    const registerUserForm = <div className="row user-register-form-wrapper">
        <div className="col-6 offset-3 user-register-form">
            <UserInformationForm />
            <ShippingInformationForm />
            <BillingInformationForm />
            <div className="row user-register-form-register-btn-wrapper">
                <PrimaryButton text="Register" />
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