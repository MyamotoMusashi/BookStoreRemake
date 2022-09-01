import './RemoveButton.css'

function RemoveButton(props){
    let text = props.text

    return <button className="remove-btn" {...props}>{text}</button>
}

export default RemoveButton