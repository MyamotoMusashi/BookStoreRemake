import './NavigationButton.css'
import { Link } from 'react-router-dom'

function Button(props){
    let text = props.text
    let to = props.to || '#'

    return <Link to={to || props.offcanvas} className="nav-btn" {...props}>{text}{props.children}</Link>
}

export default Button