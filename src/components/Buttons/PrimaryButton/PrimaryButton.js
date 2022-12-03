import PropTypes from 'prop-types';

import './PrimaryButton.css'

function PrimaryButton(props){
    let text = props.text

    return <button className='primary-btn' {...props}>{text}</button>
}

PrimaryButton.propTypes = {
    text: PropTypes.string
}

export default PrimaryButton
