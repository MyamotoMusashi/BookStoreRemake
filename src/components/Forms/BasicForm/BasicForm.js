function BasicForm(props) {
    let children = props.children || []

    return <div {...props}>
        <p>{props.header}</p>
        {children}
    </div>
}

export default BasicForm