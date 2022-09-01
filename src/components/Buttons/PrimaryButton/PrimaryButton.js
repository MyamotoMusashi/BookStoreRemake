import './PrimaryButton.css'

function PrimaryButton(props){
    let text = props.text

    return <button className='primary-btn' {...props}>{text}</button>
}

export default PrimaryButton
