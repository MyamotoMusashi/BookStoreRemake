import './SubNavigationButton.css'
import { Link } from 'react-router-dom'

function SubNavigationButton(props){
    let text = props.text || "What's New?"
    let to = props.to || '#'


    return <Link to={to} className="tag-btn" {...props}>{text}</Link>
}

export default SubNavigationButton