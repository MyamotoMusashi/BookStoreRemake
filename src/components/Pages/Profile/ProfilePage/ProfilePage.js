import { useSearchParams } from 'react-router-dom'

import ProfileInfo from "../ProfileInfo/ProfileInfoPage"
import ProfileOrders from "../ProfileOrders/ProfileOrders";
import EditProfileInfo from "../EditProfileInfo/EditProfileInfo";

function ProfilePage() {

    let [searchParams, setSearchParams] = useSearchParams();

    const profileInfoPage = <div className='col-12 .profile-page-main'>
        <ProfileInfo />
    </div>

    const profileOrdersPage = <div className='col-12 .profile-page-main'>
        <ProfileOrders />
    </div>

    const editProfileInfoPage = <div className='col-12 .profile-page-main'>
        <EditProfileInfo />
    </div>

    if (searchParams.get('get') === 'profileInfo') {
        return profileInfoPage
    }
    else if (searchParams.get('get') === 'myOrders') {
        return profileOrdersPage
    }
    else if (searchParams.get('put') === 'profileInfo') {
        return editProfileInfoPage
    }
}

export default ProfilePage