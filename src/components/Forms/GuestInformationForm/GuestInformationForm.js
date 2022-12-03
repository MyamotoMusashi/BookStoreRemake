import { func } from 'prop-types';

import Input from "../../Inputs/Input/Input"

import './GuestInformationForm.css'

function GuestInformationForm(props) {
    let user = {}

    function handleUserInputChange(e) {
        switch (e.target.name) {
            case 'first-name':
                user.firstName = e.target.value
                break;
            case 'last-name':
                user.lastName = e.target.value
                break;
            case 'phone-number':
                user.phone = e.target.value
                break;
            case 'email':
                user.email = e.target.value
                break;
        }

        props.onChange(user)
    }


    return <div className="row guest-information-form">
        <p>Contact Information</p>
        <div className="col-4 offset-2">
            <Input name="first-name" placeholder="First Name" onChange={handleUserInputChange}/>
        </div>
        <div className="col-2">
            <Input name="last-name" placeholder="Last Name" onChange={handleUserInputChange}/>
        </div>
        <div className="col-4 offset-2">
            <Input name="phone-number" placeholder="Phone Number" onChange={handleUserInputChange}/>
        </div>
        <div className="col-2">
            <Input name="email" placeholder="Email" onChange={handleUserInputChange}/>
        </div>
    </div>
}

GuestInformationForm.propTypes = {
    onChange: func
}

export default GuestInformationForm