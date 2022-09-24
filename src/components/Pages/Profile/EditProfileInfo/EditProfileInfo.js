import PrimaryButton from "../../../Buttons/PrimaryButton/PrimaryButton"
import UserInformationForm from "../../../Forms/UserInformationForm/UserInformationForm"
import ShippingInformationForm from "../../../Forms/ShippingInformationForm/ShippingInformationForm"
import BillingInformationForm from "../../../Forms/BillingInformationForm/BillingInformationForm"

import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import userProfilePicture from '../ProfileInfo/user-profile-picture.jpg'

import './EditProfileInfo.css'
import userService from "../../../../services/userService"

function EditProfileInfo() {
    let navigate = useNavigate()
    let { userId } = useParams()

    let [user, setUser] = useState()
    let changedInputs = {}
    let changedUserInputs = {}
    let changedShippingInputs = {}
    let [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        userService.getUserByIDSpring(userId).then(async res => {
            setUser(await res.json())
            setIsLoaded(true)
        })
    }, [])

    function handleUserInputChange(e) {
        changedUserInputs = e
    }

    function handleShippingInputChange(e) {
        changedShippingInputs = e
    }

    function handleBillingInputChange(e) {

    }


    function onSave() {
        changedInputs = changedUserInputs
        changedInputs.shippingInformation = changedShippingInputs
        userService.updateUserSpring(userId, changedInputs)
            .then(async res => {
                navigate(`/users/${userId}?get=profileInfo`)
            })
    }

    if (isLoaded) {
        return <div className='row edit-profile-page-wrapper align-items-center'>
            <div className='col-3 profile-page'>
                <div className="row">
                    <div className="col">
                        <img src={userProfilePicture} alt="" className="user-profile-picture" />
                    </div>
                </div>
            </div>
            <div className="col-8">
                <div className="row">
                    <div className="col">
                        <UserInformationForm basic defaultValues={user} onChange={handleUserInputChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ShippingInformationForm defaultValues={user?.shippingInformation} onChange={handleShippingInputChange} />
                    </div>
                    <div className="col">
                        <BillingInformationForm defaultValues={user?.billingInformation} onChange={handleBillingInputChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="offset-3 col-3">
                        <button>Cancel</button>
                    </div>
                    <div className="col-3">
                        <PrimaryButton text="Save" onClick={onSave} />
                    </div>
                </div>
            </div>
        </div>
    }
}

export default EditProfileInfo