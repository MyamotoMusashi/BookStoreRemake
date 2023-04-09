import { useState } from "react"
import { Form } from "react-bootstrap"
import authorService from "../../../../../services/AuthorService"

function AddAuthor() {
    let [name, setName] = useState()
    let [description, setDescription] = useState()
    let [pictureUrl, setPictureUrl] = useState()

    function handleSubmit(event){
        event.preventDefault()
        console.log(description)
        console.log(pictureUrl)
        authorService.addAuthor({name: name, description: description, pictureUrl: pictureUrl})
            .then(async (res) => {
                console.log(await res.json())
            })
    }

    function onNameChange(event){
        console.log(event.target.name)
        switch(event.target.name){
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

    return <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control name="nameInput" type="text" placeholder="Enter name" onChange={onNameChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control name="descriptionInput" type="text" placeholder="Enter description" onChange={onNameChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="pictureUrl">
            <Form.Label>Picture URL</Form.Label>
            <Form.Control name="pictureUrlInput" type="text" placeholder="Enter url to picture" onChange={onNameChange}/>
        </Form.Group>
        <button type="submit">Add</button>
    </Form>
}

export default AddAuthor