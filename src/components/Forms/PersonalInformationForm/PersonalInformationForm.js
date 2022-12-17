import { object, bool, func } from "prop-types"
import { Row } from "react-bootstrap"

import UserInformationForm from "../UserInformationForm/UserInformationForm"
import AddressInformationForm from "../AddressInformationForm/AddressInformationForm"

import './PersonalInformationForm.css'

function PersonalInformationForm(props) {

    function handleUserInputChange(e) {
        props.onHandleUserInputChange(e)
    }

    function handleShippingInputChange(e) {
        props.onHandleShippingInputChange(e)
    }

    function handleBillingInputChange(e) {
        props.onHandleBillingInputChange(e)
    }

    return <div className="personal-information-form">
        <Row>
            <p>User Information:</p>
            <UserInformationForm userForm={props.userForm} userFormExtended={props.userFormExtended} defaultValues={props.user} onChange={handleUserInputChange} readOnly={props.readOnly} guestForm={props.guestForm} />
        </Row>
        <Row>
            <p>Shipping Information</p>
            < AddressInformationForm react defaultValues={props.user?.shippingInformation} onChange={handleShippingInputChange} readOnly={props.readOnly} />
        </Row>
        <Row>
            <p>Billing Information</p>
            <AddressInformationForm react defaultValues={props.user?.shippingInformation} onChange={handleBillingInputChange} readOnly={props.readOnly} />
        </Row>
    </div>

}

PersonalInformationForm.propTypes = {
    user: object,
    readOnly: bool,
    userForm: bool,
    userFormExtended: bool,
    guestForm: bool,
    onHandleUserInputChange: func,
    onHandleShippingInputChange: func,
    onHandleBillingInputChange: func
}

export default PersonalInformationForm