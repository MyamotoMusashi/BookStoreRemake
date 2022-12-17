import { useSearchParams } from 'react-router-dom'

import { Col } from 'react-bootstrap';

import ProfileInfo from "../ProfileInfo/ProfileInfoPage"
import ProfileOrders from "../ProfileOrders/ProfileOrders";

function ProfilePage() {

    let [searchParams] = useSearchParams();

    const profileInfoPage = <Col className='profile-page-main'>
        <ProfileInfo />
    </Col>

    const profileOrdersPage = <Col className='profile-page-main'>
        <ProfileOrders />
    </Col>

    if (searchParams.get('get') === 'profileInfo') {
        return profileInfoPage
    }
    else if (searchParams.get('get') === 'myOrders') {
        return profileOrdersPage
    }
}

export default ProfilePage