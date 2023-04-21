import { useContext } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { ToastContext } from '../contexts/ToastContextProvider';

import './InfoToast.css'

function InfoToast() {

    const toastContext = useContext(ToastContext)

    //const successfullOrderMessage = 'Order #123131 has been successfully placed. To track your order click <a href="#">here</a> or go to "My Orders" in your Profile'
    //const errorMessage = 'There was problem placing your order. Please try again!'

    return (
        <Row>
            <Col md={6}>
                <ToastContainer position='top-center' data-testid="toast-container">
                    <Toast show={toastContext.show} onClose={toastContext.toggleShow}>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">BookStore</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>{toastContext.message}</Toast.Body>
                    </Toast>
                    <Toast show={toastContext.showError} onClose={toastContext.toggleShowError} bg="warning">
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">BookStore</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>{toastContext.message}</Toast.Body>
                    </Toast>
                </ToastContainer>
            </Col>
        </Row>
    );
}

export default InfoToast