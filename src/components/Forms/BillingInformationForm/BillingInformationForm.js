import './BillingInformationForm.css'

import Input from "../../Inputs/Input/Input"
import ShippingInformationForm from '../ShippingInformationForm/ShippingInformationForm'

function BillingInformationForm(props) {
    return <div className="row billing-information-form">
        <p>Billing Information</p>
        <div className='billing-information-form-controls-wrapper'>
            <div className='col-12'>
                <input type="radio" name="billing-address-controls" id="billing-address-option1" />
                <label htmlFor="billing-address-option1">Same as Shipping address</label>
            </div>
            <div className='col-12'>
                <input type="radio" name="billing-address-controls" id="billing-address-option2" />
                <label htmlFor="billing-address-option2">Different Billing Address</label>
            </div>
        </div>
        <div className='col-12'>
            <ShippingInformationForm defaultValues={props.defaultValues} readOnly={props.readOnly || null}/>
        </div>
    </div>
}

export default BillingInformationForm