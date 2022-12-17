import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { Row, Col } from "react-bootstrap"

import PrimaryButton from "../../../Buttons/PrimaryButton/PrimaryButton"
import userProfilePicture from './user-profile-picture.jpg'

import userService from "../../../../services/userService"

import './ProfileInfoPage.css'
import PersonalInformationForm from "../../../Forms/PersonalInformationForm/PersonalInformationForm"

function ProfileInfoPage() {
    let { userId } = useParams()
    let [user, setUser] = useState()
    let changedInputs = {}
    let changedUserInputs = {}
    let changedShippingInputs = {}
    let [isLoaded, setIsLoaded] = useState(false)
    let [readOnly, setReadOnly] = useState(true)

    useEffect(() => {
        userService.getUserByIDSpring(userId).then(async res => {
            setUser(await res.json())
            setIsLoaded(true)
        })
    }, [])

    function onEdit() {
        setReadOnly(false)
    }

    function onSave() {

        changedInputs = changedUserInputs
        changedInputs.shippingInformation = changedShippingInputs
        userService.updateUserSpring(userId, changedInputs)
            .then(() => {
                setReadOnly(true)
            })
    }

    function onCancel() {
        setReadOnly(true)
    }

    function handleUserInputChange(e) {
        changedUserInputs = e
    }

    function handleShippingInputChange(e) {
        changedShippingInputs = e
    }

    function handleBillingInputChange() {

    }

    if (isLoaded) {
        return <Row className={readOnly ? 'profile-page-wrapper align-items-start' : 'profile-page-wrapper align-items-start editable'}>
            <Col md={2} className='profile-page'>
                <Row>
                    <Col>
                        <img src={userProfilePicture} alt="" className="user-profile-picture" />
                    </Col>
                </Row>
                <Row>
                    <Col className="user-profile-edit-button-wrapper">
                        <PrimaryButton text="Edit Profile" onClick={onEdit} />
                    </Col>
                </Row>
            </Col>
            <Col md={10}>
                <PersonalInformationForm userForm onHandleUserInputChange={handleUserInputChange} onHandleShippingInputChange={handleShippingInputChange} onHandleBillingInputChange={handleBillingInputChange} user={user} readOnly={readOnly}/>
                {readOnly
                    ? <></>
                    :
                    <>
                        <Row>
                            <Col md={2} className="offset-4">
                                    <button onClick={onCancel}>Cancel</button>
                            </Col>
                            <Col md={2}>
                                <PrimaryButton text="Save" onClick={onSave} />
                            </Col>
                        </Row>
                    </>
                }
            </Col>
        </Row>
    }
}

export default ProfileInfoPage