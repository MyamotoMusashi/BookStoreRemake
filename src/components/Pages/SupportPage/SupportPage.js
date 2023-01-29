import { Form, Button } from "react-bootstrap"

function SupportPage() {
    return <>
        <p>Please submit your query by entering the required information bellow or contact us at 1-777-333333333</p>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    Please enter valid email address or we would not be able to get back to you.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Query</Form.Label>
                <Form.Control as="textarea" rows={10} placeholder="Enter your query" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </>
}

export default SupportPage