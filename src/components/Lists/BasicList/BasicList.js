import { element } from 'prop-types'
import { string } from 'prop-types'
import './BasicList.css'

function BasicList(props) {
    let myClassName = "row list-group list-group-horizontal basic-list " + (props.className || '')


    return <ul className={myClassName.trim()}>
        {props.children.map((item, index) => {
            return <li className="col-2 list-group-item basic-list-item" key={index}>
                {item}
            </li>
        })}
    </ul>
}

BasicList.propTypes = {
    className: string,
    children: element
}

export default BasicList