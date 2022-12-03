import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { Row, Col } from "react-bootstrap"

import PrimaryButton from "../../../Buttons/PrimaryButton/PrimaryButton"
import userProfilePicture from './user-profile-picture.jpg'
import UserInformationForm from "../../../Forms/UserInformationForm/UserInformationForm"
import ShippingInformationForm from '../../../Forms/ShippingInformationForm/ShippingInformationForm'

import userService from "../../../../services/userService"

import './ProfileInfoPage.css'

function ProfileInfoPage() {
    let navigate = useNavigate()
    let { userId } = useParams()
    let [user, setUser] = useState()
    let [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        userService.getUserByIDSpring(userId).then(async res => {
            setUser(await res.json())
            setIsLoaded(true)
        })
    }, [])

    function onEdit() {
        navigate(`/users/${user.id}?put=profileInfo`)
    }

    if (isLoaded) {
        return <Row className='profile-page-wrapper align-items-start'>
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
                <Row>
                    <Col>
                        <p>User Information:</p>
                        <UserInformationForm readOnly reactExtended defaultValues={user} />
                    </Col>
                </Row>
                <Row>
                    <p>Shipping Information</p>
                    <ShippingInformationForm react defaultValues={user?.shippingInformation} readOnly />
                </Row>
                <Row>
                    <p>Billing Information</p>
                    <ShippingInformationForm react defaultValues={user?.billingInformation} readOnly />
                </Row>
            </Col>
        </Row>
    }
}

export default ProfileInfoPage