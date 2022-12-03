import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import './SubNavigationButton.css'

function SubNavigationButton(props){
    let text = props.text || "What's New?"
    let to = props.to || '#'


    return <Link to={to} className="tag-btn" {...props}>{text}</Link>
}

SubNavigationButton.propTypes = {
    text: PropTypes.string,
    to: PropTypes.string
}

export default SubNavigationButton