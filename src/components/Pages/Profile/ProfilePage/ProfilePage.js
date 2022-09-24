import { useSearchParams } from 'react-router-dom'

import ProfileInfo from "../ProfileInfo/ProfileInfoPage"
import ProfileOrders from "../ProfileOrders/ProfileOrders";
import SubNavigationButton from "../../../Buttons/SubNavigationButton/SubNavigationButton"
import EditProfileInfo from "../EditProfileInfo/EditProfileInfo";

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

    const editProfileInfoPage = <div className='col-12 .profile-page-main'>
        <div className='row profile-page-navigation'>
            <div className='col-2'><SubNavigationButton to="?get=profileInfo" text="Profile Information"></SubNavigationButton></div>
            <div className='col-1'><SubNavigationButton to="?get=myOrders" text="My Orders"></SubNavigationButton></div>
        </div>
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