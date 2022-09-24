import PrimaryButton from "../../../Buttons/PrimaryButton/PrimaryButton"
import userProfilePicture from './user-profile-picture.jpg'
import UserInformationForm from "../../../Forms/UserInformationForm/UserInformationForm"
import ShippingInformationForm from '../../../Forms/ShippingInformationForm/ShippingInformationForm'
import BillingInformationForm from '../../../Forms/BillingInformationForm/BillingInformationForm'

import './ProfileInfoPage.css'
import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import userService from "../../../../services/userService"


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
        return <div className='row profile-page-wrapper align-items-center'>
            <div className='col-3 profile-page'>
                <div className="row">
                    <div className="col">
                        <img src={userProfilePicture} alt="" className="user-profile-picture" />
                    </div>
                </div>
                <div className="row">
                    <div className="col user-profile-edit-button-wrapper">
                        <PrimaryButton text="Edit Profile" onClick={onEdit} />
                    </div>
                </div>
            </div>
            <div className="col-8">
                <div className="row">
                    <div className="col">
                        <UserInformationForm readOnly basic defaultValues={user} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ShippingInformationForm basic defaultValues={user?.shippingInformation} readOnly />
                    </div>
                    <div className="col">
                        <BillingInformationForm defaultValues={user?.billingInformation} readOnly />
                    </div>
                </div>
            </div>
        </div>
    }
}

export default ProfileInfoPage