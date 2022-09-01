import './GuestInformationForm.css'

import Input from "../../Inputs/Input/Input"

function GuestInformationForm() {
    return <div className="row guest-information-form">
        <p>Contact Information</p>
        <div className="col-4 offset-2">
            <Input name="First Name"/>
        </div>
        <div className="col-2">
            <Input name="Last Name"/>
        </div>
        <div className="col-4 offset-2">
            <Input name="Phone Number"/>
        </div>
        <div className="col-2">
            <Input name="Email"/>
        </div>
    </div>
}

export default GuestInformationForm