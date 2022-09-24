import './UserInformationForm.css'
import BasicForm from '../BasicForm/BasicForm'
import BasicFormChild from '../BasicForm/BasicFormChild/BasicFormChild'
import { useEffect, useState } from 'react'

function UserInformationForm(props) {
    let user = {}

    function handleUserInputChange(e) {
        switch (e.target.name) {
            case 'user-information-form-username-input':
                user.username = e.target.value
                break;
            case 'user-information-form-password-input':
                user.password = e.target.value
                break;
            case 'user-information-form-confirm-password-input':
                user.confirmPassword = e.target.value
                break;
            case 'user-information-form-first-name-input':
                user.firstName = e.target.value
                break;
            case 'user-information-form-last-name-input':
                user.lastName = e.target.value
                break;
            case 'user-information-form-phone-input':
                user.phone = e.target.value
                break;
            case 'user-information-form-email-input':
                user.email = e.target.value
                break;
        }

        props.onChange(user)
    }

    if (props.basic) {
        return <BasicForm className="row user-information-form" header="User Information" onChange={handleUserInputChange}>
            <BasicFormChild placeholder="Username" className="col-4 user-information-form-username-wrapper" defaultValue={props.defaultValues?.username} readOnly />
            <BasicFormChild name="user-information-form-first-name-input" placeholder="First Name" className="col-4 user-information-form-first-name-wrapper" defaultValue={props.defaultValues?.firstName} readOnly={props.readOnly || null} />
            <BasicFormChild name="user-information-form-last-name-input" placeholder="Last Name" className="col-4 user-information-form-last-name-wrapper" defaultValue={props.defaultValues?.lastName} readOnly={props.readOnly || null} />
            <BasicFormChild name="user-information-form-phone-input" placeholder="Phone Number" className="col-4 user-information-form-phone-number-wrapper" defaultValue={props.defaultValues?.phone} readOnly={props.readOnly || null} />
            <BasicFormChild name="user-information-form-email-input" placeholder="Email" className="col-4 user-information-form-email-wrapper" defaultValue={props.defaultValues?.email} readOnly={props.readOnly || null} />
            {props.children}
        </BasicForm>
    }

    if (props.extended) {
        return <BasicForm className="row user-information-form" header="User Information" onChange={handleUserInputChange}>
            <BasicFormChild name="user-information-form-username-input" placeholder="Username" className="col-12 user-information-form-username-wrapper" defaultValue={props.defaultValues?.username} readOnly={props.readOnly} onChange={props.onChange} />
            <BasicFormChild name="user-information-form-password-input" placeholder="Password" className="col-4 offset-2 user-information-password-wrapper" defaultValue={props.defaultValues?.firstName} readOnly={props.readOnlly} onChange={props.onChange} />
            <BasicFormChild name="user-information-form-confirm-password-input" placeholder="Confirm Password" className="col-2 user-information-confirm-password-wrapper" defaultValue={props.defaultValues?.username} readOnly={props.readOnly} onChange={props.onChange} />
            <BasicFormChild name="user-information-form-first-name-input" placeholder="First Name" className="col-4 offset-2 user-information-form-first-name-wrapper" defaultValue={props.defaultValues?.firstName} readOnly={props.readOnly} onChange={props.onChange} />
            <BasicFormChild name="user-information-form-last-name-input" placeholder="Last Name" className="col-2 user-information-form-last-name-wrapper" defaultValue={props.defaultValues?.lastName} readOnly={props.readOnly} onChange={props.onChange} />
            <BasicFormChild name="user-information-form-phone-input" placeholder="Phone Number" className="col-4 offset-2 user-information-form-phone-number-wrapper" defaultValue={props.defaultValues?.phone} readOnly={props.readOnly} onChange={props.onChange} />
            <BasicFormChild name="user-information-form-email-input" placeholder="Email" className="col-2 user-information-form-email-wrapper" defaultValue={props.defaultValues?.email} readOnly={props.readOnly} onChange={props.onChange} />
            {props.children}
        </BasicForm>
    }
}

export default UserInformationForm
