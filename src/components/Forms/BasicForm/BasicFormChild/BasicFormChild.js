import { PropTypes } from 'prop-types';

import Input from "../../../Inputs/Input/Input"

function BasicFormChild(props) {
    return <div {...props}>
        <Input name={props.name} placeholder={props.placeholder} defaultValue={props.defaultValue || null} value={props.value || null} readOnly={props.readOnly || null} onChange={props.onChange || null}/>
    </div>
}

BasicFormChild.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string || PropTypes.number,
    value: PropTypes.string,
    readOnly: PropTypes.bool,
    onChange: PropTypes.func
}

export default BasicFormChild