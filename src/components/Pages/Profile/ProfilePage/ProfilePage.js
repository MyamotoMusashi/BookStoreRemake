import ProfileInfo from "../ProfileInfo/ProfileInfo"
import ProfileOrders from "../ProfileOrders/ProfileOrders";
import SubNavigationButton from "../../../Buttons/SubNavigationButton/SubNavigationButton"

import { useSearchParams } from 'react-router-dom'

function ProfilePage() {

    let [searchParams, setSearchParams] = useSearchParams();

    const profileInfoPage = <div className='col-12 .profile-page-main'>
        <div className='row profile-page-navigation'>
            <div className='col-2'><SubNavigationButton to="?get=profileInfo" text="Profile Information"></SubNavigationButton></div>
            <div className='col-1'><SubNavigationButton to="?get=myOrders" text="My Orders"></SubNavigationButton></div>
        </div>
        <ProfileInfo />
    </div>

    const profileOrdersPage = <div className='col-12 .profile-page-main'>
        <div className='row profile-page-navigation'>
            <div className='col-2'><SubNavigationButton to="?get=profileInfo" text="Profile Information"></SubNavigationButton></div>
            <div className='col-1'><SubNavigationButton to="?get=myOrders" text="My Orders"></SubNavigationButton></div>
        </div>
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