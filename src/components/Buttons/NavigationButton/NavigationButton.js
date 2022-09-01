import './NavigationButton.css'
import { Link } from 'react-router-dom'

function Button(props){
    let text = props.text
    let to = props.to || '#'

    return <Link to={to} className="nav-btn" {...props}>{text}</Link>
}

export default Button