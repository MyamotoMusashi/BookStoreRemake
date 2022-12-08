import { useSearchParams } from 'react-router-dom'

import ProfileInfo from "../ProfileInfo/ProfileInfoPage"
import ProfileOrders from "../ProfileOrders/ProfileOrders";

function ProfilePage() {

    let [searchParams] = useSearchParams();

    const profileInfoPage = <div className='col-12 .profile-page-main'>
        <ProfileInfo />
    </div>

    const profileOrdersPage = <div className='col-12 .profile-page-main'>
        <ProfileOrders />
    </div>

    if (searchParams.get('get') === 'profileInfo') {
        return profileInfoPage
    }
    else if (searchParams.get('get') === 'myOrders') {
        return profileOrdersPage
    }
}

export default ProfilePage