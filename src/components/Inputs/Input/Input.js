import './Input.css'

function Input(props){
    return <input className="form-input" placeholder={props.name} {...props}></input>
}

export default Input