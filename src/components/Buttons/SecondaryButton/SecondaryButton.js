import PropTypes from 'prop-types';

import './SecondaryButton.css'

function SecondaryButton(props){
    let text = props.text

    return <button className="secondary-btn" {...props}>
        {text}
        {props.children}
        </button>
}

SecondaryButton.propTypes = {
    text: PropTypes.string,
    children: PropTypes.element
}

export default SecondaryButton