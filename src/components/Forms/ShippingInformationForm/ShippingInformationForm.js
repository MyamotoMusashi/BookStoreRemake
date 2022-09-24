import './ShippingInformationForm.css'
import BasicForm from '../BasicForm/BasicForm'
import BasicFormChild from '../BasicForm/BasicFormChild/BasicFormChild'

function ShippingInformationForm(props) {
    let shippingInformation = {}

    function handleShippingInputChange(e) {
        switch (e.target.name) {
            case 'shipping-information-form-address1-input':
                shippingInformation.address1 = e.target.value
                break;
            case 'shipping-information-form-address2-input':
                shippingInformation.address2 = e.target.value
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
        
        props.onChange(shippingInformation)
    }
    
        return <BasicForm className="row shipping-information-form" header="Shipping Information" onChange={handleShippingInputChange}>
            <BasicFormChild name="shipping-information-form-address1-input" className="col-12 shipping-information-form-address1-wrapper" placeholder="Address 1 (House #, ST, LN, DR, PL..)" defaultValue={props.defaultValues?.address1} readOnly={props.readOnly} onChange={props.onChange}/>
            <BasicFormChild name="shipping-information-form-address2-input" className="col-12 shipping-information-form-address2-wrapper" placeholder="Address 2 (APT, Room #, etc...)" defaultValue={props.defaultValues?.address2} readOnly={props.readOnly} onChange={props.onChange}/>
            <BasicFormChild name="shipping-information-form-country-input" className="col-4 offset-2 shipping-information-form-country-wrapper" placeholder="Country" defaultValue={props.defaultValues?.country} readOnly={props.readOnly} onChange={props.onChange}/>
            <BasicFormChild name="shipping-information-form-city-input" className="col-2 shipping-information-form-city-wrapper" placeholder="City" defaultValue={props.defaultValues?.city} readOnly={props.readOnly} onChange={props.onChange}/>
            <BasicFormChild name="shipping-information-form-zip-code-input" className="col-4 offset-2 shipping-information-form-zip-code-wrapper" placeholder="ZIP Code" defaultValue={props.defaultValues?.zipCode} readOnly={props.readOnly} onChange={props.onChange}/>
        </BasicForm>
}

export default ShippingInformationForm