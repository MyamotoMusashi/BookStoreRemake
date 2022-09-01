import PrimaryButton from "../../../Buttons/PrimaryButton/PrimaryButton"
import SubNavigationButton from "../../../Buttons/SubNavigationButton/SubNavigationButton"

import userProfilePicture from './user-profile-picture.jpg'
import './ProfileInfo.css'
import UserInformationForm from "../../../Forms/UserInformationForm/UserInformationForm"
import ShippingInformationForm from '../../../Forms/ShippingInformationForm/ShippingInformationForm'
import BillingInformationForm from '../../../Forms/BillingInformationForm/BillingInformationForm'

function ProfileInfoPage() {
    let userInformation = [
        {
            placeholder: "Username",
            size: 4
        },
        {
            placeholder: "First Name",
            size: 4,
        },
        {
            placeholder: "Last Name",
            size: 4,
        },
        {
            placeholder: "Email",
            size: 4,
        },
        {
            placeholder: "Phone Number",
            size: 4
        }
    ]

    return <div className='row profile-page-wrapper align-items-center'>
        <div className='col-3 profile-page'>
            <div className="row">
                <div className="col">
                    <img src={userProfilePicture} alt="" className="user-profile-picture" />
                </div>
            </div>
            <div className="row">
                <div className="col user-profile-edit-button-wrapper">
                    <PrimaryButton text="Edit Profile" />
                </div>
            </div>
        </div>
        <div className="col-8">
            <div className="row">
                <div className="col">
                    <UserInformationForm data={userInformation} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ShippingInformationForm />
                </div>
                <div className="col">
                    <BillingInformationForm />
                </div>
            </div>
        </div>
    </div>
}

export default ProfileInfoPage