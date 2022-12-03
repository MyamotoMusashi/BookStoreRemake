import { bool, string } from 'prop-types'
import './Input.css'

function Input(props){
    if (props.editable) {
        return <input className="form-input editable" placeholder={props.placeholder} {...props} ></input>
    }
    
    return <input className="form-input" placeholder={props.placeholder} {...props}></input>
}

Input.propTypes = {
    editable: bool,
    placeholder: string
}

export default Input