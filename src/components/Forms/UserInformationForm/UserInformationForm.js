import { bool, func, object, element } from 'prop-types'

import { Form, Col, Row } from 'react-bootstrap'

import BasicForm from '../BasicForm/BasicForm'
import BasicFormChild from '../BasicForm/BasicFormChild/BasicFormChild'

import './UserInformationForm.css'

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

    if (props.react) {
        return <Form onChange={handleUserInputChange} className={props.editable ? "user-information-form editable" : "user-information-form"}>
            <Col md={8} className="offset-2">
                <Form.Group className="mb-3 user-information-form-username-wrapper" controlId="formBasicEmail">
                    <Form.Control name="user-information-form-username-input" type="text" placeholder="Username" className='form-input' defaultValue={props.defaultValues?.username} disabled={!props.reactExtended} onChange={props.onChange} required />
                    <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                </Form.Group>
            </Col>
            {props.reactExtended ? <Row>
                <Col md={4} className="offset-2">
                    <Form.Group className="mb-3 user-information-password-wrapper" controlId="formBasicEmail">
                        <Form.Control name="user-information-form-password-input" type="password" placeholder="Password" className='form-input' defaultValue={props.defaultValues?.username} disabled={props.readOnly} onChange={props.onChange} required />
                        <Form.Control.Feedback type="invalid">Please enter a password</Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group className="mb-3 user-information-confirm-password-wrapper" controlId="formBasicEmail">
                        <Form.Control name="user-information-form-confirm-password-input" type="password" placeholder="Confirm Password" className='form-input' defaultValue={props.defaultValues?.username} disabled={props.readOnly} onChange={props.onChange} required />
                        <Form.Control.Feedback type="invalid">Please confirm your password</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            : <></>
            }

            <Row>
                <Col md={4} className="offset-2">
                    <Form.Group className="mb-3 user-information-form-first-name-wrapper" controlId="formBasicEmail">
                        <Form.Control name="user-information-form-first-name-input" type="text" placeholder="First Name" className='form-input' defaultValue={props.defaultValues?.firstName} disabled={props.readOnly} onChange={props.onChange} />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group className="mb-3 user-information-form-last-name-wrapper" controlId="formBasicEmail">
                        <Form.Control name="user-information-form-last-name-input" type="text" placeholder="Last Name" className='form-input' defaultValue={props.defaultValues?.lastName} disabled={props.readOnly} onChange={props.onChange} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={4} className="offset-2">
                    <Form.Group className="mb-3 user-information-form-phone-number-wrapper" controlId="formBasicEmail">
                        <Form.Control name="user-information-form-phone-input" type="number" placeholder="Phone Number" className='form-input' defaultValue={props.defaultValues?.phone} disabled={props.readOnly} onChange={props.onChange} />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group className="mb-3 user-information-form-email-wrapper" controlId="formBasicEmail">
                        <Form.Control name="user-information-form-email-input" type="email" placeholder="Email" className='form-input' defaultValue={props.defaultValues?.email} disabled={props.readOnly} onChange={props.onChange} required />
                        <Form.Control.Feedback type="invalid">Please enter an email address</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    }

    if (props.reactGuest) {
        return <Form onChange={handleUserInputChange} className="user-information-form editable">
            <Row>
                <Col md={4} className="offset-2">
                    <Form.Group className="mb-3 user-information-form-phone-number-wrapper" controlId="formBasicEmail">
                        <Form.Control name="user-information-form-phone-input" type="number" placeholder="Phone Number" className='form-input' defaultValue={props.defaultValues?.phone} disabled={props.readOnly} onChange={props.onChange} />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group className="mb-3 user-information-form-email-wrapper" controlId="formBasicEmail">
                        <Form.Control name="user-information-form-email-input" type="email" placeholder="Email" className='form-input' defaultValue={props.defaultValues?.email} disabled={props.readOnly} onChange={props.onChange} required />
                        <Form.Control.Feedback type="invalid">Please enter an email address</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
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
            <BasicFormChild name="user-information-form-password-input" placeholder="Password" className="col-4 offset-2 user-information-password-wrapper" defaultValue={props.defaultValues?.firstName} readOnly={props.readOnly} onChange={props.onChange} />
            <BasicFormChild name="user-information-form-confirm-password-input" placeholder="Confirm Password" className="col-2 user-information-confirm-password-wrapper" defaultValue={props.defaultValues?.username} readOnly={props.readOnly} onChange={props.onChange} />
            <BasicFormChild name="user-information-form-first-name-input" placeholder="First Name" className="col-4 offset-2 user-information-form-first-name-wrapper" defaultValue={props.defaultValues?.firstName} readOnly={props.readOnly} onChange={props.onChange} />
            <BasicFormChild name="user-information-form-last-name-input" placeholder="Last Name" className="col-2 user-information-form-last-name-wrapper" defaultValue={props.defaultValues?.lastName} readOnly={props.readOnly} onChange={props.onChange} />
            <BasicFormChild name="user-information-form-phone-input" placeholder="Phone Number" className="col-4 offset-2 user-information-form-phone-number-wrapper" defaultValue={props.defaultValues?.phone} readOnly={props.readOnly} onChange={props.onChange} />
            <BasicFormChild name="user-information-form-email-input" placeholder="Email" className="col-2 user-information-form-email-wrapper" defaultValue={props.defaultValues?.email} readOnly={props.readOnly} onChange={props.onChange} />
            {props.children}
        </BasicForm>
    }
}

UserInformationForm.propTypes = {
    onChange: func,
    defaultValues: object,
    readOnly: bool,
    extended: bool,
    basic: bool,
    react: bool,
    reactExtended: bool,
    reactGuest: bool,
    editable: bool,
    children: element
}

export default UserInformationForm
