import './ShippingInformationForm.css'

import Input from "../../Inputs/Input/Input"

function ShippingInformationForm() {
    return <div className="row shipping-information-form">
        <p>Shipping Information</p>
        <div className='col-12 shipping-information-form-address1-wrapper'>
            <Input name="Address 1 (House #, ST, LN, DR, PL..)" />
        </div>
        <div className='col-12 shipping-information-form-address2-wrapper'>
            <Input name="Address 2 (APT, Room #, etc...)" />
        </div>
        <div className="col-4 offset-2">
            <Input name="Country" />
        </div>
        <div className="col-2">
            <Input name="City" />
        </div>
        <div className="col-4 offset-2">
            <Input name="ZIP Code" />
        </div>
    </div>
}

export default ShippingInformationForm