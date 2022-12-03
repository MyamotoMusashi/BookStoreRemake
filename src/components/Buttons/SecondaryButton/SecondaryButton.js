import PropTypes from 'prop-types';

import './SecondaryButton.css'

function SecondaryButton(props){
    let text = props.text

    return <button className="secondary-btn" {...props}>{text}</button>
}

SecondaryButton.propTypes = {
    text: PropTypes.string
}

export default SecondaryButton