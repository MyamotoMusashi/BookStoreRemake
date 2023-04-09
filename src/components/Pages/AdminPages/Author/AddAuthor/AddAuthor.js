import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Form } from "react-bootstrap"
import authorService from "../../../../../services/AuthorService"
import { ToastContext } from "../../../../contexts/ToastContextProvider"

function AddAuthor() {
    let [validated, setValidated] = useState()
    let [name, setName] = useState()
    let [description, setDescription] = useState()
    let [pictureUrl, setPictureUrl] = useState()
    let toastContext = useContext(ToastContext)
    let navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        if (event.target.checkValidity() == false) {
            event.stopPropagation();
        }
        else {
            authorService.addAuthor({ name: name, description: description, pictureUrl: pictureUrl })
                .then(async (res) => {
                    const response = await res
                    if (response.status == 200) {
                        toastContext.displayMessage('author successfully added')
                        console.log(await response.json())
                        navigate('/admin/authors')
                        console.log("success")
                    }
                    else {
                        console.log("failure")
                    }
                })
        }
        setValidated(true)
    }

    function onNameChange(event) {
        console.log(event.target.name)
        switch (event.target.name) {
            case "nameInput":
                setName(event.target.value)
                break;
            case "descriptionInput":
                setDescription(event.target.value)
                break;
            case "pictureUrlInput":
                setPictureUrl(event.target.value)
                break;
        }
    }

    return <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control name="nameInput" type="text" placeholder="Enter name" required onChange={onNameChange}/>
            <Form.Control.Feedback type="invalid" data-validated={validated} data-testid="form-name-feedback">Please enter name.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control name="descriptionInput" type="text" placeholder="Enter description" required onChange={onNameChange} />
            <Form.Control.Feedback type="invalid" data-validated={validated} data-testid="form-description-feedback">Please enter description.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="pictureUrl">
            <Form.Label>Picture URL</Form.Label>
            <Form.Control name="pictureUrlInput" type="url" placeholder="Enter url to picture" required onChange={onNameChange} />
            <Form.Control.Feedback type="invalid" data-validated={validated} data-testid="form-url-feedback">Please enter url to picture.</Form.Control.Feedback>
        </Form.Group>
        <button type="submit">Add</button>
    </Form>
}

export default AddAuthor