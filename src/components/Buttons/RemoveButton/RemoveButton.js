import PropTypes from 'prop-types';

import './RemoveButton.css'

function RemoveButton(props) {
    let text = props.text

    return <button className="remove-btn" {...props}>
        {text}
        {props.children}
    </button>
}

RemoveButton.propTypes = {
    text: PropTypes.string,
    children: PropTypes.element
}

export default RemoveButton