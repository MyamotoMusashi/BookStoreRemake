import './SecondaryButton.css'

function SecondaryButton(props){
    let text = props.text

    return <button className="secondary-btn" {...props}>{text}</button>
}

export default SecondaryButton