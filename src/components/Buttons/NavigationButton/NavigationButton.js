import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import './NavigationButton.css'

function Button(props){
    let text = props.text
    let to = props.to || '#'

    return <Link to={to || props.offcanvas} className="nav-btn" {...props}>{text}{props.children}</Link>
}

Button.propTypes = {
    text: PropTypes.string,
    to: PropTypes.string,
    offcanvas: PropTypes.string,
    children: PropTypes.element
}

export default Button