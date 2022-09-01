import cover from '../../../../../BookItem/cover.jfif'
import { Link } from 'react-router-dom'
import './ProfileOrderItemListItem.css'

function ProfileOrderItemListItem() {
    return <li className="list-group-item flex-fill profile-order-item-list-item">
        <div>
            <img src={cover} alt="" />
            <h2 className=''>A Game of Thrones</h2>
            <h3 className=''>(George R. R Martin)</h3>
            <p className=''>The cold is returning to... <span><Link to="/books/1" className='read-more-link'>Read more</Link></span></p>
            <p className=''>$10.96</p>
        </div>
    </li>
}

export default ProfileOrderItemListItem