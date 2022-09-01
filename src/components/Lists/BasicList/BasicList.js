import './BasicList.css'

function BasicList(props) {
    let myClassName = "row list-group list-group-horizontal basic-list " + (props.className || '')


    return <ul className={myClassName.trim()}>
        {props.children.map((item) => {
            return <li className="col-2 list-group-item basic-list-item">
                {item}
            </li>
        })}
    </ul>
}

export default BasicList