import PropTypes from 'prop-types';

import './RemoveButton.css'

function RemoveButton(props){
    let text = props.text

    return <button className="remove-btn" {...props}>{text}</button>
}

RemoveButton.propTypes = {
    text: PropTypes.string
}

export default RemoveButton