import { useState } from 'react'
import { func, object, bool } from 'prop-types'

import { Row, Col, Form } from 'react-bootstrap'

import './AddressInformationForm.css'

function AddressInformationForm(props) {
    let [shippingInformation, setShippingInformation] = useState({
        address1: '',
        address2: '',
        country: '',
        city: '',
        zipCode: ''
    })

    function handleShippingInputChange(e) {
        switch (e.target.name) {
            case 'shipping-information-form-address1-input':
                shippingInformation.address1 = e.target.value
                setShippingInformation(shippingInformation)
                break;
            case 'shipping-information-form-address2-input':
                shippingInformation.address2 = e.target.value
                setShippingInformation(shippingInformation)
                break;
            case 'shipping-information-form-country-input':
                shippingInformation.country = e.target.value
                break;
            case 'shipping-information-form-city-input':
                shippingInformation.city = e.target.value
                break;
            case 'shipping-information-form-zip-code-input':
                shippingInformation.zipCode = e.target.value
                break;
        }

        console.log(shippingInformation)
        props.onChange(shippingInformation)
    }

    if (props.react) {
        return <Form onChange={handleShippingInputChange} className="address-information-form">
            <Col md={8} className="offset-2">
                <Form.Group className="mb-3 shipping-information-form-address1-wrapper" controlId="formBasicEmail">
                    <Form.Control name="shipping-information-form-address1-input" type="text" placeholder="Address 1 (House #, ST, LN, DR, PL..)" className='form-input' defaultValue={props.defaultValues?.address1} disabled={props.readOnly} onChange={props.onChange} required />
                    <Form.Control.Feedback type="invalid">
                        Please enter address line 1
                    </Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Col md={8} className="offset-2">
                <Form.Group className="mb-3 shipping-information-form-address2-wrapper" controlId="formBasicEmail">
                    <Form.Control name="shipping-information-form-address2-input" type="text" placeholder="Address 2 (APT, Room #, etc...)" className='form-input' defaultValue={props.defaultValues?.address2} disabled={props.readOnly} onChange={props.onChange} required />
                    <Form.Control.Feedback type="invalid">
                        Please enter address line 2
                    </Form.Control.Feedback>
                </Form.Group>
            </Col>
            <Row>
                <Col md={2} className="offset-2">
                    <Form.Group className="mb-3 shipping-information-form-country-wrapper" controlId="formBasicEmail">
                        <Form.Control name="shipping-information-form-country-input" type="text" placeholder="Country" className='form-input' defaultValue={props.defaultValues?.country} disabled={props.readOnly} onChange={props.onChange} required />
                        <Form.Control.Feedback type="invalid">
                            Please enter a country
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={2}>
                    <Form.Group className="mb-3 shipping-information-form-city-wrapper" controlId="formBasicEmail">
                        <Form.Control name="shipping-information-form-city-input" type="text" placeholder="State" className='form-input' defaultValue={props.defaultValues?.city} disabled={props.readOnly} onChange={props.onChange} required />
                        <Form.Control.Feedback type="invalid">
                        Please enter a state
                    </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={2}>
                    <Form.Group className="mb-3 shipping-information-form-city-wrapper" controlId="formBasicEmail">
                        <Form.Control name="shipping-information-form-city-input" type="text" placeholder="City" className='form-input' defaultValue={props.defaultValues?.city} disabled={props.readOnly} onChange={props.onChange} required />
                        <Form.Control.Feedback type="invalid">
                        Please enter a city
                    </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={2}>
                    <Form.Group className="mb-3 shipping-information-form-zip-code-wrapper" controlId="formBasicEmail">
                        <Form.Control name="shipping-information-form-zip-code-input" type="number" placeholder="ZIP Code" className='form-input' defaultValue={props.defaultValues?.zipCode} disabled={props.readOnly} onChange={props.onChange} required />
                        <Form.Control.Feedback type="invalid">
                        Please enter a ZIP Code
                    </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    }
}

AddressInformationForm.propTypes = {
    onChange: func,
    defaultValues: object,
    readOnly: bool,
    react: bool
}

export default AddressInformationForm