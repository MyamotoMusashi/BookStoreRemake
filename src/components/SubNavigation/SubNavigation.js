import PropTypes from 'prop-types';
import { Nav, Row, Col } from "react-bootstrap"
import SubNavigationButton from "../Buttons/SubNavigationButton/SubNavigationButton"

function SubNavigation(props) {
    return <Nav as={Row} variant="pills" bsPrefix="home-page-subnavigation" data-testid="subnavigation">
        {props.data.map((link, index) => {
            return <Nav.Item as={Col} md={2} data-testid={`subnavigation-${link.dataTestId}-item`} key={index}>
                {link.type == "button" ? <button className="tag-btn" onClick={link.onClick} data-testid={`subnavigation-${link.dataTestId}-button`}>{link.text}</button> : <></>}
                {link.type == "link"
                    ? <Nav.Link as={SubNavigationButton} text={link.text} to={link.href} bsPrefix="tag-btn-link" data-testid={`subnavigation-${link.dataTestId}-link`}></Nav.Link>
                    : <></>}
            </Nav.Item>
        })}
        {props.children}
    </Nav>
}

SubNavigation.propTypes = {
    data: PropTypes.array,
    children: PropTypes.array
}

export default SubNavigation