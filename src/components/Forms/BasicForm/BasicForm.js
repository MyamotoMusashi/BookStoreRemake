import PropTypes from 'prop-types';

function BasicForm(props) {
    let children = props.children || []

    return <div {...props}>
        <p>{props.header}</p>
        {children}
    </div>
}

BasicForm.propTypes = {
    header: PropTypes.string,
    children: PropTypes.element
}

export default BasicForm