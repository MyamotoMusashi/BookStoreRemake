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

    return <>
        <Row>
            <p>User Information:</p>
            {props.readOnly
                ? <UserInformationForm readOnly react defaultValues={props.user} />
                : props.reactGuest ? <UserInformationForm reactGuest defaultValues={props.user} onChange={handleUserInputChange}/> : <UserInformationForm react reactExtended defaultValues={props.user} onChange={handleUserInputChange} editable />
            }
            
        </Row>
        <Row>
            <p>Shipping Information</p>
            {props.readOnly
                ? <AddressInformationForm readOnly react defaultValues={props.user?.shippingInformation} />
                : <AddressInformationForm react defaultValues={props.user?.shippingInformation} onChange={handleShippingInputChange} />
            }
        </Row>
        <Row>
            <p>Billing Information</p>
            {props.readOnly
                ? <AddressInformationForm react defaultValues={props.user?.shippingInformation} readOnly />
                : <AddressInformationForm react defaultValues={props.user?.shippingInformation} onChange={handleBillingInputChange} />
            }
        </Row>
    </>

}

PersonalInformationForm.propTypes = {
    user: object,
    readOnly: bool,
    reactGuest: bool,
    onHandleUserInputChange: func,
    onHandleShippingInputChange: func,
    onHandleBillingInputChange: func
}

export default PersonalInformationForm